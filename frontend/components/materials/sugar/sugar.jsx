import React from 'react';

import { Link } from 'react-router-dom';

class Sugar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="sugar-image"></div>
               
                <div className="material-types">
                    <Link className="material-link" to={"/materials"}><button type="button" className="submit">WOOL</button></Link>
                    <Link className="material-link" to={"/materials/tree"}><button type="button" className="submit">TREE</button></Link>
                    <Link className="material-link" to={"/materials/sugar"}><button type="button" className="submit">SUGAR</button></Link>
                    <Link className="material-link" to={"/materials/trino"}><button type="button" className="submit">TRINO™</button></Link>
                </div>

            </div>
        );
    }

}

export default Sugar;
           