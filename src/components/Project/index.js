import React from 'react';

function Project({project}) {
    const {filename, title, link, gitHubLink} = project;

    return (
        <div className="card bg-dark">
            <img 
                src={require(`../../assets/images/projects/${filename}`).default} 
                className="card-img-top" 
                alt={title} 
                key={title}
            />
            <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <a href={gitHubLink} className="btn github-button" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github-square fa-3x"></i>
                    </a>
                    <a href={link} className="btn primary-button" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
    );
}

export default Project;