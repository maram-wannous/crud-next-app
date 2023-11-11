import { login } from "../actions/auth.action";
import { deleteCourse } from "../actions/coursers.action";

const { createSlice } = require("@reduxjs/toolkit");

const authReducer= createSlice({
    name: 'auth',
    initialState : {
        user: [],
        isLoading: false,
        isAuth: false,
    },
    reducers: {
        logout(state) {
            state.isAuth = false;
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.isAuth = false;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true,
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
            });
    }
});
export const { logout } = authReducer.actions;
export default authReducer.reducer;