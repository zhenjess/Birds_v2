import React from 'react';

class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log('console logging:', this.props.filters);

       // debugger
        const filters = this.props.filters.map( filter => (  
            <li className={`${this.props.id}-dropdown-attributes`}
                onClick={() => this.props.addFilter(this.props.id, filter)}
                id={filter}
                key={filter}
            ><h4>{filter}</h4>
            </li>
        ));
        
        return (
            <div className="shoe-bar-filters">
                <ul className="shoe-bar-filter-container">{filters}</ul>
            </div>
        );
    }
}

export default Filter;