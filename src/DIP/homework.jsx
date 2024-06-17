import React, { createContext, useContext, useState , useEffect} from "react";

const context = createContext();

function RandomNumberProvider({children}){
    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        const nums = [];
        for (let i = 0; i < 6; i++) {
          let num = Math.floor(Math.random() * 10) + 1;
          nums.push(num);
        }
        setNumbers(nums);
      }, []); // Empty dependency array ensures this runs only once.


    return(
        <context.Provider value={numbers}>
            {children}
        </context.Provider>
    )
};

function NumberList(){
    const numbers = useContext(context)

    return(
        <ul>
            {numbers.map((n,index) => (
                <li key={index}>
                    {n}
                </li>
            ))}
        </ul>
    )
}

function App(){
    return(
        <RandomNumberProvider>
            <NumberList />
        </RandomNumberProvider>
    )
}