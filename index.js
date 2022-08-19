const express = require('express')
const cors = require('cors')
const routerApi = require('./routes')

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/errorHandler')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
const whitelist = ['http://localhost:8080', 'https://myapp.co']
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin){
      callback(null,true)
    }else{
      callback(new Error('no allowed'), false)
    }
  }
}
app.use(cors(options))

app.get('/', (req, res) => {
  res.send('Hello World Server')
});

app.get('/newRoute', (req, res) => {
  res.send('Hello i\'m a new route')
});

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Running on port: ${port}`)
});
