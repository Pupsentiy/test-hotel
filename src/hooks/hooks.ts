import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const useAppDispatch = () => useDispatch<AppDispatch>();

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
 
export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();