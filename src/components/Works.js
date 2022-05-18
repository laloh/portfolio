import "../App.css";
import React from "react";
import ButtonAppBar from "./Header";
import worksData from "../content";
import { SiPython } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiGnubash } from "react-icons/si";

// TODO: Do a for loop to write the currently works i've made
const Works = (props) => {
  const stacks = {
    ts: <SiTypescript />,
    py: <SiPython />,
    gl: <SiGraphql />,
    node: <SiNodedotjs />,
    docker: <SiDocker />,
    dj: <SiDjango />,
    react: <SiReact />,
    mongodb: <SiMongodb />,
    fb: <SiFirebase />,
    postgres: <SiPostgresql />,
    sh: <SiGnubash />,
  };

  return (
    <div>
      <ButtonAppBar />
      <div className="title-works">
        <h1>Works</h1>
      </div>
      <div className="container-works">
        {worksData.map((work) => (
          <div className="card">
            <img
              className="card-img"
              src={require("../assets/dashboard.png")}
              alt="Dashboard"
            />
            <div className="card-title">
              <h3>
                <a href={work.github}>{work.name}</a>
              </h3>
            </div>
            <div className="card-description">
              <p>{work.brief_desc}</p>
            </div>
            <div className="card-stack">
              {work.stack.map((item) => stacks[item])}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
