import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Blog Repo</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        This project was done By{" "}
        Bhanu Chaitanya. 
        Click on the below link to navigate
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/desktopblog" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Desktopblog
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
