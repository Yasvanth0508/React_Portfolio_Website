
import "./Skills.css";

import skills from "../../data/skills";

import SkillCard from "./SkillCard";

function Skills() {

    return (

        <section>

            <h2>Skills</h2>

            <div className="skills">

                {
                    skills.map(skill => (

                        <SkillCard

                            key={skill}

                            skill={skill}

                        />

                    ))
                }

            </div>

        </section>

    );

}

export default Skills;