import { arrImg } from "../../../core/constants/constants";
import { currentDate } from "../../../core/helpers/dateFormat.helpers";

export const LOAD_HOTELS_REQUEST = "LOAD_HOTELS_REQUEST";
export const LOAD_HOTELS_SUCCESS = "SET_HOTELS_SUCCESS";
export const LOAD_HOTELS_FAILURE = "SET_HOTELS_FAILURE";

export const fetchHotelsRequestAction = (
  currentDate: any,
  location: any,
  amountOfDays: any
) => ({
  type: LOAD_HOTELS_REQUEST,
  payload: { currentDate, location, amountOfDays },
});

export const fetchHotelsSuccessAction = (payload: { data: any }) => ({
  type: LOAD_HOTELS_SUCCESS,
  payload,
});
export const fetchHotelsFailureAction = (payload: { error: any }) => ({
  type: LOAD_HOTELS_FAILURE,
  payload,
});

const initialState: any = {
  data: [],
  error: null,
  loading: false,
  currentDate,
  amountOfDays: 1,
  location: "Москва",
  img: [],
};

export default function hotelReducer(state = initialState, action: any) {
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
        data: action.payload,
        error: null,
        img: arrImg,
      };

    case LOAD_HOTELS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
        img: [],
      };
    default:
      return state;
  }
}
