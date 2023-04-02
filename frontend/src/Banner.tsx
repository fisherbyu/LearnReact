import React from "react";

function NavBar() {
    return (
        // Create Navigation Bar to Link Pages across Site
        <React.Fragment>
            <div className="container">
                <div className="row">
                <nav className="navbar col-6">
                    <h3>Joel Hilton Super Site</h3>
                    <a className="" href="home">Home</a> |
                    <a href="movies"> Movies</a> | 
                    <a href="podcasts"> Podcasts</a>
                </nav>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NavBar;


