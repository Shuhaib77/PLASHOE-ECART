import React, { useEffect, useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { useFormik, yupToFormErrors } from "formik";
import { registerSchema } from "../Components/validation/registerval";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";

function Register() {
  // const [udata, setudata] = useState([]);
  const navigate = useNavigate();
  const [emails, setemail] = useState([]);

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    render,
    setRendder,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpass: "",
    },
    validationSchema: registerSchema,

    onSubmit: async (values) => {
      try {
        console.log(values, "et");
        const response = await axios.post(
          "https://plashoeserver.onrender.com/api/register",
          { email: values.email, password: values.password }
        );

        toast.success("User registration successful");
        navigate("/login");

        // console.log(response.data.message,'imdfghsg');
        // alert(response?.data?.message)
      } catch (error) {
        toast.warning("User already exists");
      }
    },
  });

  return (
    <div>
      <div className="bg-register-bg bg-no-repeat bg-cover w-100% h-100%">
        <div className="flex justify-center  md:mr-5  h-[100vh] items-center">
          <form
            action=""
            className=" mr-5 ml-5 w-full md:w-96 bg-[rgba(29,67,65,0.45)] p-10 md:p-8 border-3 rounded-xl "
            onSubmit={handleSubmit}
          >
            <h1 className="text-4xl text-center text-white mb-6">REGISTER</h1>
            <div className="mt-6">
              <Input
                label="email"
                type="mail"
                name="email"
                className="bg-white"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              ></Input>
              {errors.email && (
                <small className="text-blue-300">{errors.email}</small>
              )}
            </div>
            <div className="mt-6">
              <Input
                label="password "
                type="password"
                className="bg-white"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
              ></Input>
              {errors.password && (
                <small className="text-blue-300">{errors.password}</small>
              )}
            </div>
            <div className="mt-6">
              <Input
                label="password "
                type="Confirmpassword"
                className="bg-white"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmpass}
                name="confirmpass"
              ></Input>
              {errors.confirmpass && (
                <small className="text-blue-300">{errors.confirmpass} </small>
              )}
            </div>
            <div className="mt-6">
              <Button type="submit" className="text-black bg-white">
                submit
              </Button>
            </div>
            <div className="mt-5">
              <Link
                className="border-b-2 text-white border-red-900"
                to={"/login"}
              >
                back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
