import React from 'react';

import { Link } from 'react-router-dom';

class MaterialsMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='materials-main'>
                <div className="images-panel">

                    <div className='left-image-panel'>
                        <div className="left-image">
                            <div className="left-image-text">
                                
                                <h2>Wool</h2>
                                <p>Durable &amp; Flexible</p>
                                <div className="left-links">
                                    <div className="left-link-text">
                                        <Link className="left-link" to={"/shoes/women"}>WOMEN BIRDS</Link>
                                    </div>

                                    <div className="left-link-text">
                                        <Link className="left-link" to={"/shoes/men"}>MEN BIRDS</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="left-gif"></div>
                        <div className='left-small-image'></div>
                    </div>


                    <div className='right-image-panel'>
                        <div className="right-gif"></div>
                        <div className='right-small-image'></div>
                        <div className="right-image">
                            <div className="right-image-text">

                                <h2>Tree</h2>
                                <p>Light &amp; Breezy</p>
                                <div className="right-links">
                                    <div className="right-link-text">
                                        <Link className="right-link" to={"/shoes/women"}>WOMEN BIRDS</Link>
                                    </div>

                                    <div className="right-link-text">
                                        <Link className="right-link" to={"/shoes/men"}>MEN BIRDS</Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default MaterialsMain;