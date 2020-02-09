import React from 'react';

import { Link } from 'react-router-dom';

class AboutMaterialsSub extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(

            <div className="sub-image">

                {/* <div className="about-materials-sub"> */}
                    <div className="head-text">
                        {/* <style>
                            @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:800i&display=swap');
                        </style> */}
                        <h2>Inspired by the Flock</h2>
                    </div>

                    <div className="sub-text">
                        {/* <style>
                            @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:700&display=swap');
                        </style> */}
                        <p>Did you know in New Zealand, sheep outnumber humans about 6: 1?</p>
                        <p>Thanks to their wool, our process uses 60% LESS energy than materials used in 
                            typical synthetic shoes.
                        </p>
                    </div>
                </div>
            // </div>
        );

    }
}

export default AboutMaterialsSub;