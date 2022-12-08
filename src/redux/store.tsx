import { configureStore } from "@reduxjs/toolkit";
import { ReactElement } from "react";
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import dataReducer from "./dataSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

const StoreProvider = ({ children }: { children: ReactElement }) => {
  return <Provider store={store}>{children}</Provider>;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default StoreProvider;
