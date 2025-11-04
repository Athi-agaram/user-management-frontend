import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

function UserList() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await api.delete(`/users/${id}`);
      loadUsers();
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h3>All Users</h3>
      <table border="1" cellPadding="10">
        <thead>
          <tr style={{ backgroundColor: "#eee" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.password}</td>
              <td>
                <Link to={`/edit/${u.id}`}>Edit</Link>{" "}
                <button onClick={() => deleteUser(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
