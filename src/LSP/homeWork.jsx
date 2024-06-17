function NavLink({label, url ,target}){
    return(
        <a href={url} target={target}>{label}</a>
    );
};

//violates LSP principle
function BlankNavLink({label,url}){
    return(
        <a href={url} target="blank">{label}</a>
    );
};


//commits LSP principle
function NewBlankNavLink({label,url}){
    return(
        <NavLink url={url} label={label} target="blank" />
    )
}