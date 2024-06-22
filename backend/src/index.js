import express from "express"

const app = express()

app.get('/', (req, res) => {
  res.send("<p>server is ready plz hamari mai shyama joo</p>")
})

app.get('/ram', (req, res) => {
  res.send("Ram is a very like to hanumanji & seetamaa")
})

app.get('/krishna', (req, res) => {
  res.send("krishna is very very like to radhaji")
})

const port = process.env.PORT || 3100

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
})







