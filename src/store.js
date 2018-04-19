import { createStore, combineReducers } from 'redux'
import loggedCustomerReducer from 'reducers/loggedCustomerReducer'

const reducers = combineReducers({
  loggedCustomerState: loggedCustomerReducer
})

const store = createStore(reducers)

export default store