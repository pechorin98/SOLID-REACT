import React from 'react';

function Button({label, onClick}){
    return(
        <button onClick={onClick}>{label}</button>
    );
};



function DisabledButton({label}){
    return(
        <button disabled>
            {label}
        </button>
    );
}

/*
    Why is it bad:

    We are creating two completly diffrent components
    from each other even when we want to create completely
    diffrent styles we don't create two components
    we commit principle OCP and when we want to
    make button disabled it should be came from
    a modifable button component. It make our code
    more reusable, readable and clean.
        
*/