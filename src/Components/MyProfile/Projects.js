import React from 'react'
import './Project.css'

const Projects = (props) => {
    return (
        <div className='project-main'>
            <div className='proj-container'>
                  <div className='project-header'> 
                       <h4>Project:{props.ProjName}</h4>
                  </div>
            </div>
        </div>
    )
}

export default Projects
