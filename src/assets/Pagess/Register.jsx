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
  // const [emas, seteil] = useState();

  useEffect(() => {
    const fetchmail = async () => {
      const response = await axios.get("http://localhost:4000/user");
      try {
        setemail(response.data);
        console.log(emails);
      } catch (error) {
        toast.error("not fetched");
      }
    };
    fetchmail();
  }, []);

  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpass: "",
     
    },
    validationSchema: registerSchema,

    onSubmit: async (values) => {
     
      const finduser = emails.find((user) => user.email === values.email);

      if (finduser) {
        toast.warning("User already exists");
      } else {
        const newUser= {...values,cart:[],orders:[]};
        await axios.post("http://localhost:4000/user", newUser);

        toast.success("User registration successful");
        navigate("/login");
      }
    },
  });

  return (
    <div>
      <div>
        <div className="flex justify-center h-[100vh] items-center">
          <div className="mr-5">
            <img
              src="https://images.pexels.com/photos/15435913/pexels-photo-15435913/free-photo-of-person-wearing-white-sneakers.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="h-[60vh] "
            />
          </div>
          <form
            action=""
            className="w-96 bg-green-900 p-10 border-3 rounded-xl "
            onSubmit={handleSubmit}
          >
            <h1 className="text-4xl text-center text-white mb-6">REGISTER</h1>
            {/* <div>
            <Input label="name" type="text"></Input>
          </div> */}
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
              {/* <Link  to={'/login'} className="border-b-2 text-blue-200 border-blue-900">Lo</Link> */}
              <Link
                className="border-b-2 text-blue-200 border-blue-400"
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
