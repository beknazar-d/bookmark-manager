import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { changeFormat, sortCard } from "../../utils/timeHelper";

const initialState = {
    allCards: [],
    cards: [],
    filteredCards: [],
    activeSelector: 'home',
    searchedItem: null,
    sortName: '',
    status: 'idle',
    error: null
}

const applyFilters = (state) => {
    let result = state.allCards;

    // 1. Home / Archive
    if (state.activeSelector === 'home') {
        result = state.allCards.filter(item => !item.isArchived);
    } else if (state.activeSelector === 'Archive') {
        result = state.allCards.filter(item => item.isArchived);
    }

    // 2. Поиск
    if (state.searchedItem) {
        result = result.filter(item =>
            item.title.toLowerCase().includes(state.searchedItem.toLowerCase())
        );
    }

    // 3. Сортировка
    if (state.sortName) {
        result = sortCard(result, state.sortName);
    }

    state.filteredCards = result;
};

export const fetchCards = createAsyncThunk(
    'cards/fetchCards',
    async () => {
        const response = await fetch('http://localhost:3001/bookmarks');
        const data = await response.json();
        return data.map((item) => ({
            ...item,
            createdAtRaw: item.createdAt,
            lastVisitedRaw: item.lastVisited,
            createdAt: changeFormat(item.createdAt),
            lastVisited: changeFormat(item.lastVisited)
        }));
    }
);

export const addCard = createAsyncThunk(
    'cards/addCard',
    async (bookmark) => {
        const response = await fetch(`http://localhost:3001/bookmarks/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookmark),
        });
        return response.json();
    }
);

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setActiveSection: (state, action) => {
            state.activeSelector = action.payload;
            applyFilters(state);
        },
        addSearchedItem: (state, action) => {
            state.searchedItem = action.payload || null;
            applyFilters(state);
        },
        addSortName: (state, action) => {
            state.sortName = action.payload;
            applyFilters(state);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCards.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allCards = action.payload;
                state.cards = action.payload;
                applyFilters(state);
            })
            .addCase(fetchCards.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });

        builder
            .addCase(addCard.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addCard.fulfilled, (state, action) => {
                state.allCards.push(action.payload);
                state.status = 'succeeded';
                applyFilters(state);
            })
            .addCase(addCard.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const selectFilteredCards = (state) => state.cards.filteredCards;
export const selectActiveSelector = (state) => state.cards.activeSelector;

export const { setActiveSection, addSearchedItem, addSortName } = cardsSlice.actions;
export default cardsSlice.reducer;