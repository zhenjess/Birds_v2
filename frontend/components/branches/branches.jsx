import React from 'react';

class Branches extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="branches-container">
                <div className="sf-branch">
                    <div className="sf-image"></div>

                    <div className="sf-text">
                        <style>
                            @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:800i&display=swap');
                        </style>
                        <h2>SAN FRANCISCO</h2>
                    </div>
                </div>

                <div className="la-branch">
                    <div className="la-text">
                        <style>
                            @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:800i&display=swap');
                        </style>
                        <h2>LOS ANGELES</h2>
                    </div>
                    <div className="la-image"></div>
                </div>

                <div className="ny-branch">
                    <div className="ny-image"></div>

                    <div className="ny-text">
                        <style>
                            @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:800i&display=swap');
                        </style>
                        <h2>NEW YORK</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Branches;