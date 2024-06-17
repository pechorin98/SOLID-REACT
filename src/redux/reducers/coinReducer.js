const initialState = {
    coins: 0,
};


function coinReducer(state = initialState, action){
    switch(action.type){
        case 'BUY_COINS':
            return{
                coins: state.coins + action.payload
            };
        case 'SELL_COINS':
            if(state.coins - action.payload < 0){
                alert("You cannot sell more coins than you have");
                return state;
            }
            return{
                coins: state.coins - action.payload
            };
        default:
            return state;
    };
};
export default coinReducer;
