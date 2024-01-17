import { createStore } from "redux";
import mainreducers from "./Reducers/Mainreducers";
const store = createStore(mainreducers)

export default store