import React from 'react';

import { Link } from 'react-router-dom';

class AccessoriesMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="accessories-main-image">
                <div className="accessories-text">
                    <h2>Trino™ Socks</h2>
                    <h3>WARM &amp; COZY</h3>
                </div>

                <div className="link">
                    <div className="link-text">
                        <Link className="shoe-link" to={"/shoes/women"}>SHOP ACCESSORIES</Link>
                    </div>
                </div>
            </div>
        );
    }

}

export default AccessoriesMain;
