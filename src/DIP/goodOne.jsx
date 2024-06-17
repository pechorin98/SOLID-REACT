import React, { useEffect, useState , createContext, useContext} from 'react';

const UserContext = createContext();

function UserProvider({children}){
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/api/users')
            .then((res) => res.json())
            .then((data) => setUsers(data));
    },[]);


    return(
        <UserContext.Provider  value={users}>
            {children}
        </UserContext.Provider>
    )

}

function UserList(){
    const users = useContext(UserContext);

    return(
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))}
        </ul>
    )
}

function App(){
    return(
        <UserProvider>
            <UserList />
        </UserProvider>
    )
}