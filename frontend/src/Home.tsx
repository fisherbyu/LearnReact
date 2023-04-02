import React from "react";
import joel from './1.jpg'

function Home(props: any) {
    //Basic Home Page
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <h1>Welcome to My Site!</h1>
					<img src={joel} alt="Joel Hilton" />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;