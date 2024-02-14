import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { HotelS } from '../../app/shared/HotelS';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchHotels = createAsyncThunk(
    'hotels/fetchHotels',
    async () => {
        const response = await fetch(baseUrl + 'Hotels');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);


const initialState = {
    hotelsArray: [],
    isLoading: true,
    errMsg: ''
};

const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchHotels.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchHotels.filled] : (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.hotelsArray = mapImageURL(action.payload);
        },
        [fetchHotels.rejected] : (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const hotelsReducer = hotelsSlice.reducer;

export const selectAllHotels = (state) => {
    return state.hotels.hotelsArray;
};

export const selectHotelById = (id) => (state) => {
    return state.hotels.hotelsArray.find(
        (hotel) => hotel.id === parseInt(id)
    );
};

export const selectFeaturedHotel = (state) => {
    return state.hotels.hotelsArray.find((hotel) => hotel.featured);
};
