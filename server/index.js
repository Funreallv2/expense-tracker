import express from 'express'
import transaction from './routes/transaction.js'

const PORT = process.env.PORT;
const app = express()

app.use('/api/v1/transaction', transaction)


app.listen(PORT, ()=> {
  console.log(`Server is running... at port: ${PORT}`)
})
