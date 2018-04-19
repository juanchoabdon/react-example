const initialState = {
    pending: true,
    logged: false
}
  
const loggedCustomerReducer = (state = initialState, action) => {

    if (action.type === 'GET_LOGGED_CUSTOMER') {
        return Object.assign({}, state, {
            pending: false,
            logged: action.logged,
            customer: action.customer
        })
    }

    if (action.type === 'SET_LOGGED_CUSTOMER') {
        return Object.assign({}, state, {
            pending: false,
            logged: action.logged,
            customer: action.customer
        })
    }

    return state;
}
  
export default loggedCustomerReducer