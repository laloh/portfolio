import * as React from "react";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import SourceRoundedIcon from "@mui/icons-material/SourceRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <div className="header">
      <div className="header-profile">
        <div className="header-profile-name">
          <CodeIcon />
          <Link className="text-link" to="/">
            Me
          </Link>
        </div>
        <div className="header-profile-works">
          <WorkRoundedIcon />
          <Link className="text-link" to="/works">
            Works
          </Link>
        </div>
        <div className="header-profile-posts">
          <SourceRoundedIcon />
          <Link className="text-link" to="/posts">
            Talks
          </Link>
        </div>
        <div className="header-profile-source">
          <GitHubIcon />
          <span>
            <a href="https://github.com/laloh/portfolio">Source</a>
          </span>
        </div>
      </div>
    </div>
  );
}
