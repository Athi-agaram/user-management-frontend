import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#222", color: "white" }}>
      <h2>User Management</h2>
      <div>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/add" style={{ color: "white" }}>
          Add User
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
