import React from "react";
import { Input,Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";


function Login() {
    
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
        <form action="" className="w-96 bg-blue-gray-200 p-10 border-3 rounded-xl">
            <h1 className="text-4xl text-center mb-6">LOGIN</h1>
          {/* <div>
            <Input label="name" type="text"></Input>
          </div> */}
          <div className="mt-6">
            <Input label="email" type="mail" className="bg-white" ></Input>
          </div>
          <div className="mt-6">
            <Input label="password " type="password" className="bg-white" ></Input>
          </div>
          <div className="mt-6">
           <Button type="submit" className=""> submit </Button>
          </div>
         <div className="mt-5 flex justify-between">
         <Link  to={'/register'} className="border-b-2 text-red-800 border-blue-900">Register</Link>
         <Link   className="border-b-2 text-blue-800 border-white">back</Link>
         

         </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
