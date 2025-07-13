import express from 'express'
import cors from 'cors'
import * as rt from './Functions/routes.js'

const app = express()
app.use(cors())
rt.Router(app)

app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    }
    else {

        console.log('servidor corriendo')
    }
})
