import React from 'react';

import Filter from './filter';

import ShoeFilter from './shoe_filter';

class ShoesHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openFilter: false, 
            filters: {},
            filterAttributes: {
                filterTitle: "",
                filterId: "",
                filters: []
            },
            shouldAnimate: false,
            animateNotification: false
        };

        this.handleFilterAttrs = this.handleFilterAttrs.bind(this);
        this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
        // this.addFilter = this.addFilter.bind(this);
    }

    handleFilterAttrs(title, id, filters) {
        // we need to dispatch action inside of this function
        debugger

        return () => this.setState( ({ openFilter, filterAttributes }) => {
            const newFilterAttrs = {
                filterTitle: title,
                filterId: id, 
                filters: filters
            };

            if (openFilter && title !== filterAttributes.filterTitle) {
                return ({ filterAttributes: newFilterAttrs, openFilter: true, shouldAnimate: true });
            } else if (!openFilter) {
                return ({ filterAttributes: newFilterAttrs, openFilter: true, shouldAnimate: true });
            } else {
                return ({ openFilter: false });
            }
        });
    }

    handleAnimationEnd() {
        this.setState({ shouldAnimate: false });
    }

    render() {
        const filterAttrs = this.state.filterAttributes;
        const { filterTitle, filterId, filters } = filterAttrs;
        const handleFilterAttrs = this.handleFilterAttrs;
        const { gender } = this.props;

        if (gender === 'women') {

            return (
                <>
                <div>
                    <div className="shoe-header">

                        <div className="women-shoe-image">
                            <div className="shoe-header-text">
                                <p className="shoe-header-title">Women Shoes</p>
                                <p className="shoe-header-texts">The world's most comfortable shoes for life’s every day adventures.</p>
                            </div>
                        </div>
                    </div>
              
                    <div className="shoe-bar">
                        <div className="left-bar">
                            <p>All - {this.props.cartItems} Results</p>
                        </div>

                        <ul className="right-bar">
                            <ShoeFilter
                                handleFilterAttrs={handleFilterAttrs}
                                title={"Color"}
                                id={"color"}
                                filters={["Black", "Grey", "White", "Red", "Green", "Blue"]}
                                whatFilter={this.state.filters.color}
                                openFilter={this.state.openFilter}
                                currentOpenFilter={filterTitle}
                            />
                            <ShoeFilter
                                handleFilterAttrs={handleFilterAttrs}
                                title={"Style"}
                                id={"style"}
                                filters={["Runners", "Loungers", "Skippers", "Toppers"]}
                                whatFilter={this.state.filters.style}
                                openFilter={this.state.openFilter}
                                currentOpenFilter={filterTitle}
                            />
                            <ShoeFilter
                                handleFilterAttrs={handleFilterAttrs}
                                title={"Material"}
                                id={"material"}
                                filters={["Wool", "Tree"]}
                                whatFilter={this.state.filters.material}
                                openFilter={this.state.openFilter}
                                currentOpenFilter={filterTitle}
                            />
                        </ul>
                    </div>
                </div>
                <div onAnimationEnd={this.handleAnimationEnd} className={(this.state.openFilter ? "open-filter-dropdown " : "close-filter-dropdown ") +
                    (this.state.shouldAnimate ? "animation-wipe" : "") +
                    " filter-dropdown"}>
                    <Filter title={filterTitle} id={filterId} filters={filters} addFilter={this.addFilter} />
                </div>
                </>
            );
        } else {
            return (
                <>
                <div>

                    <div className="men-shoe-image">
                        <div className="shoe-header-text">
                            <p className="shoe-header-title">Men Shoes</p>
                            <p className="shoe-header-texts">The world's most comfortable shoes for life’s every day adventures.</p>
                        </div>
                    </div>

                    <div className="shoe-bar">
                        <div className="left-bar">
                                <p>All - {this.props.cartItems} Results</p>
                        </div>

                        <ul className="right-bar">
                            <ShoeFilter
                                handleFilterAttrs={handleFilterAttrs}
                                title={"Color"}
                                id={"color"}
                                filters={["Black", "Grey", "White", "Red", "Green", "Blue"]}
                                whatFilter={this.state.filters.color}
                                openFilter={this.state.openFilter}
                                currentOpenFilter={filterTitle}
                            />
                            <ShoeFilter
                                handleFilterAttrs={handleFilterAttrs}
                                title={"Style"}
                                id={"style"}
                                filters={["Runners", "Loungers", "Skippers", "Toppers"]}
                                whatFilter={this.state.filters.style}
                                openFilter={this.state.openFilter}
                                currentOpenFilter={filterTitle}
                            />
                            <ShoeFilter
                                handleFilterAttrs={handleFilterAttrs}
                                title={"Material"}
                                id={"material"}
                                filters={["Wool", "Tree"]}
                                whatFilter={this.state.filters.material}
                                openFilter={this.state.openFilter}
                                currentOpenFilter={filterTitle}
                            />
                        </ul>
                    </div>
                </div>
                <div onAnimationEnd={this.handleAnimationEnd} className={(this.state.openFilter ? "open-filter-dropdown " : "close-filter-dropdown ") +
                    (this.state.shouldAnimate ? "animation-wipe" : "") +
                    " filter-dropdown"}>
                    <Filter title={filterTitle} id={filterId} filters={filters} addFilter={this.addFilter} />
                </div>
                </>
            );
        }
    }
}

export default ShoesHeader;
