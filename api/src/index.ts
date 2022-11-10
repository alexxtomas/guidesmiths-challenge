import cors from 'cors'
import express from 'express'
import phones from './services/phones'

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 3000

app.get('/phones', (_req, res) => {
  res.json(phones.getAll())
})

app.get('/phones/:id', (req, res) => {
  const { id } = req.params

  const phone = phones.getById(+id)

  if (!phone) res.status(404).json({ err: 'The id does not belong to any phone ' })

  res.json(phone)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})









