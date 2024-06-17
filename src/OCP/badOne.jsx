import React from "react";

function ButtonBad({label, onClick, type}){
    const styles = {
        primary : {backgroundColor: 'blue', color:'white'},
        secondary: {backgroundColor: 'gray', color:'white'},
    };

    return(
        <button style={styles[type]} onClick={onclick}>
            {label}
        </button>
    );
};
export default ButtonBad;

/* 
    why is it bad:

        1)Tight Coupling: The Button component is 
        tightly coupled with the styles object and the type prop.
        This makes it less flexible and reusable since it always 
        expects a type prop to determine its style.

        2)Lack of Reusability: If you want to use the 
        Button component with different styles not defined 
        in the styles object, you would need to modify the 
        component itself. This limits the reusability of the 
        component.

        3)Potential for Errors: The type prop can lead to 
        errors if an incorrect or unsupported type is passed, 
        leading to an undefined style.
*/