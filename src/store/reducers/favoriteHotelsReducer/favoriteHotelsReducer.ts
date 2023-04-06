import { getFromLocalStorage } from "../../../core/helpers/localStorage.helpers";

export const ADD_FAVORITE_HOTELS = "ADD_FAVORITE_HOTELS";
export const DELETE_FAVORITE_HOTELS = "DELETE_FAVORITE_HOTELS";
export const SORT_RATING_ASC = "SORT_RATING_ASC";
export const SORT_RATING_DESC = "SORT_RATING_DESC";
export const SORT_PRICE_ASC = "SORT_PRICE_ASC";
export const SORT_PRICE_DESC = "SORT_PRICE_DESC";

const initialState: any = {
  favorite: getFromLocalStorage("favorite")
    ? JSON.parse(getFromLocalStorage("favorite") || "{}")
    : [],
};

export const setAddFavoriteAction = (data: any, amountOfDays: string) => ({
  type: ADD_FAVORITE_HOTELS,
  payload: { data, amountOfDays },
});
export const setDeleteFavoriteAction = (payload: { error: any }) => ({
  type: DELETE_FAVORITE_HOTELS,
  payload,
});

export const setSortRatingAscAction = () => ({
  type: SORT_RATING_ASC,
});

export const setSortRatingDescAction = () => ({
  type: SORT_RATING_DESC,
});
export const setSortPriceAscAction = () => ({
  type: SORT_PRICE_ASC,
});
export const setSortPriceDescAction = () => ({
  type: SORT_PRICE_DESC,
});

export default function favoriteHotelReducer(
  state = initialState,
  action: any
) {
  switch (action.type) {
    case ADD_FAVORITE_HOTELS:
      action.payload.data["days"] = action.payload.amountOfDays;
      return {
        ...state,
        favorite: state.favorite.some(
          (hotel: any) => hotel.hotelId === action.payload.hotelId
        )
          ? state.favorite
          : [...state.favorite, action.payload.data],
      };

    case DELETE_FAVORITE_HOTELS:
      return {
        ...state,
        favorite: state.favorite.filter(
          (hotels: any) => hotels.hotelId !== action.payload.hotelId
        ),
      };

    case SORT_RATING_ASC:
      const stateCopyRatingAsc = state.favorite.map((e: any) => e);
      stateCopyRatingAsc.sort((a: { stars: number }, b: { stars: number }) =>
        b.stars < a.stars ? 1 : -1
      );
      return {
        ...state,
        favorite: stateCopyRatingAsc,
      };
    case SORT_RATING_DESC:
      const stateCopyRatingDesc = state.favorite.map((e: any) => e);
      stateCopyRatingDesc.sort((a: { stars: number }, b: { stars: number }) =>
        b.stars > a.stars ? 1 : -1
      );
      return {
        ...state,
        favorite: stateCopyRatingDesc,
      };

    case SORT_PRICE_ASC:
      const stateCopyPriceAsc = state.favorite.map((e: any) => e);
      stateCopyPriceAsc.sort(
        (a: { priceFrom: number }, b: { priceFrom: number }) =>
          b.priceFrom < a.priceFrom ? 1 : -1
      );
      return {
        ...state,
        favorite: stateCopyPriceAsc,
      };
    case SORT_PRICE_DESC:
      const stateCopyPriceDesc = state.favorite.map((e: any) => e);
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
