function UserProfile({name,age,avatar}){
    return(
        <div>
            <p>{name}</p>
            <img src={avatar} alt="Avatar" />
            <p>{age}</p>
        </div>
    );
}


function UserContactInfo({email,phone,adress}){
    return(
        <div>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{adress}</p>
        </div>
    );
}