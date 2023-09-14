import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <>
      <h1 className="homeHead">
        Welcome to Loons Lab Exam TimeTable Generator
      </h1>
      <div className="btnContainer">
        <Link to="/generate-table">
          <button className="homeBtn">Generate TimeTable</button>
        </Link>
        <Link to="/view-schedule">
          <button className="homeBtn">View TimeTables</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
