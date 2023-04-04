export const SET_HOTELS = "SET_HOTELS";
export const FETCH_HOTELS = "FETCH_HOTELS";

const initialState: any = {
  data: [],
};

export default function hotelReducer (state = initialState, action: any){
  switch (action.type) {
    case SET_HOTELS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export const setHotel = (payload: any) => ({ type: SET_HOTELS, payload });
export const fetchHotels = () => ({ type: FETCH_HOTELS });

