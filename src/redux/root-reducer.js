import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducers";
import userReducer from "./user/user.reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import directoryReducer from "./directory/directory.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer, 
});

export default persistReducer(persistConfig, rootReducer);
