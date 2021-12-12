import React from 'react';
import Project from '../Project';

function Portfolio() {

    const projects = [
        {
            filename: 'budget.png',
            title: 'Budget_Tracker',
            link: 'https://glacial-fjord-30054.herokuapp.com/',
            gitHubLink: 'https://github.com/Johnsonha801/Budget_Tracker'
        },
        {
            filename: 'ecommerce.png',
            title: 'E-Commerce backend',
            link: 'https://drive.google.com/file/d/1EDCxVHHF7AGaXlUm14KVkGP023kq8A1P/view',
            gitHubLink: 'https://github.com/Johnsonha801/E-Commerce-backend'
        },
        {
            filename: 'flightplan.png',
            title: 'FlightPlan',
            link: 'https://tonyslonaker.github.io/flightplan/',
            gitHubLink: 'https://github.com/tonyslonaker/flightplan'
        },
        {
            filename: 'note-taker.PNG',
            title: 'Note Taker',
            link: 'https://fast-temple-82032.herokuapp.com/',
            gitHubLink: 'https://github.com/Johnsonha801/Note-Taker'
        },
        {
            filename: 'socialnetwork.png',
            title: 'Social Network api',
            link: 'https://drive.google.com/file/d/1uGPnJELph6AYwNi1EsQxHkmIwOiKSiSU/view',
            gitHubLink: 'https://github.com/Johnsonha801/Social-Network-Api'
        },
        {
            filename: 'random-password-generator.PNG',
            title: 'Password Generator',
            link: 'https://johnsonha801.github.io/Password-Generator/',
            gitHubLink: 'https://github.com/Johnsonha801/Password-Generator'
        },
        {
            filename: 'weather-dashboard.PNG',
            title: 'Weather Dashboard',
            link: 'https://johnsonha801.github.io/Weather-Dashboard/',
            gitHubLink: 'https://github.com/Johnsonha801/Weather-Dashboard'
        }
    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div className="wrapper">
                {projects.map((project) => (<Project project={project} key={project.title}/>))}
            </div>
        </section>
    );
}

export default Portfolio;