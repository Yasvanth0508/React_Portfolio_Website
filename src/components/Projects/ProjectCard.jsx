function ProjectCard({

    title,

    tech

}){

    return(

        <div className="project-card">

            <h3>{title}</h3>

            <p>{tech}</p>

        </div>

    );

}

export default ProjectCard;