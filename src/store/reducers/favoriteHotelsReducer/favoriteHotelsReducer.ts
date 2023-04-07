import { getFromLocalStorage } from "../../../core/helpers/localStorage.helpers";
import {
  ActionTypesFavorite,
  TFavoriteAction,
  TFavoriteReducerState,
} from "../../types/store.types";

const initialState: TFavoriteReducerState = {
  favorite: getFromLocalStorage("favorite")
    ? JSON.parse(getFromLocalStorage("favorite") || "{}")
    : [],
};

export default function favoriteHotelReducer(
  state = initialState,
  action: TFavoriteAction
): TFavoriteReducerState {
  switch (action.type) {
    case ActionTypesFavorite.ADD_FAVORITE_HOTELS:
      action.payload.hotels["days"] = action.payload.amountOfDays;
      action.payload.hotels["currentDate"] = action.payload.currentDate;
      return {
        ...state,
        favorite: state.favorite.some(
          (hotel) => hotel.hotelId === action.payload.hotels.hotelId
        )
          ? state.favorite
          : [...state.favorite, action.payload.hotels],
      };

    case ActionTypesFavorite.DELETE_FAVORITE_HOTELS:
      return {
        ...state,
        favorite: state.favorite.filter(
          (hotels) => hotels.hotelId !== action.payload.hotelId
        ),
      };

    case ActionTypesFavorite.SORT_RATING_ASC:
      const stateCopyRatingAsc = state.favorite.map((hotels) => hotels);
      stateCopyRatingAsc.sort((a: { stars: number }, b: { stars: number }) =>
        b.stars < a.stars ? 1 : -1
      );
      return {
        ...state,
        favorite: stateCopyRatingAsc,
      };
    case ActionTypesFavorite.SORT_RATING_DESC:
      const stateCopyRatingDesc = state.favorite.map((hotels) => hotels);
      stateCopyRatingDesc.sort((a: { stars: number }, b: { stars: number }) =>
        b.stars > a.stars ? 1 : -1
      );
      return {
        ...state,
        favorite: stateCopyRatingDesc,
      };

    case ActionTypesFavorite.SORT_PRICE_ASC:
      const stateCopyPriceAsc = state.favorite.map((hotels) => hotels);
      stateCopyPriceAsc.sort(
        (a: { priceFrom: number }, b: { priceFrom: number }) =>
          b.priceFrom < a.priceFrom ? 1 : -1
      );
      return {
        ...state,
        favorite: stateCopyPriceAsc,
      };
    case ActionTypesFavorite.SORT_PRICE_DESC:
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
