import * as Yup from "yup"

 export const logionschema=Yup.object().shape({
    email:Yup.string().email("enter valid mail").required("mail is required"),
    password:Yup.string().min(5,"5 character requird").required("password requird")

})
