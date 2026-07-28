import "./Projects.css";

import projects from "../../data/projects";

import ProjectCard from "./ProjectCard";

function Projects() {

    return (

        <section>

            <h2>Projects</h2>
            <div className="projects">            {

                projects.map(project => (

                    <ProjectCard

                        key={project.id}

                        title={project.title}

                        tech={project.tech}

                    />

                ))

            }</div>


        </section>

    );

}

export default Projects;