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

  const { user, setuser, udatass, setudatass } = useContext(contexts);
  const { values, errors, handleChange, handleBlur, handleSubmit,render,setRendder } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: logionschema,
    onSubmit: async (values) => {
      const response = await axios.get("http://localhost:4000/user");
      
      
      const user = response.data.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );
      if (!user) {
        toast.warning("invalid pass or mail");
      }
      //  else if (user && user.admin == true) {
      //   localStorage.setItem("ids", user.id);
      //   navigtate("/admin/dashboard");
      //   toast.success(" admin Login successful");
      // } 
      else if (user.block == false) {
        toast.warning("User is blocked");
      } else {
        setuser(user);
        if(user.admin == true){
          localStorage.setItem("admin",true)
        }
        localStorage.setItem("id", user.id);
        navigtate("/");
        window.location.reload()
        toast.success("Login successful");
       
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
          className="w-96 bg-[#1b7c7f] p-10 border-3 rounded-xl"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl text-center mb-6">LOGIN</h1>

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
            <Button type="submit" className="bg-white text-black">
              {" "}
              submit{" "}
            </Button>
          </div>
          <div className="mt-5 flex justify-between">
            <Link
              to={"/register"}
              className="border-b-2 text-white border-blue-900"
            >
              Register
            </Link>
            <Link to={"/"} className="border-b-2 text-white border-blue-900">
              back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
