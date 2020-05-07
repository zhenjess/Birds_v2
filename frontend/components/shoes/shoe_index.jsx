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

    handleClick(color) {
        this.setState({
            shoes: this.state.shoes.filter((shoe) => {
                if (shoe.color === color[0].toUpperCase() + color.slice(1).toLowerCase()) {
                    return true;
                } else {
                    return false;
                }
            })
        });
    }
    render() { //hit this first before hit componentdidmount
        const { shoes } = this.state.shoes;
        console.log(this.state);
        // if (this.state.shoes === null) {
        //     return null;
       // valid to map over empty arr for will return an empty arr
            return (
                <div>
                    {this.state.shoes.map((shoe) => {
                        return (
                        <div>
                                {shoe.material + shoe.style + shoe.color + shoe.id + shoe.gender};
                                <img src={shoe.photoUrl}></img>

                        </div>
                        )
                    })}
                    {['red', 'black', 'blue'].map((color) => {
                        return <button onClick={() => this.handleClick(color)}>{color}</button>
                    })}
                </div>
            );
  
       // <div>

        //     <div className="shoe-index-head">
        //         <div onAnimationEnd={this.endNotification}
        //             className={this.state.animateNotification ?
        //                 "fadeout notification" : "notification"}>Item added to your cart!</div>
        //         <ShoesHeader
        //             gender={this.props.match.params.gender}
        //         />
        //     </div>

        //     <div className="shoe">

        //         {/* <div className='shoebar'>
        //                 <div className="right">
        //                     <div className="dropdowns">
        //                         <span className="bar-link">Size</span>
        //                         <div className="dropdown-items">
        //                             <h3>8</h3>
        //                         </div>
        //                     </div>
        //                     <div className="dropdowns">
        //                         <span className="bar-link">Hue</span>
        //                         <div className="dropdown-items">
        //                             <h3>Blue</h3>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div> */}

        //         <div className="shoe-index-text">
        //             <h2>Wool Runners</h2>

        //             <ul className="shoe-category">
        //                 {/* <div className="wool-runners-images"> */}
        //                 {
        //                     this.getShoesByMaterialAndModel('wool', 'runners').map(shoe => (
        //                         <ShoeIndexItem
        //                             shoe={shoe}
        //                             key={`${shoe.id}-${shoe.material}`}
        //                             key={`${shoe.id}-${shoe.material}-${shoe.color}`}
        //                         />
        //                     ))
        //                 }
        //                 {/* </div> */}

        //             </ul>

        //             {/* <ul className="filter-attributes">
        //                         <fitler
                                    
        //                             material={"Wool"}
        //                             model={"Runners"}
        //                         />
        //                 </ul> */}

        //             <br />

        //             <h2>Tree Runners</h2>

        //             <ul className="shoe-category">
        //                 {
        //                     this.getShoesByMaterialAndModel('tree', 'runners').map(shoe => (
        //                         <ShoeIndexItem
        //                             shoe={shoe}
        //                             key={`${shoe.id}-${shoe.material}`}
        //                             key={`${shoe.id}-${shoe.material}-${shoe.color}`}
        //                         />
        //                     ))
        //                 }

        //             </ul>

        //             <br />
        //     </div>
        // </div>

    }
};

export default ShoeIndex;