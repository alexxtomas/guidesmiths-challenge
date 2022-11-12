const baseURL = 'http://localhost:3000'

const getAll = async (): Promise<Phone[]> =>
  await fetch(`${baseURL}/phones`)
    .then(async (res) => await res.json())
    .then((data: Phone[]) => data)
    .catch((e) => e)

const getById = async (id: number): Promise<Phone> =>
  await fetch(`${baseURL}/phones/${id}`)
    .then(async (res) => await res.json())
    .then((data: Phone) => data)
    .catch((e) => e)

export default { getAll, getById }
