import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'wouter'
import { RootState } from '../app/store'
import { get, reset, set } from '../features/phone//phoneSlice'
import phonesService from '../services/phonesService'
import DEFAULT from '../utils/DEFAULT'
import { useInitPhones } from './useInitPhones'

interface PhonesHook {
  state: Phone[] | Phone
  error: Boolean
  loading: Boolean
}
export const usePhones = (id?: number): PhonesHook => {
  const { error, loading, phonesState } = useInitPhones()
  const phoneState = useSelector((state: RootState) => state.phone)
  const [, navigate] = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof id !== 'undefined' && isNaN(id))
      navigate('/notfound', { replace: true })
    if (typeof id === 'number') {
      dispatch(get({ phones: phonesState, id }))
    }
  }, [id])

  if (typeof id === 'undefined') return { error, loading, state: phonesState }

  if (phoneState.id === DEFAULT.id) {
    phonesService
      .getById(id)
      .then((data) => {
        if (data.err) dispatch(reset())
        else dispatch(set({ phone: data }))
      })
      .catch((e) => e)
  }

  return { error, loading, state: phoneState }
}
