import { createSlice } from "@reduxjs/toolkit";
import * as axios from 'axios';
import {toast} from "react-toastify";

const userSlice = createSlice({
    name : "user",
    initialState : {
        loading : false,
        isAuthenticated : false,
        user : {},
    },

    reducers : {

        // what is reducer ? 
        // These are functions to change the value of states.

        //reducer 
        registerRequest(state,action) {
            state.loading = true;
            state.isAuthenticated = false;
            state.user = {};
        },

        registerSuccess(state,action) {
            state.loading = false;
            state.isAuthenticated= true;
            state.user = action.payload.user;
        },

        registerFailed(state,action) {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = {};
        },

        loginRequest(state,action) {
            state.loading = true;
            state.isAuthenticated = false;
            state.user = {};
        },

        loginSuccess(state,action) {
            state.loading = false;
            state.isAuthenticated= true;
            state.user = action.payload.user;
        },

        loginFailed(state,action) {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = {};
        },

        fetchUserRequest(state,action) {
            state.loading = true;
            state.isAuthenticated = false;
            state.user = {};
        },

        fetchUserSuccess(state,action) {
            state.loading = false;
            state.isAuthenticated= true;
            state.user = action.payload;
        },

        fetchUserFailed(state,action) {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = {};
        },


        //reducer
        logoutSuccess(state,action) {
            state.isAuthenticated = false;
            state.user = {};
        },

        //reducer
        logoutFailed(state,action) {
            state.loading = false;
            state.isAuthenticated = state.isAuthenticated;
            state.user = state.user;
        },

        // reducer
        clearAllErrors (state,action) {
            state.user = state.user;
            state.isAuthenticated = state.isAuthenticated;
            state.loading = false;
        },
    },
});


// To use reducers of register in other files we have to create a function : 
export const register = (data) => async(dispatch) => {
    dispatch(userSlice.actions.registerRequest());
    try {
        const response = await axios.post("register_url", data, {
            withCredentials : true,
            header : {"Content-Type": "multipart/form-data"}
        });

        dispatch(userSlice.actions.registerSuccess(response.data));
        toast.success(response.data.message);
        dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(userSlice.actions.registerFailed());
        toast.error(error.response.data.message);
        dispatch(userSlice.actions.clearAllErrors());
    }
}

export const login = (data) => async(dispatch) => {
    dispatch(userSlice.actions.loginRequest());
    try {
        const response = await axios.post("login_url", data, {
            withCredentials : true,
            header : {"Content-Type": "application/json"}
        });

        dispatch(userSlice.actions.loginSuccess(response.data));
        toast.success(response.data.message);
        dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(userSlice.actions.loginFailed());
        toast.error(error.response.data.message);
        dispatch(userSlice.actions.clearAllErrors());
    }
}
// To use reducers of logout in other files we have to create a function : 
export const logout = () => async (dispatch) => {
    try {
        const response = await axios.get("logout_route", {withCredentials : true});
        dispatch(userSlice.actions.logoutSuccess());
        toast.success(response.data.message);
        dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(userSlice.actions.logoutFailed());
        toast.error(error.response.data.message);
        dispatch(userSlice.actions.clearAllErrors());
    };
};


export const fetchUser = () => async (dispatch) => {
    dispatch(userSlice.actions.fetchUserRequest());
    
    try {
        const response = await axios.get("get_profile_url", {withCredentials : true});
        dispatch(userSlice.actions.fetchUserSuccess());
        dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(userSlice.actions.fetchUserFailed());
        dispatch(userSlice.actions.clearAllErrors());
    };
};

export default userSlice.reducer;