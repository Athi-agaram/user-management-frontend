import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const loadUser = async () => {
      const res = await api.get("/users");
      const found = res.data.find((u) => u.id === parseInt(id));
      if (found) setUser(found);
    };
    loadUser();
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put("/users", user);
    alert("✅ User updated successfully!");
    navigate("/");
  };

  return (
    <div>
      <h3>Edit User</h3>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditUser;
