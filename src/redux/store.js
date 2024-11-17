import { createStore } from "redux";
import usersReducer from "./reduсers";
const store = createStore(usersReducer);
export default store;
