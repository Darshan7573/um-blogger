import express from 'express'
import cors from 'cors'

const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello from server')
})

app.listen(port, () => {
    console.log(`Server Connected  to ${port}`)
})