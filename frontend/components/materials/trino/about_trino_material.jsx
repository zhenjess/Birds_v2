import React from 'react';

import { Link } from 'react-router-dom';

import AboutTrinoSub from './about_trino_sub';

import MoreTrinoMain from './more_trino_main';
                
class AboutTrinoMaterial extends React.Component {
    constructor(props) {
        super(props);
    }
        
    render() {
        return (
            <div className="about-trino-container">

                <div className="about-trino-material">
                        <div className="about-trino-image"></div>
    
                        <div className="trino-text">
                            <div className="about-trino-text">

                                <p>Mother Nature is our muse. We responsibly source from the finest material resources SHE provides
                                to produce the most sustainable and aesthetically appealing birds for your comfort.
                                Like nature's super-yarn, Trino™.
                                </p>
                            </div>
                            <div className="about-trino-sub-text">
   
                                <p>When we couldn’t find a yarn that met our standards of ultimate comfort and sustainability, 
                                    we invented our own. Combining the incredible properties of our renewable materials Tree + Merino (Trino™, get it?),
                                    our first proprietary knit is responsibly sourced right down to the fiber level. It’s super soft, breathable, 
                                    and moisture wicking, all while being less harmful to the planet.
                                </p>
                            </div>
                        </div>
                </div>
                <AboutTrinoSub />
                <MoreTrinoMain />
            </div>
        );
    }
}
        
export default AboutTrinoMaterial;