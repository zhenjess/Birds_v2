//selector to help us find things in our state

export const selectAllShoes = (state) => {
    const runners = Object.values(state.entities.shoes).filter((ele) => {
        if (ele.model.toLowerCase() === 'runner') {
            return ele; 
        }
    });
 
    const shoes = Object.values(state.entities.shoeMaterials).map((shoeMaterial) => {
       const shoe = state.entities.shoes[shoeMaterial.shoeId]; 
       const material = state.entities.materials[shoeMaterial.materialId]; 
       const shoeItem = Object.assign({}, material, shoe); 
       return shoeItem; 
    });

    return shoes; 
};

export const filterAllShoesByGender = (state, gender) => {
    let shoes = [];
  
    Object.values(state.entities.shoes).forEach((shoe) => {
      
       if (shoe.gender.toLowerCase() === gender.toLowerCase()) {
           shoes.push(shoe);
       }
    })
    return shoes;
};

