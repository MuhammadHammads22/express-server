// console.log("hello world from server")
import express from 'express'
const app = express()
const port = process.env.port || 3000
app.get('/', (req, res) => {
    console.log("some one requesting on server",new Date)
  res.send('Hello from hammad server to ip:'+req.ip)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})