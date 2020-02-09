import React from 'react';

import { Link } from 'react-router-dom';

import AboutTreeSub from './about_tree_sub';

import MoreTreeMain from './more_tree_main';

class AboutTreeMaterial extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about-tree-container">

                <div className="about-tree-material">
                    <div className="about-tree-image"></div>

                    <div className="tree-text">
                        <div className="about-tree-text">
                            {/* <style>
                                @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:800i&display=swap');
                            </style> */}
                            <p>Mother Nature is our muse. We responsibly source from the finest material resources SHE provides
                               to produce the most sustainable and aesthetically appealing birds for your comfort.
                               Like tree fiber,TENCEL™ Lyocell, sourced from Eucalyptus trees.
                            </p>
                        </div>
                        <div className="about-tree-sub-text">
                            {/* <style>
                                @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans&display=swap');
                            </style> */}
                            <p>Eucalyptus tree fiber is breathable, silky-smooth, complete with a cooling effect to keep things breezy!
                                It's naturally-derived and renewable, so it's much more sustainable than traditional shoe materials like cotton.
                                Sourced from South African farms that minimize fertilizer and rely on rainfall, not irrigation.
                            </p>
                        </div>
                    </div>
                </div>
                <AboutTreeSub />
                <MoreTreeMain />
            </div>
        );
    }

   
}

export default AboutTreeMaterial;