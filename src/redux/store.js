import { createStore } from "redux";
import addTravelReducer from "./reducers/addTravelReducer";

function configureStore(state = { travelList: [] }) {
  return createStore(addTravelReducer, state);
}

export default configureStore;
