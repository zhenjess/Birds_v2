import React from 'react';

import { Link } from 'react-router-dom';

class ShoesDropdown extends React.Component {
    render() {
        return (

            <div className="nav-dropdown-box">
                <div className="dropdown-header">
                    <Link onClick={() => this.props.showDropDown(this.props.gender)} to={`/shoes/${this.props.genderQuery}`}>
                        <h3>SHOP ALL BIRDS   <i className="fas fa-angle-right"></i> </h3>
                    </Link>
                </div>

                <ul>
                        <Link onClick={() => this.props.showDropDown(this.props.gender)} className="attribute-link" to={`/shoes/${this.props.genderQuery}`}>
                            <li>
                                <div className="dropdown-shoe-img">
                                    <img className="dropdown-show-img-item" src="https://birds-seeds.s3-us-west-1.amazonaws.com/women_grey_wool_runners.webp" alt=""/>
                                </div>
                                <h3>Wool Runners</h3>
                            </li>
                        </Link>
                        <Link onClick={() => this.props.showDropDown(this.props.gender)} className="attribute-link" to={`/shoes/${this.props.genderQuery}`}>
                            <li>
                                <div className="dropdown-shoe-img">
                                    <img className="dropdown-show-img-item" src="https://birds-seeds.s3-us-west-1.amazonaws.com/women_black_tree_runners.webp" alt="" />
                                </div>
                                <h3>Tree Runners</h3>
                            </li>
                        </Link>

                        <Link onClick={() => this.props.showDropDown(this.props.gender)} className="attribute-link" to={`/shoes/${this.props.genderQuery}`}>
                            <li>
                                <div className="dropdown-shoe-img">
                                    <img className="dropdown-show-img-item" src="https://birds-seeds.s3-us-west-1.amazonaws.com/women_black_wool_loungers.webp" alt="" />
                                </div>
                                <h3>Wool Loungers</h3>
                            </li>
                        </Link>
                        <Link onClick={() => this.props.showDropDown(this.props.gender)} className="attribute-link" to={`/shoes/${this.props.genderQuery}`}>
                            <li>
                                <div className="dropdown-shoe-img">
                                    <img className="dropdown-show-img-item" src="https://birds-seeds.s3-us-west-1.amazonaws.com/women_black_tree_loungers.webp" alt="" />
                                </div>
                                <h3>Tree Loungers</h3>
                            </li>
                        </Link>

                        <Link onClick={() => this.props.showDropDown(this.props.gender)} className="attribute-link" to={`/shoes/${this.props.genderQuery}`}>
                            <li>
                                <div className="dropdown-shoe-img">
                                    <img className="dropdown-show-img-item" src="https://birds-seeds.s3-us-west-1.amazonaws.com/women_grey_tree_skippers.webp" alt="" />
                                </div>
                                <h3>Tree Skippers</h3>
                            </li>
                        </Link>
                        <Link onClick={() => this.props.showDropDown(this.props.gender)} className="attribute-link" to={`/shoes/${this.props.genderQuery}`}>
                            <li>
                                <div className="dropdown-shoe-img">
                                    <img className="dropdown-show-img-item" src="https://birds-seeds.s3-us-west-1.amazonaws.com/women_black_tree_toppers.webp" alt="" />
                                </div>
                                <h3>Tree Toppers</h3>
                            </li>
                        </Link>   
                </ul>
                <div id="dropdown-attributes-container">
                    {/* <div>
                        <Link onClick={ () => this.props.showDropDown(this.props.gender)} to={`/shoes/${this.props.genderQuery}`}>
                            <h2>Shop ALL BIRDS</h2>
                        </Link>
                        <div className="right-arrow"><i className="fas fa-angle-right"></i></div>
                    </div> */}
                </div>
                <div className="close-nav-dropDown">
                    <h3 onClick={() => this.props.showDropDown(this.props.gender)} className="uparrow"><i className="fas fa-angle-up"></i></h3>
                </div>
            </div>
        );
    }
}

export default ShoesDropdown;