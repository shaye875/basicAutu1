import express from 'express'
import { user } from './login/router.js'
import { verygy } from './checkIfLogin/router.js'
import { sort } from './decodeMessage/roter.js'
import { router, verifyToken } from './loginJWT/app.js'
import cookeParser from 'cookie-parser'

const app = express()

app.use(express.json())

app.use(cookeParser())

app.use("/signup",user)

app.use("/verify",verygy)

app.use("/decode-message",sort)

app.use("/login",router)

app.listen(3000,()=>{
    console.log("server run")
})