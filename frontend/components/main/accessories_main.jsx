import React from 'react';

import { Link } from 'react-router-dom';

// import AboutMain from './about_main';

class AccessoriesMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="accessories-main-image">
                <div className="accessories-text">
                    {/* <style>
                        @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:800i&display=swap');
                    </style> */}
                    <h2>Trino™ Socks</h2>
                    <h3>WARM &amp; COZY</h3>
                </div>

                <div className="link">
                    <div className="link-text">
                        {/* <Link className="shoe-link" to="/shoes/women">SHOP ACCESSORIES</Link> */}
                        <a href="#shoes/women">SHOP ACCESSORIES</a>
                    </div>
                </div>
            </div>
        );
    }

}

export default AccessoriesMain;
