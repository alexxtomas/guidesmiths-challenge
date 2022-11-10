const baseURL = 'http://localhost:3000'
const getAll = (): Promise<Phone[]> =>
  fetch(`${baseURL}/phones`)
    .then(res => res.json())
    .then((data: Phone[]) => data)
    .catch(e => e)


const getById = (id: number): Promise<Phone> =>
  fetch(`${baseURL}/phones/${id}`)
    .then(res => res.json())
    .then((data: Phone) => data)
    .catch(e => e)


export default { getAll, getById }