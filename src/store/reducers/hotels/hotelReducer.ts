import { arrImg } from "../../../core/constants/constants";
import { currentDate } from "../../../core/helpers/dateFormat.helpers";
import {
  LOAD_HOTELS_REQUEST,
  LOAD_HOTELS_SUCCESS,
  LOAD_HOTELS_FAILURE,
} from "../../sagas";
import { TFetchHotelsFailureAction, TFetchHotelsRequestAction, TFetchHotelsSuccessAction, THotelAction, THotelReducerState } from "../../types/store.types";

const initialState: THotelReducerState = {
  hotels: [],
  error: null,
  loading: false,
  currentDate,
  amountOfDays: 1,
  location: "Москва",
  img: [],
};

export default function hotelReducer(
  state = initialState,
  action:
    | TFetchHotelsRequestAction
    | TFetchHotelsSuccessAction
    | TFetchHotelsFailureAction
): THotelReducerState {
  switch (action.type) {
    case LOAD_HOTELS_REQUEST:
      const { amountOfDays, currentDate } = action.payload;
      return {
        ...state,
        loading: true,
        amountOfDays: amountOfDays,
        currentDate: currentDate,
      };
    case LOAD_HOTELS_SUCCESS:
      return {
        ...state,
        loading: false,
        hotels: action.payload,
        error: null,
        img: arrImg,
      };

    case LOAD_HOTELS_FAILURE:
      return {
        ...state,
        loading: false,
        hotels: [],
        error: action.payload,
        img: [],
      };
    default:
      return state;
  }
}
