import React from 'react';

import { Link, withRouter } from 'react-router-dom';

class AboutMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about-main">
                <div className="about-image"></div>
                <div className="about-text">
                    <h2>Natural Comfort Sourced from Sustainable Natural Materials</h2>
        
                    <p>It all starts from the finest materials Mother Nature offers.
                    Designed practically and made from sustainable resources.
                    Closing the loop with ZEROING waste because we care about OUR planet.
                    That sounds better, right?</p>

                    <Link className="about-main-link" to={"/materials"}><button className="submit">LEARN MORE ABOUT OUR MATERIALS</button></Link>
                 
                </div>
            </div>
        );
    }
}

export default AboutMain; 