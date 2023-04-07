import { Dispatch } from "redux";
import {
  
  TFavoriteAction,
  THotels,
  TSetAddFavoriteAction,
  TSetDeleteFavoriteAction,
  TSetLoginAction,
  TSetSortPriceAscAction,
  TSetSortPriceDescAction,
  TSetSortRatingAscAction,
  TSetSortRatingDescAction,
} from "../types/store.types";
import { ADD_FAVORITE_HOTELS, DELETE_FAVORITE_HOTELS, LOAD_HOTELS_FAILURE, LOAD_HOTELS_REQUEST, LOAD_HOTELS_SUCCESS, LOGIN, SORT_PRICE_ASC, SORT_PRICE_DESC, SORT_RATING_ASC, SORT_RATING_DESC } from "../sagas";

export const fetchHotelsRequestAction = (
  currentDate: string,
  location: string,
  amountOfDays: number
) => ({
  type: LOAD_HOTELS_REQUEST,
  payload: { currentDate, location, amountOfDays },
});

export const fetchHotelsSuccessAction = (payload: THotels[]) => ({
  type: LOAD_HOTELS_SUCCESS,
  payload,
});

export const fetchHotelsFailureAction = (payload: string ) => ({
  type: LOAD_HOTELS_FAILURE,
  payload,
});


export const setAddFavoriteAction = (hotels: THotels, amountOfDays: number,currentDate:string) => {
  return (dispatch: Dispatch<TFavoriteAction>) => {
    dispatch({
      type: ADD_FAVORITE_HOTELS,
      payload: { hotels, amountOfDays,currentDate },
    });
  };
};

export const setDeleteFavoriteAction = (hotels: THotels) => {
  return (dispatch: Dispatch<TFavoriteAction>) => {
    dispatch({
      type: DELETE_FAVORITE_HOTELS,
      payload: hotels,
    });
  };
};

export const setSortRatingAscAction = () => {
  return (dispatch: Dispatch<TFavoriteAction>) => {
    dispatch({ type: SORT_RATING_ASC });
  };
};

export const setSortRatingDescAction = () => {
  return (dispatch: Dispatch<TFavoriteAction>) => {
    dispatch({ type: SORT_RATING_DESC });
  };
};

export const setSortPriceAscAction = () => {
  return (dispatch: Dispatch<TFavoriteAction>) => {
    dispatch({ type: SORT_PRICE_ASC });
  };
};

export const setSortPriceDescAction = () => {
  return (dispatch: Dispatch<TFavoriteAction>) => {
    dispatch({ type: SORT_PRICE_DESC });
  };
};

export const setLoginAction = (email: string) => {
  return (dispatch: Dispatch<TSetLoginAction>) => {
    dispatch({ type: LOGIN, payload: email });
  };
};
