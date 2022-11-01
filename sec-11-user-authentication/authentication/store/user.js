import {createSlice} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: '',
    isAuthenticated: false
  },
  reducers: {
    authenticate: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state, action) => {
      state.token = '';
      state.isAuthenticated = false;
    }
  }
})

export const authenticate = userSlice.actions.authenticate;
export const logout = userSlice.actions.logout;
export default userSlice.reducer;
