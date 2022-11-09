import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';


const initialState: Phone[] = []

export const phoneSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {
    initialize: (state, action: PayloadAction<Phone[]>) => action.payload
  }
})


export const { initialize } = phoneSlice.actions

export default phoneSlice.reducer