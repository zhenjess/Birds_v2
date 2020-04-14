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
            //wrap handler in anonymous fn bc when react loads it invoke
            //handleFilterAttrs with these params (title, id, filters) were passed in
            //dont want fn already invoked in cb
            <h5
                className="minus"
                onClick={(title, id, filters) => handleFilterAttrs(title, id, filters)}

            // good 
            // onClick={() => handleFilterAttrs()}
            // onClick={handleFilterAttrs}

            // bad 
            // onClick={handleFilterAttrs()}

            >&minus;
            </h5>
        );
    } else {
        return (
            <h5
                className="drop-down"
                onClick={(title, id, filters) => handleFilterAttrs(title, id, filters)}
            ><i className="fas fa-angle-down"></i>
            </h5>
        );
    }
};

export default dropDownBtn;
