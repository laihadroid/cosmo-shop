"use server"

import { signIn } from "@/auth"
import { getYupErrors } from "@/utils/form-validation"
import { AuthError } from "next-auth"
import * as Yup from "yup"

const formSchema=Yup.object({
    username:Yup.string().required("Required"),
    password:Yup.string().required("Required")

})

export const signInWithCredentials=async (prevState,formData)=>{
    const fields={
        username:formData.get("username"),
        password:formData.get("password")
    }
    try {
        formSchema.validateSync(fields,{abortEarly:false})
        await signIn("credentials",fields)
    } catch (error) {
        if (error instanceof AuthError){
            return{
                message:"Authentication was failed"
            }
        }else if(error instanceof Yup.ValidationError){
            return getYupErrors(err.inner)
        }
        else{
            throw error
        }
        
    }
    
}

export const signInWithSocial=async(formData)=>{

    const provider =formData.get("provider")
    //console.log(provider)

    try {
        await signIn(provider) //signIn, auth.js teki signIn
    } catch (error) {
        if(error instanceof AuthError){
            return{
                message:"Authentication was failed"
            }
        }
        else{
            throw error
        }
        
    }
}

