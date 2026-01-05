import { isInformation,isTypes } from "../utils/validation.js"
import { insertUser } from "./queries.js"
import { hashPassword } from "../dcript/has.js"
                         
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

export async function checkWriteUser(user){
    const ifValid = await checkValid(user)
    if(typeof(ifValid) === 'object'){
        return ifValid
    }
    const password = await hashPassword(user.password)
    await insertUser({
        username:user.username,
        password:password
    })
    return {"true":"the user done"}
}