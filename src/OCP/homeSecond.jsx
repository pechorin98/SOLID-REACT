import React from 'react';
import propTypes from 'prop-types';

function HomeSecondInp({label, style, onChange}){

    return(
        <input type="text" onChange={onChange} style={style} placeholder={label} />
    )
};


const withStyleInp = (Component, type) => {

    const styles = {
        primaryInp: {width: "50px", padding:"5px"},
        secondaryInp: {width: "30px", padding:"10px"},
    };

    const styledComponent = (props) => {
        const style = styles[type] || {};
        return <Component {...props} style ={style} />
    };

    styledComponent.prototype = {
        type: propTypes.oneOf(['primaryInp','secondaryInp']).isRequired,
    };

    return styledComponent;
};

export const primaryInput = withStyleInp(HomeSecondInp, "primaryInp");
export const secondaryInput = withStyleInp(HomeSecondInp,"secondaryInp");