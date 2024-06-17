import React, { useEffect, useState } from "react";

function UserList(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/api/users')
            .then((res) => res.json())
            .then((data) => setUsers(data));
    },[]);


    return(
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))}
        </ul>
    );
};

/*
    Why Does It Bad:
        So much in one component all the principles 
        we going through actually has one thing
        in common is that make components modular
        as it possbile. So much responsibilty for a 
        component. And also  High-level modules should not
        depend on low-level modules. Both should depend on 
        abstractions. 
        In React, this can be achieved using context and hooks.
*/