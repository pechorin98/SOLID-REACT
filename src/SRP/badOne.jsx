import React, { useState } from "react";


//This is bad example of srp. There is a lot of responsibility in this component. 
//It is responsible for rendering the user profile and also for handling the user profile data.
//This component is not reusable and hard to maintain.
function UserProfile({user}){

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [avatar, setAvatar] = useState(user.avatar);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleAvatarChange = (e) => {
        setAvatar(e.target.value);
    };

    return(
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <input type="text" value={email} onChange={handleEmailChange} />
            <input type="text" value={avatar} onChange={handleAvatarChange} />
        </div>
    );
}
export default UserProfile;