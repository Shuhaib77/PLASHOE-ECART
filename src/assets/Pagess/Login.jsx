import React, { useContext, useEffect, useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { json, Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { logionschema } from "../Components/validation/Loginvalidation";
import axios from "axios";
import { toast } from "sonner";
import { contexts } from "../../App";

function Login() {
  const navigtate = useNavigate();
  
  const{user,setuser,udatass, setudatass}=useContext(contexts)
  // useEffect(() => {
  //   const fetchmailandpass = async () => {
  //     const response = await axios.get("http://localhost:4000/user");
  //     try {
  //       // console.log(response.data);
  //       setudatass(response.data);
  //       console.log(response.data);
        
  //     } catch (error) {
  //       toast.warning("fetching failed");
  //     }
  //     console.log();
  //   };
  //   fetchmailandpass();
  // }, []);
  // // console.log(datas);
  // console.log(udatass);

  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: logionschema,
    onSubmit: async (values) => {
      const response = await axios.get("http://localhost:4000/user");
      // idss=localStorage.getItem("id")
      const user = response.data.find((user) => user.email === values.email && user.password === values.password);

      if (user&& user.admin==true) {
        // setuser(user);
        localStorage.setItem("id",user.id)
        // localStorage.setItem("admin",user.admin)
        navigtate("/admin/allusers"); 
        console.log('gttt');
        
        // if(navigtate('/')){
          
        // }
        console.log(user);
        // localStorage.setItem('user',JSON.stringify(user)) 
        toast.success(" admin Login successful");
        
       
      } else if(user.block==false){
        toast.warning("User is blocked");

      }
      else if( user ) {
        setuser(user);
        localStorage.setItem("id",user.id)
        // localStorage.setItem("admin",user.admin)
        navigtate("/"); 
        // if(navigtate('/')){
          
        // }
        console.log(user);
        // localStorage.setItem('user',JSON.stringify(user)) 
        toast.success("Login successful");
        
      }
      else{
        toast.error("Invalid email or password");
      }
    },
  });

  return (
    <div className=" ">
      <div className=" flex justify-center items-center h-[100vh] bg-white    ">
        <div className="mr-10 border ">
          <img
            src="https://i.ebayimg.com/images/g/TDoAAOSwvZxgYocm/s-l1600.jpg"
            alt=""
            className="w-[50vh] h-[60vh]"
          />
        </div>
        <form
          action=""
          className="w-96 bg-blue-gray-200 p-10 border-3 rounded-xl"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl text-center mb-6">LOGIN</h1>
          {/* <div>
            <Input label="name" type="text"></Input>
          </div> */}
          <div className="mt-6">
            <Input
              label="email"
              type="mail"
              className="bg-white"
              onChange={handleChange}
              value={values.email}
              name="email"
            ></Input>

            {errors.email && (
              <small className="text-red-900">{errors.email}</small>
            )}
          </div>
          <div className="mt-6">
            <Input
              label="password "
              type="password"
              className="bg-white"
              onChange={handleChange}
              value={values.password}
              name="password"
            ></Input>
            {errors.email && (
              <small className="text-red-900">{errors.password}</small>
            )}
          </div>
          <div className="mt-6">
            <Button type="submit" className="">
              {" "}
              submit{" "}
            </Button>
          </div>
          <div className="mt-5 flex justify-between">
            <Link
              to={"/register"}
              className="border-b-2 text-blue-800 border-blue-900"
            >
              Register
            </Link>
            <Link to={"/"} className="border-b-2 text-blue-800 border-blue-900">
              back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
