import { createSlice, configureStore } from "@reduxjs/toolkit";

// Redux untuk author
const authorsDetail = createSlice({
  name: "authorsDetail",
  initialState: {
    authorsDetail: [
      {
        authorName: "Yoga Pangestu",
        imgPath: "https://res.cloudinary.com/daqshfnz3/image/upload/f_auto,q_auto/yoga-pangestu_oyrhf1",
        quotes: "Ini quotes dari authornya yaaa",
      },
      {
        authorName: "Miftakhul Hudha",
        imgPath: "https://res.cloudinary.com/daqshfnz3/image/upload/f_auto,q_auto/huda_wabtbd",
        quotes: "Ini quotes dari authornya yaaa",
      },
      {
        authorName: "Ariful Fathoni",
        imgPath: "https://res.cloudinary.com/daqshfnz3/image/upload/f_auto,q_auto/ari_flxmfb",
        quotes: "Ini quotes dari authornya yaaa",
      },
      {
        authorName: "Darma Putra Kusuma",
        imgPath: "https://res.cloudinary.com/daqshfnz3/image/upload/f_auto,q_auto/darma_sxomfn",
        quotes: "Ini quotes dari authornya yaaa",
      },
    ],
  },
  reducers: {
    // Function untuk menyimpan data respond ke authorsDetail
    updateAuthorsState: (state, respond) => {
      state.authorsDetail = respond.payload;
      console.log(state.authorsDetail);
    },
  },
});

export const { updateAuthorsState } = authorsDetail.actions;
export const storeAuthor = configureStore({ reducer: authorsDetail.reducer });

// Contoh implementasi Redux
const testCounterRedux = createSlice({
  name: "counter",
  initialState: { counterA: 0, counterB: 5 },
  reducers: {
    tambahA: (state, testString) => {
      state.counterA += 1;
      console.log(state.counterA);
      console.log(testString.payload);
    },
    tambahB: (state) => {
      state.counterB += 2;
    },
  },
});

export const { tambahA, tambahB } = testCounterRedux.actions;

// Section subscriber
export const store = configureStore({ reducer: testCounterRedux.reducer });
