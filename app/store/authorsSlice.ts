import { createSlice } from "@reduxjs/toolkit";

// Slice untuk menyimpan data author
const authorsDetailSlice = createSlice({
  name: "authorsDetail", // Nama slice
  // Initial state dengan data author default
  initialState: {
    authorsDetail: [
      {
        authorName: "Author Placeholder",
        imgPath: "https://www.dialogika.co/blog/public/assets/img/gallery/author.webp",
        quotes: "Please choose another author OR refresh page",
      },
    ],
  },
  reducers: {
    // Reducer untuk meng-update data author
    updateAuthorsState: (state, action) => {
      state.authorsDetail = action.payload;
      console.log("ini log setelah action dilakukan :", state.authorsDetail);
    },
  },
});

// Ekspor action dan reducer-nya
export const { updateAuthorsState } = authorsDetailSlice.actions;
export default authorsDetailSlice.reducer;
