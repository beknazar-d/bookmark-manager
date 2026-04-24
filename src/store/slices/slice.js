import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { changeFormat, sortCard } from "../../utils/timeHelper";

const initialState = {
    allCards: [],
    cards: [],
    filteredCards: [],
    activeSelector: 'Home',
    searchedItem: null,
    sortName: '',
    activeTag: '',
    cardToEdit: null,
    status: 'idle',
    error: null
}

const applyFilters = (state) => {
    let result = state.allCards.sort((a, b) => b.pinned - a.pinned);


    if (state.activeSelector === 'Home') {
        result = state.allCards.filter(item => !item.isArchived);
    } else if (state.activeSelector === 'Archive') {
        result = state.allCards.filter(item => item.isArchived);
    }


    if (state.searchedItem) {
        result = result.filter(item =>
            item.title.toLowerCase().includes(state.searchedItem.toLowerCase())
        );
    }


    if (state.sortName) {
        result = sortCard(result, state.sortName);
    }
    if (state.activeTag) {
        result = result.filter(item => item.tags.includes(state.activeTag));
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
export const updateCard = createAsyncThunk(
    'cards/updateCard',
    async ({ id, updates }, { getState }) => {
        const state = getState();
        const currentCard = state.cards.allCards.find((card) => card.id === id);

        if (!currentCard) {
            throw new Error(`Card with id ${id} not found`);
        }

        const cardToUpdate = {
            ...currentCard,
            ...updates,
        };

        const response = await fetch(`http://localhost:3001/bookmarks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cardToUpdate),
        });
        const data = await response.json();
        return {
            ...data,
            createdAtRaw: data.createdAt,
            lastVisitedRaw: data.lastVisited,
            createdAt: changeFormat(data.createdAt),
            lastVisited: changeFormat(data.lastVisited),
        };
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
        addCardToEdit: (state, action) => {
            if (!action.payload) {
                state.cardToEdit = null
            }
            state.cardToEdit = state.allCards.find(item => item.id === action.payload)
        },
        setActiveTag: (state, action) => {
                if (state.activeTag === action.payload) {
        state.activeTag = null;
    } else {
        state.activeTag = action.payload;
    }

            applyFilters(state)
        }
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
            })
            .addCase(updateCard.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateCard.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allCards = state.allCards.map((card) =>
                    card.id === action.payload.id ? action.payload : card
                );
                applyFilters(state);
            })
            .addCase(updateCard.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const selectFilteredCards = (state) => state.cards.filteredCards;
export const selectActiveSelector = (state) => state.cards.activeSelector;
export const selectActiveTag = (state) => state.cards.activeTag;

export const { setActiveSection, addSearchedItem, addSortName, addCardToEdit, setActiveTag } = cardsSlice.actions;
export default cardsSlice.reducer;