import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCoins, sellCoins } from "../redux/action.js";


//Homework notes:
/* 
1)
    Do not forget to add some error handling to
    sub components
*/
function BuyCredit({amount}){
    
    const dispatch = useDispatch();
    //For example in the button bellow if there is no amount or amount is less than 0 button disables.
    return(
        <button onClick={() => dispatch(buyCoins(amount))} disabled={!amount || amount <= 0}>Buy</button>
    )
};

function SellCredit({amount}){

    const dispatch = useDispatch();

    return(
        <button onClick={() => dispatch(sellCoins(amount))} disabled={!amount || amount <= 0}>Sell</button>
    )
};


function TradeCredit(){

    const coins = useSelector(state => state.coin.coins)

    const [amount, setAmount] = useState(0);

    const handleChange = (e) => {
        const value = Number(e.target.value);
        if(value >= 0 ){
            setAmount(value);
        }else{
            alert("Your Coins cannot be less than zero");
        };
    };


    return(
        <>
            <h1>{coins}</h1>
            <input type="number" value={amount} onChange={handleChange} min="0"/>
            <div>
                <BuyCredit amount={amount}/>
                <SellCredit amount={amount}/>
            </div>
        </>
    )
}
export default TradeCredit;