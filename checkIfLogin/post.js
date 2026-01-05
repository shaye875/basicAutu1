import { isInformation,isTypes } from "../utils/validation.js"
import { verifyPassword } from "../dcript/has.js"
import { selectByUsername } from "./queries.js"

async function checkValid(user){
   const keys = ["username","password"]
   const ifInformation = isInformation(keys,user)
   if(ifInformation === false){
    return {"false":"missing information"}
   }
   const objTypes = {"username":"","password":""}
   const ifTypes = isTypes(objTypes,user)
   if(ifTypes === false){
    return {"false":"one or more of types is wrong"}
   }
}

export async function checkVerifyUser(user){
    const ifValid = await checkValid(user)
    if(typeof(ifValid) === 'object'){
        return ifValid
    }
    const userByUsername = await selectByUsername(user.username)
    if(!userByUsername){
        return {false:"username not exist"}
    }
    const result = await verifyPassword(user.password,userByUsername.password)
    return {result,result}
}