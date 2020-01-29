import React from 'react';

const dropDownBtn = ({ activeHeader, showDropDown, dropDown, title, id, dropDownGender }) => {

    const DropOrNot = ({ dropDown, gender, componentGender }) => {
        if (dropDown && gender === componentGender) {
            return (<h5 className="minus">&minus;</h5>);
        } else {
            return (<h5 className="drop-down"><i className="fas fa-angle-down"></i></h5>);
        }
    };

    return (
        <>
            <div className={(activeHeader ? "a-header-button" : "u-header-button") + " nav-link"}
                onClick={() => showDropDown(id)}>
                <h2>{title}</h2>
                <DropOrNot dropDown={dropDown} gender={dropDownGender} componentGender={id} />
            </div>
        </>
    )
};

export default dropDownBtn;
