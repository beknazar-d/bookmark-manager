import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { changeFormat } from "../../utils/timeHelper";
const initialState = {
    cards: null,
    status: 'idle',
    error: null
}

export const fetchCards = createAsyncThunk(
    'cards/fetchCards',
    async () => {
        const response = await fetch('http://localhost:3001/bookmarks');
        const data = await response.json();
        const formattedData = data.map((item) => ({
            ...item,
            createdAt: changeFormat(item.createdAt),
            lastVisited: changeFormat(item.lastVisited)
        }));
        return formattedData
    }
);


const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder
            .addCase(fetchCards.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.cards = action.payload
            })
            .addCase(fetchCards.rejected, (state, action) => {
                state.state = 'failed'
                state.error = action.error.message
            })
    }


});



export default cardsSlice.reducer;