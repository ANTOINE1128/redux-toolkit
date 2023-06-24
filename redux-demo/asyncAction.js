const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const createStore =  redux.createStore
const applyMiddleware = redux.applyMiddleware;
const axios = require('axios');
const initialState = {
    loading: false,
    user:[],
    error:'',
}
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUserRequested = () =>{
    return {
        type: FETCH_USERS_REQUESTED
    }
}
const fetchUserSucceeded = (users) => {
    return {
      type: FETCH_USERS_SUCCEEDED,
      payload: users,
    };
  };
  
  const fetchUserFailed = (error) => {
    return {
      type: FETCH_USERS_FAILED,
      payload: error,
    };
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUESTED:
        return {
          ...state,
          loading: true,
        };
      case FETCH_USERS_SUCCEEDED:
        return {
          ...state,
          loading: false,
          user: action.payload,
          error: "",
        };
      case FETCH_USERS_FAILED:
        return {
          ...state,
          loading: false,
          user: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserRequested())
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const users = response.data.map((user) => user.id)
            dispatch(fetchUserSucceeded(users))
            }).catch((error) => {
                //error.message is the error message
                dispatch(fetchUserFailed(error.message))

            })

    }
}
const store = createStore(reducer,applyMiddleware(thunkMiddleware));
store.subscribe(()=> {
    console.log(store.getState())
});
store.dispatch(fetchUsers());