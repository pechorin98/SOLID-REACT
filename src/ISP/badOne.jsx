function UserProfile({name,email,avatar,age,adress,phone}){
    return(
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <img src={avatar} alt="Avatar" />
            <p>{age}</p>
            <p>{adress}</p>
            <p>{phone}</p>
        </div>
    );
};

/*
    Why Does It Bad:
        So many information in same component
        you have to make component specialized 
        and in the components write less code and attribute
        possible
*/