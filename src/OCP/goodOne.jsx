import React from 'react';

function ButtonGood({label, onClick, style}){
    return(
        <button style={style} onClick={onClick}>
            {label}
        </button>
    )
}


const withButtonStyle = (Component, type) => (props) => {
    const styles = {
        primary: { backgroundColor: 'blue', color: 'white' },
        secondary: { backgroundColor: 'gray', color: 'white' },
    };

    return <Component {...props}  style={styles[type]}/>;
};

export const PrimaryButton = withButtonStyle(ButtonGood, 'primary');
export const SecondaryButton = withButtonStyle(ButtonGood, 'secondary');

/*
    Why Does It Good:

        1)Separation of Concerns: The Button component 
        is only responsible for rendering a button with the given
        style prop. This makes it a more generic and reusable 
        component.

        2)Higher Flexibility: By using the withButtonStyle 
        higher-order component (HOC), you can create styled 
        versions of the Button component without modifying the 
        original Button. This allows for greater flexibility 
        and reuse.

        3)Easier Maintenance: The styles are managed outside 
        the Button component, making it easier to maintain 
        and update styles without changing the component logic.

        4)Component Composition: The use of HOCs promotes 
        composition, allowing you to create different styled 
        buttons by composing the Button component with different 
        styles. This approach adheres to the principle of 
        composition over inheritance.
*/