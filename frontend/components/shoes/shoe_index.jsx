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
        this.groupShoesByMaterialAndStyle = this.groupShoesByMaterialAndStyle.bind(this);
       // this.checkFilterType = this.checkFilterType.bind(this);

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

    groupShoesByMaterialAndStyle(shoes) {
        const materials = ['Wool', 'Tree'];
        const styles = ['Runners', 'Loungers', 'Skippers', 'Toppers'];

        for (let i = 0; i < materials.length; i++) {
            let currMaterial = materials[i];

            for (let j = 0; j < styles.length; j++) {
                let currStyle = styles[j];

                let shoeGroupArr = shoes.filter(shoe => 
                    shoe.material.toLowerCase() === currMaterial && 
                    shoe.style.toLowerCase() === currStyle
                )
            }
        }
    }

    render() { //hit this first before hit componentdidmount
        const { shoes } = this.state.shoes;
        const materials = ['Wool', 'Tree'];
        const colors = ['Black', 'Grey', 'White', 'Red', 'Green', 'Blue'];
        const styles = ['Runners', 'Loungers', 'Skippers', 'Toppers'];
        // console.log(this.state);
       
        if (this.state.shoes === null) {
            return null;
        }

        // if this.state.detault is a number, then size
        // else check
        //this is the helper function 
        const checkFilterType = function(filter) {
            if (colors.includes(filter)) {
                return 'color';
            } else if (styles.includes(filter)) {
                return 'style';
            } else if (materials.includes(filter)) {
                return 'material';
            }
        }

        /*
            filterType = 'color'
            shoe.color === shoe[filterType] // 'Red' === shoe['color']='Red'
        */

        let currentShoes = this.state.shoes;
        if (this.state.defaultFilters !== 'default') {
            //get filter type 
            let filterType = checkFilterType(this.state.defaultFilters); // return either 'color', 'style', 'material'
            currentShoes = this.state.shoes.filter((shoe) => {
                if (shoe[filterType] === this.state.defaultFilters) {
                    return true;
                } else {
                    return false;
                }
            })
        }
            // shoe color, size, material..
            // if (shoe.color === this.state.defaultFilters) {
            //     shoe[filterType] === this.state.defaulFilters; //access shoe[type]
            //     return true;
            // } else {
            //     return false;
            // }
        // includes() is constant in worst case for fixed arr length

        // console.log(currentShoes);
    
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

                                {/* <shoeindexitem > */}

                        </div>
                        )
                    })}
                    {colors.map((color) => {
                        return <button onClick={() => this.handleClick(color)}>{color}</button>
                    })}
                    {styles.map((style) => {
                        return <button onClick={() => this.handleClick(style)}>{style}</button>
                    })}
                    {materials.map((material) => {
                        return <button onClick={() => this.handleClick(material)}>{material}</button>
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