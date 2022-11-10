import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import DEFAULT from '../../utils/DEFAULT';

interface GetAction {
  phones: Phone[]
  id: number
}

interface SetAction {
  phone: Phone
}
const initialState: Phone = DEFAULT
export const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: {
    get: (state, action: PayloadAction<GetAction>) => {
      const { phones } = action.payload
      const { id } = action.payload
      const phone = phones.find(phone => phone.id === id)
      if (!phone) return initialState
      return phone
    },
    set: (state, action: PayloadAction<SetAction>) => action.payload.phone,
    reset: (state) => initialState
  }
})


export const { get, set, reset } = phoneSlice.actions

export default phoneSlice.reducer