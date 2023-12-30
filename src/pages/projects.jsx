import React from "react";
import Headerx from "../components/headerx";
import '../styles/Index.css';
import ProjectComponent from "../components/projectComponent";
import projectData from '../data/projects.json';

const projects = projectData || [];

const generateColumnPattern = (index) => {
  const patterns = [
    { start: 2, end: 6 },
    { start: 1, end: 4 },
    { start: 4, end: 6 },
    { start: 2, end: 6 },
    // Add more patterns as needed
  ];

  const patternIndex = index % patterns.length;
  return patterns[patternIndex];
};

const Projects = () => {
  return (
    <>
      <Headerx />

      <div className="flex flex-col items-center justify-center">
        <h1 className="prose underline underline-offset-1 text-2xl font-semibold">Projects</h1>
        <h4 className="prose font-medium font-mono text-md mt-5">Here is a list of some of my projects with a brief description. For a full list of my work,
          go to my github. Click <a className="btn btn-sm btn-outline btn-info no-underline ml-1 " href="https://github.com/parthsingh" target="_blank">here.</a></h4>
        <div className="divider mx-8"></div>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {projects.map((project, index) => {
          const { start, end } = generateColumnPattern(index);
          console.log(start, end);
          return (
            <div key={index} className="col-start-2 col-end-6">
              <ProjectComponent project={project} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
//{`col-start-${start} col-end-${end}`}