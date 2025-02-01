import {configureStore} from '@reduxjs/toolkit'
import storySlice from './reducers/storySlice'
import postSlice from './reducers/postSlice'
export const store = configureStore({
    reducer: {
     stories: storySlice,
     posts: postSlice
    }
})