import React from 'react';

import { Link } from 'react-router-dom';

import AboutSugarSub from './about_sugar_sub';

import MoreSugarMain from './more_sugar_main';

class AboutSugarMaterial extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about-sugar-container">

                <div className="about-sugar-material">
                    <div className="about-sugar-image"></div>

                    <div className="sugar-text">
                        <div className="about-sugar-text">
                        
                            <p>Mother Nature is our muse. We responsibly source from the finest material resources SHE provides
                                to produce the most sustainable and aesthetically appealing birds for your comfort.
                                Like nature's sweetest fiber, SweetFoam™, is sourced from sugarcane.
                            </p>
                        </div>
                        <div className="about-sugar-sub-text">
                         
                            <p>Sugarcane fiber, one of nature's sweetest offerings, is sourced from Southern Brazil and is transformed 
                                into our SweetFoam™ shoe sole. It's contoured to your feet for bouncy comfort.
                            </p>
                        </div>
                    </div>
                </div>
                    <AboutSugarSub />
                    <MoreSugarMain />
            </div>
        );
    }
}

export default AboutSugarMaterial;