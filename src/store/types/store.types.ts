import { AxiosRequestHeaders, AxiosRequestConfig } from "axios";
import { TArrImg } from "../../core/constants/constants.types";

export interface THotels {
  pricePercentile: PricePercentile;
  locationId: number;
  location: Location;
  priceAvg: number;
  stars: number;
  hotelName: string;
  priceFrom: number;
  hotelId: number;
  days?: number;
  currentDate?: string;
}

export interface PricePercentile {
  "3": number;
  "10": number;
  "35": number;
  "50": number;
  "75": number;
  "99": number;
}

export interface Location {
  geo: Geo;
  country: string;
  name: string;
  state: any;
}

export interface Geo {
  lon: number;
  lat: number;
}

export type THotelReducerState = {
  hotels: THotels[];
  error: null | string;
  loading: boolean;
  currentDate: string;
  amountOfDays: number;
  location: string;
  img: TArrImg[];
};

export type TFavoriteReducerState = {
  favorite: THotels[];
};

export type TGetHotelsFromApiProps = {
  currentDate: string;
  location: string;
  amountOfDays: number;
};

export type TSignInReducerState = {
  auth: string;
};

export enum ActionTypesHotels {
  LOAD_HOTELS_REQUEST = "LOAD_HOTELS_REQUEST",
  LOAD_HOTELS_SUCCESS = "LOAD_HOTELS_SUCCESS",
  LOAD_HOTELS_FAILURE = "LOAD_HOTELS_FAILURE",
}
export enum ActionTypesFavorite {
  ADD_FAVORITE_HOTELS = "ADD_FAVORITE_HOTELS",
  DELETE_FAVORITE_HOTELS = "DELETE_FAVORITE_HOTELS",
  SORT_RATING_ASC = "SORT_RATING_ASC",
  SORT_RATING_DESC = "SORT_RATING_DESC",
  SORT_PRICE_ASC = "SORT_PRICE_ASC",
  SORT_PRICE_DESC = "SORT_PRICE_DESC",
}

export enum ActionTypesAuth {
  LOGIN = "LOGIN",
}

export interface ResponseGenerator {
  config?: RequestInit;
  data: THotels[];
  headers?: AxiosRequestHeaders;
  request?: AxiosRequestConfig;
  status?: number;
  statusText?: string;
}

export interface TFetchHotelsRequestAction {
  type: "LOAD_HOTELS_REQUEST";
  payload: { currentDate: string; location: string; amountOfDays: number };
}

export interface TFetchHotelsSuccessAction {
  type: "LOAD_HOTELS_SUCCESS";
  payload: THotels[];
}

export interface TFetchHotelsFailureAction {
  type: "LOAD_HOTELS_FAILURE";
  payload: string;
}

export interface TSetAddFavoriteAction {
  type: "ADD_FAVORITE_HOTELS";
  payload: { hotels: THotels; amountOfDays: number; currentDate: string };
}

export interface TSetDeleteFavoriteAction {
  type: "DELETE_FAVORITE_HOTELS";
  payload: THotels;
}

export interface TSetSortRatingAscAction {
  type: "SORT_RATING_ASC";
}
export interface TSetSortRatingDescAction {
  type: "SORT_RATING_DESC";
}
export interface TSetSortPriceAscAction {
  type: "SORT_PRICE_ASC";
}
export interface TSetSortPriceDescAction {
  type: "SORT_PRICE_DESC";
}

export interface TSetLoginAction {
  type: "LOGIN";
  payload: string;
}

export type TSinInAction = TSetLoginAction;

export type THotelAction =
  | TFetchHotelsRequestAction
  | TFetchHotelsSuccessAction
  | TFetchHotelsFailureAction;

export type TFavoriteAction =
  | TSetAddFavoriteAction
  | TSetDeleteFavoriteAction
  | TSetSortRatingAscAction
  | TSetSortRatingDescAction
  | TSetSortPriceAscAction
  | TSetSortPriceDescAction;
