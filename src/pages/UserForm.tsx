// UserForm.tsx
import React, { useState } from "react";

interface UserFormData {
  firstName: string;
  secondName: string;
  age: number | "";
  mobileNumber: string;
  address: string;
}

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<UserFormData>({
    firstName: "",
    secondName: "",
    age: "",
    mobileNumber: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form validation logic here
    alert(JSON.stringify(formData, null, 2));
    // Optionally, handle the form data (e.g., send it to an API)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
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
      <div>
        <label htmlFor="secondName">Second Name:</label>
        <input
          type="text"
          id="secondName"
          name="secondName"
          value={formData.secondName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="text"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
