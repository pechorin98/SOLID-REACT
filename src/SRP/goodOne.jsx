import React,{useState} from "react";

/*
    Each of the compoenents are responsible for only one thing.
    UserName is responsible for handling the name of the user.
    UserEmail is responsible for handling the email of the user.
    UserAvatar is responsible for handling the avatar of the user.
    UserProfile is responsible for rendering the user's profile.
    Each of the components are independent of each other.
    If we want to change the behavior of one component,
     we can do it without affecting the other components.
*/

function UserName({name}){
    
    const [value, setValue] = useState(name);
    
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return(
        <input type="text" value={value} onChange={handleChange} />
    );
}

function UserEmail({email}){
        
    const [value, setValue] = useState(email);
    
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return(
        <input type="text" value={value} onChange={handleChange} />
    );
};

function UserAvatar({avatar}){
                
    const [value, setValue] = useState(avatar);
    
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return(
        <input type="text" value={value} onChange={handleChange} />
    );
};

function UserProfile({user}){
    return(
        <div>
            <UserName name={user.name} />
            <UserEmail email={user.email} />
            <UserAvatar avatar={user.avatar} />
        </div>
    );
};

export default UserProfile;