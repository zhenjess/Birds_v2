import React from 'react';

import AboutMaterialsSub from './about_materials_sub';

import MoreMaterialsMain from './more_materials_main';

class AboutMaterials extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about-container">

                <div className="about-materials">
                    <div className="about-material-image"></div>
    
                    <div className="text">
                        <div className="about-main-text">
    
                            <p>Mother Nature is our muse. We responsibly source from the finest material resources SHE provides
                                to produce the most sustainable and aesthetically appealing birds for your comfort. 
                                Like wool from merino sheep, who have the best hair in nature.
                            </p>
                        </div>
                        <div className="about-sub-text">
    
                            <p>Merino wool from fresh off the sheep! It's breathable, temperature-regulating, 
                                and moisture-wicking, all without that irritating scratchiness!
                                We partner with organizations like ZQ Merino to ensure that we're sourcing wool from those who 
                                follow high standards of farming, land management, and animal welfare.
                            </p>
                        </div>
                    </div>
                </div>
                    <AboutMaterialsSub />
                    <MoreMaterialsMain />
            </div>
        );
    }
}

export default AboutMaterials;