import React from 'react';

import { Link } from 'react-router-dom';

class AboutTrinoSub extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div className="about-trino-sub-image">

                <div className="about-trino-head-text">
                    <h2>Knit from Nature</h2>
                </div>

                <div className="about-trino-sub-texts">
      
                    <p>Trino™ fiber, from eucalyptus tree fibers and a handful of ZQ Merino wool. 
                        Working hand-in-hand with our fiber producers, yarn spinners, and textile makers, 
                        we made sure our high quality knit was sustainably sourced from top to toe.
                    </p>

                </div>
            </div>
        );
    }
}

export default AboutTrinoSub;