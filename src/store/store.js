import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import DataroomReducer from "./reducers/dataroom";


const reducers = combineReducers({dataroom: DataroomReducer});
const initialState = {}
const middleWare = [thunkMiddleware]

const store =  createStore(
       reducers,initialState,composeWithDevTools(applyMiddleware(...middleWare))
   )
export default store;