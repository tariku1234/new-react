import React from 'react'
//import "./WorkCard3Styles.css";
import "./WorkCardStyles.css";

import { NavLink } from "react-router-dom";

import { useEffect, useState } from 'react';



const WorkCard3 = () => {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div id='work-container'>
            <h1 className="project-heading">Projects</h1>
 
            {projects.map(project => (
                <div key={project.id} className='project-container'>
                    <div className="project-card">
                        <img src={project.image} alt={project.image} style={{ width: '200px', height: 'auto' }} />
                        <h2 className="project-tittle">{project.title}</h2>
                        <div className="pro-details">
                            <p>{project.description}</p>

                            <div className="pro-btns">
                                <NavLink to="www.linkedin.com/in/tariku-negash-2776112b5" className="btn">View</NavLink>
                                <NavLink to="www.linkedin.com/in/tariku-negash-2776112b5" className="btn">source</NavLink>

                            </div>
                        </div>
                    </div>
                </div>
            ))

            }
        </div>
    )



}

export default WorkCard3