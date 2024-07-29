 import * as Yup from 'yup'

 export const registerSchema=Yup.object().shape({
    email:Yup.string().email("please enter valid email").required("email is requird"),
    password:Yup.string().min(5).required("password requird"),
    confirmpass:Yup.string().oneOf([Yup.ref("password")], "password not matched").required("confirm password requird")

 })