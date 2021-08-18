import { TypedUseSelectorHook, useSelector } from "react-redux";
import store from "../redux/store";
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
