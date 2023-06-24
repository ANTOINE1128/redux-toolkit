const redux = require('redux');
const createStore =  redux.createStore;
const  CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';
const bindActionCreators = redux.bindActionCreators ;
const combineReducers = redux.combineReducers ;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger") ;
const logger = reduxLogger.createLogger();


function orderCake(){
    return {
    type: CAKE_ORDERED,
    payload  : 1,    
  }
}
function restockCake(qty=1){
    return {
        type : CAKE_RESTOCKED,
        payload: qty, 
    }
}
function orderIcecream(qty=1){
    return{
        type : ICECREAM_ORDERED,
        payload : qty,
    }
}
function restockIcecream(qty=1){
    return{
        type : ICECREAM_RESTOCKED,
        payload : qty,
    }
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIcecreams: 20,
// }

const initialCakeState = {
    numOfCakes: 10,
}
const initialIcecreamState = {
    numOfIcecreams: 20,
};
// (previousState, action)=> newState
const iceCreamReducer =(state = initialIcecreamState, action) => {
switch(action.type){
        case ICECREAM_ORDERED:
            return{
                ...state,
                numOfIcecreams: state.numOfIcecreams - 1,
               }
        case ICECREAM_RESTOCKED:
            return{
                ...state,
                numOfIcecreams: state.numOfIcecreams + action.payload,
            }
        default:
            return state
    }
}
const cakeReducer =(state = initialCakeState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
            case CAKE_RESTOCKED:
                return{
                    ...state,
                    numOfCakes: state.numOfCakes + action.payload,
                }
         
            default:
                return state
        }
    }
const rootReducer =  combineReducers({
    cake: cakeReducer,
    iceCream : iceCreamReducer,
})    
const store = createStore(rootReducer,applyMiddleware(logger));
console.log('initial state ',store.getState());
const unsubscribe = store.subscribe(() => {});
const actions = bindActionCreators({orderCake, restockCake , orderIcecream, restockIcecream},store.dispatch)
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIcecream();
actions.orderIcecream();
actions.restockIcecream(2);
unsubscribe();
