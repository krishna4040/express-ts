import express from 'express'

const app = express()

app.use(express.json())

app.listen(process.env.PORT, () => console.log(`app running at port ${process.env.PORT}`))