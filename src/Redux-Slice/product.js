import { createSlice } from '@reduxjs/toolkit'

export const articles = [
    {
        name: 'article-1',
        id: '0',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    },
    {
        name: 'article-2',
        id: '1',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    },
    {
        name: 'article-3',
        id: '2',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    }, {
        name: 'article-4',
        id: '3',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    },
    {
        name: 'article-1',
        id: '0',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    },
    {
        name: 'article-2',
        id: '1',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    },
    {
        name: 'article-3',
        id: '2',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    }, {
        name: 'article-4',
        id: '3',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    },
    {
        name: 'article-1',
        id: '0',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    },
    {
        name: 'article-2',
        id: '1',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    },
    {
        name: 'article-3',
        id: '2',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    }, {
        name: 'article-4',
        id: '3',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    }

]

export const allproductSlice = createSlice({
    name: 'product',
    initialState: {
        product: articles,
    },
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            return state.product
        }
    }
})

export const { increment } = allproductSlice.actions

export default allproductSlice.reducer