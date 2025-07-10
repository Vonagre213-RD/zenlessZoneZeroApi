import express from 'express'
import * as rt from './Functions/routes.js'

const app = express()
rt.Router(app)

app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    }
    else {

        console.log('servidor corriendo')
    }
})
