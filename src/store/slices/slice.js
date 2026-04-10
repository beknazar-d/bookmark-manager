import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { changeFormat } from "../../utils/timeHelper";
const initialState = {
    allCards: [],
    cards: [],
    filteredCards: [],
    activeSelector: '',
    searchedItem:null,
    sortName:'',
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
        setActiveSection: (state, action) => {
            state.activeSelector = action.payload;
        },
        searchByName: (state, action) => {
            if (!action.payload) {
                state.filteredCards = []
                return
            }
            state.filteredCards = state.allCards?.filter(item =>
                item.title.toLowerCase().includes(action.payload.toLowerCase())
            )
        },
        addSearchedItem:(state,action)=> {
            state.searchedItem = action.payload;
        },
        addSortName:(state,action)=>{
            state.sortName = action.payload;
        }
    },
    extraReducers: (builder) => {

        builder
            .addCase(fetchCards.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.cards = action.payload
                state.allCards = action.payload
            })
            .addCase(fetchCards.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }


});

export const activeSelector = (state) => state.cards.activeSelector;
export const filteredCards = (state) => state.cards.filteredCards;
export const { setActiveSection, searchByName,addSearchedItem,addSortName } = cardsSlice.actions;

export default cardsSlice.reducer;