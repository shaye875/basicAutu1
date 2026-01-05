import express from 'express'
import { user } from './login/router.js'
import { verygy } from './checkIfLogin/router.js'
import { sort } from './decodeMessage/roter.js'
import { JWT, verifyToken } from './loginJWT/app.js'

const app = express()

app.use(express.json())

app.use("/signup",user)

app.use("/verify",verygy)

app.use("/decode-message",sort)

app.use("/login",verifyToken,JWT)

app.listen(3000,()=>{
    console.log("server run")
})