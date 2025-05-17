import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
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
            localStorage.setItem("loginuser",JSON.stringify(action.payload.user));
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
            localStorage.setItem("loginuser",JSON.stringify(action.payload.user));
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
            localStorage.removeItem("token");
            localStorage.removeItem("loginuser");
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
        const response = await axios.post("http://localhost:5000/api/auth/register", data, {
            withCredentials : true,
            headers : {"Content-Type": "multipart/form-data"}
        });
        console.log("Done till here");

        const {token}=response.data;
        localStorage.setItem("token",token);
        
        dispatch(userSlice.actions.registerSuccess(response.data));
        toast.success(response.data.message);
        dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(userSlice.actions.registerFailed());
        toast.error(error?.response?.data?.message || error.message || "Something went wrong");

        dispatch(userSlice.actions.clearAllErrors());
    }
}

export const login = (data) => async(dispatch) => {
    dispatch(userSlice.actions.loginRequest());
    try {
        const response = await axios.post("http://localhost:5000/api/auth/login", data, {
            withCredentials : true,
            headers : {"Content-Type": "application/json"}
        });

        const {token}=response.data;
        localStorage.setItem("token",token);
        // localStorage.setItem("loginuser",JSON.stringify(loggedInUser));

        dispatch(userSlice.actions.loginSuccess(response.data));
        toast.success(response.data.message);
        dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(userSlice.actions.loginFailed());
        toast.error(error?.response?.data?.message || error.message || "Something went wrong");

        dispatch(userSlice.actions.clearAllErrors());
    }
}
// To use reducers of logout in other files we have to create a function : 
export const logout = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:5000/api/auth/logout", {withCredentials : true});
        dispatch(userSlice.actions.logoutSuccess());
        toast.success(response.data.message);
        dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(userSlice.actions.logoutFailed());
        toast.error(error?.response?.data?.message || error.message || "Something went wrong");

        dispatch(userSlice.actions.clearAllErrors());
    };
};


export const fetchUser = () => async (dispatch) => {
    dispatch(userSlice.actions.fetchUserRequest());
    
    try {
        const response = await axios.get("http://localhost:5000/api/auth/me", {withCredentials : true});
        dispatch(userSlice.actions.fetchUserSuccess(response.data));
        dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(userSlice.actions.fetchUserFailed());
        dispatch(userSlice.actions.clearAllErrors());
    };
};

export default userSlice.reducer;