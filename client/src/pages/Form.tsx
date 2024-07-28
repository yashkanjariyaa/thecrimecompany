import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../context/UserContext";
import user from "../api/user";
import "../assets/css/form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    mobileNumber: "",
    address: "",
  });
  const navigate = useNavigate();
  const { isLoggedIn, userEmail } = useUser();

  useEffect(() => {
    console.log("from component", isLoggedIn);
    if (!isLoggedIn) {
      navigate("/auth");
    }
  }, [navigate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to an API
    try {
      const { firstName, lastName, age, mobileNumber, address } = formData;
      const name = firstName + " " + lastName;
      const userData: UserData = {
        name: name,
        email: userEmail.email ?? "",
        age: parseInt(age),
        mobile: mobileNumber,
        address: address,
      };
      const response = user.createUser(userData);
      console.log("User data submitted", response);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="user-form">
      <form className="user-info-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            min="0"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            pattern="[0-9]{10}" // Assumes a 10-digit mobile number format
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
