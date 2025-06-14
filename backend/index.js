const  express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const authRouter = require('./routes/authRouter')
const passRouter = require('./routes/passRouter')


require('dotenv').config()
require('./models/db')

const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use('/auth', authRouter)
app.use('/passenger', passRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))