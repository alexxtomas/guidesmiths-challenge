import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'wouter';
import { RootState } from '../app/store';
import { get, reset, set } from '../features/phone//phoneSlice';
import phonesService from '../services/phonesService';
import DEFAULT from '../utils/DEFAULT';
import { useInitPhones } from "./useInitPhones";


interface PhonesHook {
  phonesState?: Phone[]
  phoneState?: Phone
  error: Boolean
  loading: Boolean
}
export const usePhones = (id?: number): PhonesHook => {
  const { error, loading, phonesState } = useInitPhones()
  const phoneState = useSelector((state: RootState) => state.phone)
  const [location, navigate] = useLocation()
  const dispatch = useDispatch()



  useEffect(() => {
    if (typeof id !== 'undefined' && isNaN(id)) navigate('/notfound', { replace: true })
    if (id) {
      dispatch(get({ phones: phonesState, id }))
    }
  }, [id])

  if (!id) return { error, loading, phonesState }

  if (phoneState.id === DEFAULT.id) {
    phonesService.getById(id)
      .then((data) => {
        if (data?.err) dispatch(reset())
        else dispatch(set({ phone: data }))
      }
      )
  }

  return { error, loading, phoneState }

}