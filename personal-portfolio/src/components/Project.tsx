import React from "react";
import mock01 from '../assets/images/projectWebsite.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/Puncher-insides.jpg';
import mock08 from '../assets/images/Puncher.jpg';
import mock09 from '../assets/images/RTLAndon.png';
import mock10 from '../assets/images/LBVis.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={mock10} className="zoom" alt="thumbnail" width="100%"/>
                <h2>ES Failure Visualization Application </h2>
                <p>Developed a data visualization program to represent ES failures on a LTCC board using C#. This proprietary application is currently live on BOSCH Anderson's production floor.</p>
            </div>
            <div className="project">
                <img src={mock09} className="zoom" alt="thumbnail" width="100%"/>
                <h2>RTL Andon View</h2>
                <p>Fully integrated a newly installed RTL, a BOSCH production machine, with BOSCH's existing output visualization application. This project uses the Angular framework and required integration from machine, to database, to the web.</p>
            </div>
            <div className="project">
               <img src={mock08} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Manufacturing Engineering Projects</h2>
                <p>Performed various manufacturing engineering duties including: designing and building components of Operator work stations, creating specialized tables, carts, monitor mounts, and more using FMS, Testing equipment using a Werth measuring machine, and many more activities inside BOSCH's Class 100 and Class 10,000 clean rooms.</p>
            </div>
            <div className="project">
               <img src={mock07} className="zoom" alt="thumbnail" width="100%"/>
                <h2></h2>
                <p></p>
            </div>
            <div className="project">
                <a href="https://Willbrown1.github.io/willbrown" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://Willbrown1.github.io/willbrown" target="_blank" rel="noreferrer"><h2>Web Portfolio</h2></a>
                <p>Developed and published a personal portfolio website using React with Typescript and custom styling.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;