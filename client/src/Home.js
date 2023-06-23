import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <h1 className="text">Welcome to Friendo!</h1>
        <h3 className="text">Find your best friend their new best friend.</h3>
      </div>
      <div className="container">
        <div classname="side">
          <img className="picture" src="SignUp.PNG" alt="Friendo App"/>
          <h3>Sign Up</h3>
          <p>Sign-up with the link below to add your information.</p>
          <Link
            to="/signup"
            style={{
              mr: 4,
              variant: "h4",
              color: "black",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            <button>Sign Up</button>
          </Link>
        </div>
        <div classname="side">
        <img className="picture" src="AddDog.PNG" alt="Friendo App"/>
          <h3>Add Your Dog</h3>
          <p>Use this link to add all the information needed to find your dog their perfect match.</p>
          <Link
            to="/dogs/new"
            style={{
              mr: 4,
              variant: "h4",
              color: "black",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            <button>Add Dog</button>
          </Link>
        </div>
        <div classname="side">
        <img className="picture" src="FindFriend.PNG" alt="Friendo App"/>
          <h3>Find their new friends</h3>
          <p>Search through the library of other user's dogs and start making friends.</p>
          <Link
            to="/dogs"
            style={{
              mr: 4,
              variant: "h4",
              color: "black",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            <button>Dogs</button>
          </Link>
        </div>
      </div>
      <div className="learn-more-button">
      <Link
            to="/learn_more"
            style={{
              mr: 4,
              variant: "h4",
              color: "black",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            <button>Learn more</button>
          </Link>
      </div>
            <br/>
            <br/>
    </div>
  );
};

export default Home;
