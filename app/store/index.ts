import { createSlice, configureStore } from "@reduxjs/toolkit";

const testCounterRedux = createSlice({
  name: "counter",
  initialState: { counterA: 0, counterB: 5 },
  reducers: {
    tambahA: (state) => {
      state.counterA += 1;
      console.log(state.counterA);
    },
    tambahB: (state) => {
      state.counterB += 2;
    },
  },
});

export const { tambahA, tambahB } = testCounterRedux.actions;

// Section subscriber
export const store = configureStore({ reducer: testCounterRedux.reducer });


