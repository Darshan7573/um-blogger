import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'
import 'dotenv/config'
import userRouter from './routes/userRoute.js'
import postRouter from './routes/postRoute.js'

const app = express()
const port = 5000
connectDB()

app.use(express.json())
app.use(cors())

app.use('/api/user', userRouter)
app.use('/api/post', postRouter)


app.get('/', (req, res) => {
    res.send('Hello from server')
})

app.listen(port, () => {
    console.log(`Server Connected  to ${port}`)
})

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MzZlM2FkMzM4MWUzOWE0MWZhNDFmZSIsImlhdCI6MTczMTY1MTExOX0.h6zFwx3B5BJZtXq793zk8s1re9nnsuxPT4wCn9rUznQ