import React from 'react';

import { Link, withRouter } from 'react-router-dom';


class Materials extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="material-image">
                    <div className="header-text">
                        <p>NATURAL</p>
                        <p>SUSTAINABLE</p>
                    </div>
                </div>

                <div className="material-types">
                    <Link className="material-link" to={"/materials"}><button type="button" className="submit">WOOL</button></Link>
                    <Link className="material-link" to={"/materials/tree"}><button type="button" className="submit">TREE</button></Link>
                    <Link className="material-link" to={"/materials/sugar"}><button type="button" className="submit">SUGAR</button></Link>
                    <Link className="material-link" to={"/materials/trino"}><button type="button" className="submit">TRINO™</button></Link>
                </div>
            </>
        );
    }

}

export default withRouter(Materials);
                        // {/* <style>
                        //     @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:700&display=swap');
                        // </style>
                        // <Link className="material-link" to={"/materials"}>
                        //     <input
                        //         type="submit"
                        //         className="submit"
                        //         value="WOOL"
                        //     />
                        // </Link>
                        // <Link className="material-link" to={"/materials/tree"}>
                        //     <input
                        //         type="submit"
                        //         className="submit"
                        //         value="TREE"
                        //     />
                        // </Link>
                        // <Link className="material-link" to={"/materials/sugar"}>
                        //     <input
                        //         type="submit"
                        //         className="submit"
                        //         value="SUGAR"
                        //     />
                        // </Link>
                        // <Link className="material-link" to={"/materials/trino"}>
                        //     <input
                        //         type="submit"
                        //         className="submit"
                        //         value="Trino™"
                        //     />
                        // </Link> */}
        