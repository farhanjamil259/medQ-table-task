import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { orders, orderType } from "../FrontendTaskMockOrdersData";

export const getData = createAsyncThunk("data/get", async () => {
  return new Promise(() => {});
});

interface DataFilter {
  searchString: string;
}

export interface DataState {
  loading: number;
  data: orderType[];
  filteredData: orderType[];
  error?: string;
  number: number[];
  filter: DataFilter;
}

const initialState: DataState = {
  loading: 0,
  data: orders,
  number: [],
  filter: {
    searchString: "",
  },
  filteredData: orders,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    filterData: (state, action: PayloadAction<DataFilter>) => {
      const { searchString } = action.payload;

      const filteredData = state.data.filter((d) => {
        return JSON.stringify(d).toLocaleLowerCase().includes(searchString);
      });

      state.filteredData = filteredData;
    },
  },
});

export const { filterData } = dataSlice.actions;

const dataReducer = dataSlice.reducer;

export default dataReducer;
