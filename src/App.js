import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import UserList from "./components/UserList";

function App() {
  return (
    <Router basename="/user-management-frontend"> {/* 👈 Important */}
      <Navbar />
      <div className="container" style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          {/* redirect any unknown routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
