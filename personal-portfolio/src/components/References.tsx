import React from "react";
import '../assets/styles/Expertise.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const references = [
    {
        name: "Danny Ehlert",
        image: "../assets/images/john_doe.jpg",
        description: "Manufacturing Engineer at Robert Bosch LLC. My Co-Op supervisor and mentor.",
        linkedin: "https://www.linkedin.com/in/danny-ehlert-193b886"
    },
    {
        name: "Bill Sotebier",
        image: "../assets/images/jane_smith.jpg",
        description: "Lead Controls Technician at Robert Bosch LLC. Worked closely on a large scale production web application during my second term at BOSCH.",
        linkedin: "https://www.linkedin.com/in/bill-soetebier-63b0764b/"
    },
    {
        name: "Chris Plaue",
        image: "../assets/images/michael_brown.jpg",
        description: "Principal lecturer and Undergraduate Coordinator at Clemson University. My academic advisor, former professor, former boss. Taught me about pointers during my first semester at Clemson.",
        linkedin: "https://www.linkedin.com/in/chris-plaue-9431944"
    }
];

function References() {
    return (
        <div className="container" id="references">
            <div className="references-container">
                <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>References</h1>
                <div className="references-grid" style={{ display: 'flex', justifyContent: 'space-around' }}>
                    {references.map((ref, index) => (
                        <div className="reference" key={index} style={{ padding: '0 20px', textAlign: 'left' }}>
                            <a href={ref.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '10px' }}>
                                <LinkedInIcon style={{ fontSize: '50px', color: '#0077b5' }} />
                            </a>
                            <h3>{ref.name}</h3>
                            <p>{ref.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default References;