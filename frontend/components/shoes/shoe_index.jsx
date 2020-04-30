import React from 'react';
import ShoeIndexItem from './shoe_index_item';

class ShoeIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
           // shoes: null //key of shoes point to null
           shoes: []
        };
    }

    componentDidMount() { //.then updates localstate from null to shoes from redux store
        this.props.fetchAllShoes().then((shoes) => { //retrieve all shoes, a promise
            this.setState({
                shoes: Object.values(shoes.payload.shoes) //payload is the value shoes from line 12
            }); //key: shoes, values: shoes
        })
    }
    render() { //hit this first before hit componentdidmount
        console.log(this.state);
        // if (this.state.shoes === null) {
        //     return null;
        //valid to map over empty arr for will return an empty arr
            return (
                <div>
                    {this.state.shoes.map((shoe) => {
                        return shoe.material + shoe.style;
                    })}
                </div>
            );
    }
};

export default ShoeIndex;