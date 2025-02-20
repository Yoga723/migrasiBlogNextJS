import { createSlice } from "@reduxjs/toolkit";
import authorImgPlaceholder from "@/public/assets/img/gallery/author.webp";

// Slice untuk menyimpan data author
const authorsDetailSlice = createSlice({
  name: "authorsDetail", // Nama slice
  // Initial state dengan data author default
  initialState: {
    authorsDetail: [
      {
        authorName: "Author Placeholder",
        imgPath: authorImgPlaceholder.toString() || undefined,
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
