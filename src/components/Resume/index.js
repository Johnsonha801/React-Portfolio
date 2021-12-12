import React from 'react';

function Resume() {

    return (
        <section>
            <h2>Resume</h2>

            <span>
                <a href="../../assets/documents/Resume.docx" download>Download Resume</a>
            </span>
            
            <div>
                <h3>Technical Skills</h3>
                <ul className="list-group">
                    <li className="list-group-item">HTML</li>
                    <li className="list-group-item">CSS</li>
                    <li className="list-group-item">Bootstrap</li>
                    <li className="list-group-item">Responsive Design</li>
                    <li className="list-group-item">Javascript</li>
                    <li className="list-group-item">JQuery</li>
                    <li className="list-group-item">React</li>
                    <li className="list-group-item">Ajax</li>
                    <li className="list-group-item">APIs</li>
                    <li className="list-group-item">Node</li>
                    <li className="list-group-item">Express</li>
                    <li className="list-group-item">REST / CRUD</li>
                    <li className="list-group-item">MySQL / Sequelize</li>
                    <li className="list-group-item">MongoDB / Mongoose</li>
                </ul>
            </div>
            
        </section>
    );
}

export default Resume;