import React from "react";

const Intro = (props) => {
  return (
    <div className="intro">
      <p>Hello 👋, I'm a Software Engineer based in Mexico!</p>
      <div className="intro-img">
        <div className="intro-img-profile">
          <h2>Eduardo Carrera</h2>
          <h4>Technology Enthusiast (Developer / Gamer / Data)</h4>
        </div>
        <img
          className="profile-img"
          src={require("../assets/profile.jpg")}
          alt="Developer"
        />
      </div>
    </div>
  );
};

export default Intro;
