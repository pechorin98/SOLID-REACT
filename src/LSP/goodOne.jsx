import React from 'react';

function Button({label, onClick, disabled}){
    return(
        <button onClick={onClick} disabled={disabled}>{label}</button>
    );
}


function ButtonDisabled({label}){
    return(
        <Button onClick={() => {}} label={label} disabled/>
    );
};

//It derrives from a parent component.