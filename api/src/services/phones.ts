import phonesData from '../../db/phones.json'
import { Phone } from '../types'


const getAll = (): Phone[] => phonesData

const getById = (id: number): Phone | undefined => {
  const phone = phonesData.find(phone => phone.id === id)
  return phone
}


export default { getAll, getById }