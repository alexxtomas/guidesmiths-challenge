
const getAll = (): Promise<Phone[]> =>
  fetch('http://localhost:3000/phones')
    .then(res => res.json())
    .then((data: Phone[]) => data)
    .catch(e => e)




export default { getAll }