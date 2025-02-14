import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faGit, faGitlab,} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "HTML",
    "CSS",
    "TypeScript",
    "JavaScript",
    "Vite",
    "Flask",
    "SQL",
    "npm",
    "Gulp"
];

const labelsSecond = [
    "Git",
    "Gitlab",
    "AWS",
    "Active Directory",
    "Linux",
    "Microsoft Office Suite"

];

const labelsThird = [
    "Python",
    "CSV",
    "JSON",
    "C#/.NET Core",
    "Power BI",
    "Excel Power Query"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I can build production-grade web applications using modern technologies such as React, Flask, Next.Js, Vite, and more. I have a strong proficiency in frontend + backend development and a deep understanding of the software development life cycle.</p>
                    <div className="flex-chips">
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGitlab} size="3x"/>
                    <h3>Workflow Automation</h3>
                    <p>Proficiency in Gitlab and DevOps techniques allows me to develop CI/CD pipelines and automated deployment to support projects long past their Go-Live.</p>
                    <div className="flex-chips">
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Visualization</h3>
                    <p>I can levereage new and old technologies to parse and prepare large datasets whenever, wherever, and however you need.</p>
                    <div className="flex-chips">
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;