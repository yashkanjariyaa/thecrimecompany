import mongoose, { Document, Model } from "mongoose";
import bcrypt from "bcrypt";

const SALT_WORK_FACTOR = 10;

interface IUser extends Document {
  email: string;
  password: string;
  comparePassword(
    candidatePassword: string,
    cb: (err: Error | null, isMatch?: boolean) => void
  ): void;
}

const userAuthSchema = new mongoose.Schema<IUser>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

// Middleware to hash the password before saving
userAuthSchema.pre("save", function (next) {
  const user = this as IUser;

  // Only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // Generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // Hash the password using the salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      // Override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

// Method to compare a given password with the database hash
userAuthSchema.methods.comparePassword = function (
  candidatePassword: string,
  cb: (err: Error | null, isMatch?: boolean) => void
) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const UserAuthModel: Model<IUser> = mongoose.model<IUser>("UserAuth", userAuthSchema);
export default UserAuthModel;
