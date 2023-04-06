import { getFromLocalStorage } from "../../../core/helpers/localStorage.helpers";

export const ADD_FAVORITE_HOTELS = "ADD_FAVORITE_HOTELS";
export const DELETE_FAVORITE_HOTELS = "DELETE_FAVORITE_HOTELS";

const initialState: any = {
  favorite: getFromLocalStorage("favorite")
    ? JSON.parse(getFromLocalStorage("favorite") || "{}")
    : [],
};

export const setAddFavoriteAction = (payload: { data: any }) => ({
  type: ADD_FAVORITE_HOTELS,
  payload,
});
export const setDeleteFavoriteAction = (payload: { error: any }) => ({
  type: DELETE_FAVORITE_HOTELS,
  payload,
});

export default function favoriteHotelReducer(
  state = initialState,
  action: any
) {
  switch (action.type) {
    case ADD_FAVORITE_HOTELS:
      return {
        ...state,
        favorite: state.favorite.some(
          (hotel: any) => hotel.hotelId === action.payload.hotelId
        )
          ? state.favorite
          : [...state.favorite, action.payload],
      };

    case DELETE_FAVORITE_HOTELS:
      return {
        ...state,
        favorite: state.favorite.filter(
          (hotels: any) => hotels.hotelId !== action.payload.hotelId
        ),
      };
    default:
      return state;
  }
}
