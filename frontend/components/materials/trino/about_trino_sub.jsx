import React from 'react';

import { Link } from 'react-router-dom';

class AboutTrinoSub extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div className="about-trino-sub-image">

                {/* <div className="about-materials-sub"> */}
                <div className="about-trino-head-text">
                    {/* <style>
                        @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:800i&display=swap');
                        </style> */}
                    <h2>Knit from Nature</h2>
                </div>

                <div className="about-trino-sub-texts">
                    {/* <style>
                        @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:700&display=swap');
                        </style> */}
                    <p>Trino™ fiber, from eucalyptus tree fibers and a handful of ZQ Merino wool. 
                        Working hand-in-hand with our fiber producers, yarn spinners, and textile makers, 
                        we made sure our high quality knit was sustainably sourced from top to toe.
                    </p>

                </div>
            </div>
            // </div>
        );

    }
}

export default AboutTrinoSub;