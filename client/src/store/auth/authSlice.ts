import { UserType } from "./types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: UserType = {
   status: true,
   user: {
      _id: "",
      username: "",
      email: "",
      avatar: null,
      photos: [],
      token: "",
      joined: "",
   },
};

export const authSlice = createSlice({
   name: "authSlice",
   initialState,
   reducers: {
      Login: (state, action: PayloadAction<UserType>) => {
         state.status = action.payload.status;
         state.user = action.payload.user;
      },
      Logout: (state) => {
         state.status = false;
         localStorage.removeItem("token");
         state.user = {
            _id: "",
            username: "",
            email: "",
            avatar: null,
            photos: [],
            token: "",
            joined: "",
         };
      },
   },
});

export const { Login, Logout } = authSlice.actions;
export default authSlice.reducer;
