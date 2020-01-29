import React from 'react';

const dropDownBtn = ({ openFilter, currentOpenFilter, title, id, filters, dropDownFilter, handleFilterAttrs }) => {

   if (dropDownFilter) {
       return (
           <h5
            className="x"
            onClick={() => closeFilter(id)}
           >&#10005;      
           </h5>
       );
   } else if (openFilter && currentOpenFilter === title) {
       return (
           <h5
            className="minus"
            onClick={handleFilterAttrs(title, id, filters)}
           >&minus;
           </h5>
       );
   } else {
       return (
           <h5
            className="drop-down"
            onClick={handleFilterAttrs(title, id, filters)}
           ><i className="fas fa-angle-down"></i>
           </h5>
       );
   }
};

export default dropDownBtn;
