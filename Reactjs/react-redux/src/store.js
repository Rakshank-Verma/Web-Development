import { configureStore } from '@reduxjs/toolkit'
import { newReducer } from './newReducer';
import { customReducer } from './reducer'
const store = configureStore({
  reducer: {
    custom : customReducer,
    other : newReducer
  }
})

export default store;