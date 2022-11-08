import cors from 'cors'
import express from 'express'

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 3000

app.get('/ping', (req, res) => {
    res.json('pong')
})


app.listen(PORT, () => {
    console.log(`Server is runningo on port ${PORT}`)
})