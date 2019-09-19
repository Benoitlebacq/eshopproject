import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user-reducer";
import cartReducer from "../redux/cart/cart-reducer";
import directoryReducer from "../redux/directory/directory-reducer";
import shopReducer from "../redux/shop/shop-reducer";

const persistConfig = {
  key: "root", //dis a  persist ou on veut commencer a enregistrer le json , ici on veut tout.
  storage,
  whitelist: ["cart"] // nom en string de tous les reducers qu'on veut persister
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer); //on passe cette version modifié de notre rootReducer ,avec la Persist config
