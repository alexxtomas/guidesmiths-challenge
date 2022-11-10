import { configureStore } from "@reduxjs/toolkit"
import phoneReducer from '../features/phone/phoneSlice'
import phonesReducer from "../features/phones/phonesSlice"
export const store = configureStore({
  reducer: {
    phones: phonesReducer,
    phone: phoneReducer
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch