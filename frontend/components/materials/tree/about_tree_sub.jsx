import React from 'react';

import { Link } from 'react-router-dom';

class AboutTreeSub extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div className="about-tree-sub-image">

                {/* <div className="about-materials-sub"> */}
                <div className="about-tree-head-text">
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:800i&display=swap');
                        </style>
                    <h2>Rooted in Sustainability</h2>
                </div>

                <div className="about-tree-sub-texts">
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:700&display=swap');
                        </style>
                    <p>TENCEL™ Lyocell Eucalyptus tree fiber uses 95% LESS water than
                        traditional materials and cuts carbon footprint in half.
                    </p>
                    <p>LESS WASTE AND POLLUTION.</p>
                </div>
            </div>
            // </div>
        );

    }
}

export default AboutTreeSub;