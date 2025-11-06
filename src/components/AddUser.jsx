import React, { useState } from "react";
import api from "../api"; // ✅

function AddUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/users", user); // ✅
    alert("✅ User added successfully!");
    setUser({ name: "", email: "", password: "", phoneNumber: "" });
  };

  return (
    <div>
      <h3>Add New User</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={user.name}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={user.email}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={user.password}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter phone number"
          value={user.phoneNumber}
          onChange={handleChange}
        /><br /><br />
        <button type="submit">Add User</button>      </form>
    </div>
  );
}

export default AddUser;



