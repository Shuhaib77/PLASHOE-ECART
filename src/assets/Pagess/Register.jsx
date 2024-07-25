import React from "react";
import { Input, Button } from "@material-tailwind/react";

function Register() {
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
          <form action="" className="w-96 bg-green-900 p-10 border-3 rounded-xl ">
            <h1 className="text-4xl text-center text-white mb-6">REGISTER</h1>
            {/* <div>
            <Input label="name" type="text"></Input>
          </div> */}
            <div className="mt-6">
              <Input label="email" type="mail" className="bg-white"></Input>
            </div>
            <div className="mt-6">
              <Input
                label="password "
                type="password"
                className="bg-white"
              ></Input>
            </div>
            <div className="mt-6">
              <Input
                label="password "
                type="Confirmpassword"
                className="bg-white"
              ></Input>
            </div>
            <div className="mt-6">
              <Button type="submit" className="text-black bg-white">
                
                submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
