import React from 'react';

import { Link } from 'react-router-dom';

class Trino extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="trino-image">
                    {/* <div className="header-text">
                        <style>
                            @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:800i&display=swap');
                        </style>
                        <h1>NATURAL</h1>
                        <h1>SUSTAINABLE</h1>
                    </div> */}
                </div>

                <div className="material-types">
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:700&display=swap');
                    </style>
                    <Link className="material-link" to={"/materials"}>
                        <input
                            type="submit"
                            className="submit"
                            value="WOOL"
                        />
                    </Link>
                    <Link className="material-link" to={"/materials/tree"}>
                        <input
                            type="submit"
                            className="submit"
                            value="TREE"
                        />
                    </Link>
                    <Link className="material-link" to={"/materials/sugar"}>
                        <input
                            type="submit"
                            className="submit"
                            value="SUGAR"
                        />
                    </Link>
                    <Link className="material-link" to={"/materials/trino"}>
                        <input
                            type="submit"
                            className="submit"
                            value="Trino™"
                        />
                    </Link>
                </div>
            </div>
        );
    }

}

export default Trino;