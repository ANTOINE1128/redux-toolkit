const redux = require('redux');
const createStore =  redux.createStore;
const CAKE_ORDERER = 'CAKE_ORDER';

function orderCake () {
    return {
        type : CAKE_ORDERER,
        payload: 1        
    }

}
const initialCakeState = {
   numOFCakes : 10,
};
const cakeReducer = (state = initialCakeState, action)=> {
    switch (action.type) {
        case CAKE_ORDERER:{
            return {
                ...state,
                numOFCakes : state.numOFCakes - 1
            }
        }
default: 
return state
}
};
const routerReducer = cakeReducer;
const store = createStore(routerReducer);
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(()=>{
    console.log('updated state', store.getState())
})
store.dispatch(orderCake(1))
unsubscribe()