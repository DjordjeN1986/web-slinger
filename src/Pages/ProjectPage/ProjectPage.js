import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import axios from "axios";

import "./project-page.scss";

export default function ProjectPage() {
  const [data, setData] = useState();

  useEffect(() => {
    axios("data.json")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("Error fetching");
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="description">
          <h3>This is the list of the projects that were built</h3>
        </div>
        <div className="project-cards">
          {data && <ProjectCard projects={data.projects} />}
        </div>
      </div>
    </>
  );
}
