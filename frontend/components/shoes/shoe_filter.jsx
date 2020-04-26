import React from 'react';

import DropDownBtn from './filter_dropbtn';

class ShoeFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAnimating: false
        };
        this.handleAnimation = this.handleAnimation.bind(this);
    }

    componentDidUpdate(prevProp) {
        if (this.props.whatFilter !== prevProp.whatFilter) {
            this.setState({
                isAnimating: true
            });
        }
    }

    handleAnimation() {
        this.setState({ isAnimating: false });
    }

    render() {
        const handleFilterAttrs = this.props.handleFilterAttrs;
        const title = this.props.title;
        const id = this.props.id;
        const filters = this.props.filters;
        const whatFilter = this.props.whatFilter;
        const openFilter = this.props.openFilter;
        const currentOpenFilter = this.props.currentOpenFilter;

        // debugger
        return (
            <div className="shoe-filter-container">
                <h2
                    className={this.state.isAnimating ? "swipe-left" : ""}
                    onAnimationEnd={this.handleAnimation}
                    onClick={(title, id, filters) =>  {
                        // debugger
                        return handleFilterAttrs(title, id, filters)}}
                >{whatFilter || title}
                </h2>
                <DropDownBtn
                    title={title}
                    id={id}
                    filters={filters}
                    whatFilter={whatFilter}
                    openFilter={openFilter}
                    currentOpenFilter={currentOpenFilter}
                    handleFilterAttrs={handleFilterAttrs}
                />
            </div>
        );
    }
}

export default ShoeFilter;
