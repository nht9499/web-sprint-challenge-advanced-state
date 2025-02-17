import RootReducer from './reducer';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)))
