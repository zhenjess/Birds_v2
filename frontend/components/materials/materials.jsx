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
                    <button className="material-link" onClick={ () => this.props.history.push("/materials") }>WOOL</button>
                    <button className="material-link" onClick={() => this.props.history.push("/materials/tree")}>TREE</button>
                    <button className="material-link" onClick={() => this.props.history.push("/materials/sugar")}>SUGAR</button>
                    <button className="material-link" onClick={() => this.props.history.push("/materials/trino")}>TRINO™</button>
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
        