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
                    {/* <style>
                        @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:700&display=swap');
                    </style> */}
                    <h2>Natural Comfort Sourced from Sustainable Natural Materials</h2>
                    {/* <style>
                        @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans&display=swap');
                    </style> */}
                    <p>It all starts from the finest materials Mother Nature offers.
                    Designed practically and made from sustainable resources.
                    Closing the loop with ZEROING waste because we care about OUR planet.
                    That sounds better, right?</p>
                    {/* <Link className="about-main-link" to={"/materials"}>
                        <input 
                            type="submit"
                            className="submit"
                            value="LEARN MORE ABOUT OUR MATERIALS"
                        />
                    </Link> */}
                    <button className="about-main-link" onClick={ () => this.props.history.push("/materials") }>LEARN MORE ABOUT OUR MATERIALS</button>
                </div>
            </div>
        );
    }
}

export default withRouter(AboutMain);