import React from 'react';

import { Link } from 'react-router-dom';

class AboutSugarSub extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div className="about-sugar-sub-image">

                {/* <div className="about-materials-sub"> */}
                <div className="about-sugar-head-text">
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:800i&display=swap');
                        </style>
                    <h2>Sustainability Sweetheart</h2>
                </div>

                <div className="about-sugar-sub-texts">
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:700&display=swap');
                        </style>
                    <p>SweetFoam™ sugarcane fiber, when processed, is a fully renewable
                        resource that grows quickly, removing carbon from the atmosphere.
                        It's so self-sufficient that its biomass is extracted to literally power the mill
                        and fertilize the next year's crop.
                    </p>
                    
                </div>
            </div>
            // </div>
        );

    }
}

export default AboutSugarSub;