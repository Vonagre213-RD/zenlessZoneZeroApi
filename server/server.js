import express from 'express'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import { dirname } from 'node:path'
import * as rt from './Functions/routes.js'


rt.Router(app)

app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    }
    else {

        console.log('servidor corriendo')
    }
})
