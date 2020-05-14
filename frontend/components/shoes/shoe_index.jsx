import React from 'react';
import ShoeIndexItem from './shoe_index_item';

class ShoeIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
           // shoes: null //key of shoes point to null
        //    shoes: []*-
          shoes: props.shoes,
          defaultFilters: 'default', //color--> 'black', 'blue', 'size'
        };
        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount() { //.then updates localstate from null to shoes from redux store
        this.props.fetchAllShoes().then((shoes) => { //retrieve all shoes, a promise
            this.setState({
                shoes: Object.values(shoes.payload.shoes) //payload is the value shoes from line 12
            }); //key: shoes, values: shoes
        })
        
    }

    // click a button, change the fiter
    handleClick(color) {
        console.log(color);
        // event, currentTarget, innerText => "red"

        // return (e) => {
        //     e.preventDefault();
        //     defaultFilters: 'filters'
        // }
        this.setState({
            // shoes: this.state.shoes.filter((shoe) => {
            //     if (shoe.color === color[0].toUpperCase() + color.slice(1).toLowerCase()) {
            //         return true;
            //     } else {
            //         return false;
            //     }
            // })
            defaultFilters: color
            
            //set defaultFilter
            // defaultFilter
        });

    }
    render() { //hit this first before hit componentdidmount
        const { shoes } = this.state.shoes;
        // console.log(this.state);
       
        if (this.state.shoes === null) {
            return null;
        }

        let currentShoes = this.state.shoes;
        if (this.state.defaultFilters !== 'default') {
            currentShoes = this.state.shoes.filter((shoe) => {
                // shoe color, size, material..
                if (shoe.color === this.state.defaultFilters) {
                    shoe[type] === this.state.defaulFilters
                 
                    shoe.color ===> shoe["color"]
                    return true;
                } else {
                    return false;
                }

            })
        }

        helper() {
            if (this.state.defaulFilters is color) return "color";
            else if (this.state.defaulFilters is number) return "size"
            else if ()
        }

        // includes() is constant in worst case for fixed arr length

        const materials = ['Wool', 'Tree'];
        const colors = ['Black', 'Grey', 'White', 'Red', 'Green', 'Blue'];
        const styles = ['Runners', 'Loungers', 'Skippers', 'Toppers'];

        console.log(currentShoes);
        
        // if this.state.detault is a number, then size
        // else check
        function checkFilterType(defaultFilters) { 
            if (this.state.defaultFilters === color) {
                return 'color';
            } else if (this.state.defaultFilters === style) {
                return 'style';
            } else if (this.state.defaultFilters === material) {
                return 'material';
            }
        }
       // valid to map over empty arr for will return an empty arr
       
       /*
            let currShoes = this.state.shoes
            if(this.state.defaultFault !== 'default'){
                currShoes = this.state.shoes.filter( filter you want) ==> new array
            }
            render currShoes
       */
            return (
                <div>
                    {currentShoes.map((shoe) => {
                        return (
                        <div>
                                {shoe.material + shoe.style + shoe.color + shoe.id + shoe.gender};
                                <img src={shoe.photoUrl}></img>

                        </div>
                        )
                    })}
                    {['Black', 'Grey', 'White', 'Red', 'Green', 'Blue'].map((color) => {
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