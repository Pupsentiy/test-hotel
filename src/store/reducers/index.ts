import { combineReducers } from "redux";

import hotelReducer from "./hotels/hotelReducer";
import favoriteHotelReducer from "./favoriteHotelsReducer/favoriteHotelsReducer";
import signInReducer from "./auth/signInReducer";

export const rootReducer = combineReducers({
  hotelReducer,
  favoriteHotelReducer,
  signInReducer,
});
