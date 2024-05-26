import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('productsSlice/fetchProducts', async() =>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    console.log(data);
    return data;
})

export const productsSlice = createSlice({
    initialState: [],
    name: "productsSlice",
    reducers:{
        addProduct: (state, action) => {
            state.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) =>{
            return state = action.payload;
        })
    }
})

export const {addProduct} = productsSlice.actions;
export default productsSlice.reducer