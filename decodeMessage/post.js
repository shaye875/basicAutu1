import { isInformation,isTypes } from "../utils/validation.js"
import { selectByUsername } from "../checkIfLogin/queries.js"
import { sum } from "../utils/sum.js"

async function checkValid(user){
   const keys = ["username","message"]
   const ifInformation = isInformation(keys,user)
   if(ifInformation === false){
    return {"false":"missing information"}
   }
   const objTypes = {"username":"","message":[]}
   const ifTypes = isTypes(objTypes,user)
   if(ifTypes === false){
    return {"false":"one or more of types is wrong"}
   }
}

export async function checkVerifyFishing(user){
    const ifValid = await checkValid(user)
    if(typeof(ifValid) === 'object'){
        return ifValid
    }
    const userByUsername = await selectByUsername(user.username)
    if(!userByUsername){
        return {false:"username not exist"}
    }
    for(let i = 0;i<user.message.length-1;i++){
        if(user.message[i]>user.message[i+1]){
            return {"false":"not sort"}
    }
}
    const sumArr = sum(user.message)
    return {result:sumArr} 
}