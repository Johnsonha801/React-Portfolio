import React, {useEffect} from 'react';

function Navigation(props) {

    const {
        selectedPage,
        setSelectedPage
    } = props;

    useEffect(() => {
        document.title = selectedPage;
    }, [selectedPage]);

    return (
        <nav className="">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <span className={`nav-link ${selectedPage === 'About' && " active"}`} onClick={() => setSelectedPage('About')}>
                        About
                    </span>
                </li>
                <li className="nav-item">
                    <span className={`nav-link ${selectedPage === 'Portfolio' && " active"}`} onClick={() => setSelectedPage('Portfolio')}>
                        Portfolio
                    </span>
                </li>
                <li className="nav-item">
                    <span className={`nav-link ${selectedPage === 'Contact' && " active"}`} onClick={() => setSelectedPage('Contact')}>
                        Contact
                    </span>
                </li>
                <li className="nav-item">
                    <span className={`nav-link ${selectedPage === 'Resume' && " active"}`} onClick={() => setSelectedPage('Resume')}>
                        Resume
                    </span>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;