import { getFromLocalStorage } from "../../../core/helpers/localStorage.helpers";
import { ADD_FAVORITE_HOTELS, DELETE_FAVORITE_HOTELS, SORT_RATING_ASC, SORT_RATING_DESC, SORT_PRICE_ASC, SORT_PRICE_DESC } from "../../sagas";
import {
  
  TFavoriteAction,
  TFavoriteReducerState,
  TSetAddFavoriteAction,
  TSetDeleteFavoriteAction,
  TSetSortPriceAscAction,
  TSetSortPriceDescAction,
  TSetSortRatingAscAction,
  TSetSortRatingDescAction,
} from "../../types/store.types";

const initialState: TFavoriteReducerState = {
  favorite: getFromLocalStorage("favorite")
    ? JSON.parse(getFromLocalStorage("favorite") || "{}")
    : [],
};

export default function favoriteHotelReducer(
  state = initialState,
  action:| TSetAddFavoriteAction
  | TSetDeleteFavoriteAction
  | TSetSortRatingAscAction
  | TSetSortRatingDescAction
  | TSetSortPriceAscAction
  | TSetSortPriceDescAction
): TFavoriteReducerState {
  switch (action.type) {
    case ADD_FAVORITE_HOTELS:
      action.payload.hotels["days"] = action.payload.amountOfDays;
      action.payload.hotels['currentDate'] = action.payload.currentDate
      return {
        ...state,
        favorite: state.favorite.some(
          (hotel) => hotel.hotelId === action.payload.hotels.hotelId
        )
          ? state.favorite
          : [...state.favorite, action.payload.hotels],
      };

    case DELETE_FAVORITE_HOTELS:
      return {
        ...state,
        favorite: state.favorite.filter(
          (hotels) => hotels.hotelId !== action.payload.hotelId
        ),
      };

    case SORT_RATING_ASC:
      const stateCopyRatingAsc = state.favorite.map((hotels) => hotels);
      stateCopyRatingAsc.sort((a: { stars: number }, b: { stars: number }) =>
        b.stars < a.stars ? 1 : -1
      );
      return {
        ...state,
        favorite: stateCopyRatingAsc,
      };
    case SORT_RATING_DESC:
      const stateCopyRatingDesc = state.favorite.map((hotels) => hotels);
      stateCopyRatingDesc.sort((a: { stars: number }, b: { stars: number }) =>
        b.stars > a.stars ? 1 : -1
      );
      return {
        ...state,
        favorite: stateCopyRatingDesc,
      };

    case SORT_PRICE_ASC:
      const stateCopyPriceAsc = state.favorite.map((hotels) => hotels);
      stateCopyPriceAsc.sort(
        (a: { priceFrom: number }, b: { priceFrom: number }) =>
          b.priceFrom < a.priceFrom ? 1 : -1
      );
      return {
        ...state,
        favorite: stateCopyPriceAsc,
      };
    case SORT_PRICE_DESC:
      const stateCopyPriceDesc = state.favorite.map((hotels) => hotels);
      stateCopyPriceDesc.sort(
        (a: { priceFrom: number }, b: { priceFrom: number }) =>
          b.priceFrom > a.priceFrom ? 1 : -1
      );
      return {
        ...state,
        favorite: stateCopyPriceDesc,
      };
    default:
      return state;
  }
}
