import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const eventSlice = createSlice({
    name : 'event',
    initialState : {
        loading : false,
        itemDetails : {},
        eventDetails : {},
        eventParticipant : {},
        myEvents : [],
        allEvents : [],
    },

    reducers : {
        getAllEventItemRequest(state,action) {
            state.loading = true;
        },
        getAllEventItemSuccess(state,action) {
            state.loading = false;
            state.allEvents = action.payload;
        },
        getAllEventItemFailed(state,action) {
            state.loading = false;
        },
        
        resetSlice(state,action) {
            state.loading = false;
            state.itemDetails = state.itemDetails;
            state.eventDetails = state.eventDetails;
            state.myEvents = state.myEvents;
            state.allEvents = state.allEvents;
        },
    },
});

export const getAllEventItems = () => async(dispatch)=>{
    dispatch(eventSlice.actions.getAllEventItemRequest());
    try {
        //Backend 1
        const response = await axios.get("http://localhost:5000/api/eventItems/allItems", {withCredentials : true});
        dispatch(eventSlice.actions.getAllEventItemSuccess(response.data.items)); // i have doubt in this line
        dispatch(eventSlice.actions.resetSlice());
    } catch(error) {
        dispatch(eventSlice.actions.getAllEventItemFailed());
        console.error(error);
        dispatch(eventSlice.actions.resetSlice());

    }
}

export default eventSlice.reducer;