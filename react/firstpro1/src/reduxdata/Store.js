import { createStore } from "redux"
import UserReducer from "./reducers/UserReducer"
const store = createStore(UserReducer)

store.subscribe(()=>{
     localStorage.setItem("data",JSON.stringify(store.getState()))
})
export default store;