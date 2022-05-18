import "../App.css";
import React from "react";
import ButtonAppBar from "./Header";
import { talksData } from "../content";
import { FcGoogle } from "react-icons/fc";

// TODO: Do a for loop to write the currently works i've made
const Posts = (props) => {
  const stacks = {
    google: <FcGoogle />,
  };

  return (
    <div>
      <ButtonAppBar />
      <div className="title-works">
        <h1>Talks</h1>
      </div>
      <div className="container-works">
        {talksData.map((talk) => (
          <div className="card">
            <img
              className="card-img"
              src={require(`../assets/${talk.asset}`)}
              alt="Dashboard"
            />
            <div className="card-title">
              <h3>
                <a href={talk.link}>{talk.name}</a>
              </h3>
            </div>
            <div className="card-description">
              <p>{talk.brief_desc}</p>
            </div>
            <div className="card-stack">
              {talk.stack.map((item) => stacks[item])}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
