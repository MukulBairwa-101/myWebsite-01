import React from 'react'
import { projects } from './Data';
const Projects = () => {
    return (
        <div className="project_section">
            <div>
                <h3>Featured Projects</h3>
                <a href="#">View all our works  </a>
            </div>
            <div className="works">
                {projects.map((el)=>{
                    return(
                        <>  
                            <div className="work_item">
                                <img src={el.src} alt="src" />
                                <a href={el.link}>{el.txt}</a>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;
