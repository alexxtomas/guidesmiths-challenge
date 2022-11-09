import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../app/store";
import { initialize } from "../features/phones/phonesSlice";
import phonesService from "../services/phonesService";

export const usePhones = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const phonesState = useSelector((state: RootState) => state.phones)
  const dispatch = useDispatch()
  useEffect(() => {
    phonesService.getAll()
      .then(data => {
        dispatch(initialize(data))
        setLoading(false)
      })
      .catch(e => setError(true))
  }, [])

  return { phonesState, loading, error }
}