import {  createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLoading: true,
    allBooks:[],
    updateBooks:{},
};



const chartSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        getAllBooks: (state, action) => {
            state.allBooks = action.payload
        },
        getUpdateBooks: (state, action) => {
            state.updateBooks = action.payload
        }
      

    },
    // extraReducers: builder => {
    //     builder.addCase(fetchChartData.pending, (state, action) => {
    //         state.isLoading = true
    //     })

    //     builder.addCase(fetchChartData.fulfilled, (state, action) => {
    //         state.isLoading = false
    //         state.dataFromAPI = action.payload
    //         state.errorFromAPI = ''
    //     })

    //     builder.addCase(fetchChartData.rejected, (state, action) => {
    //         state.isLoading = false
    //         state.dataFromAPI = []
    //         state.errorFromAPI = action.error.message
    //     })
    // }

});

export default chartSlice.reducer
export const { getAllBooks, getUpdateBooks} = chartSlice.actions