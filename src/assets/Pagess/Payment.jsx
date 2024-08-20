import React from "react";
import { Input, Textarea, Button } from "@material-tailwind/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "sonner";
function Payment() {
  const location = useLocation();
  const id = localStorage.getItem("id");
  const { grandtotal } = location.state;
  const { cartnew } = location.state;
  const navigate=useNavigate()
  // const {cartnew} =location.state;
  console.log(id);
  // console.log(cartnew,"jjjj");

  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      address: "",
      phone: "",
      payment: "",
      total: grandtotal,
      pyprdct: cartnew,
    },
    onSubmit: async (values) => {
      const response = await axios.get(`http://localhost:4000/user/${id}`);
      const detail = response.data.detorder;
      const upd = [...detail, values];
      if (upd) {
        await axios.patch(`http://localhost:4000/user/${id}`, {
          detorder: upd,
        });
        toast.success("payment successfull");
        navigate("/orderss")
        
      } else {
        toast.warning("not valid payment");
      }
    },
  });
  return (
    <div className="">
      <h1 className="text-center mt-10 ">Payment</h1>
      <div className="flex items-center justify-center h-[90vh] ">
        <div className=" h-[60vh] w-[45vh]   ">
          <div className="w-[45vh] h-[10vh] bg-blue-900 pt-5 mb-2 flex justify-around ">
            <h1 className="text-white text-xl text-center ">TOTAL PRICE: </h1>
            <h1 className="text-white text-3xl text-center ">${grandtotal}</h1>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <Input
              label="name"
              className="mt border-3  "
              value={values.name}
              name="name"
              onChange={handleChange}
              required
            ></Input>
            <Textarea
              label="address"
              value={values.address}
              name="address"
              onChange={handleChange}
              required
              className="mt-2"
            ></Textarea>
            <Input
              label="phone"
              type="text"
              onChange={handleChange}
              name="phone"
              required
            ></Input>
            <div className="flex justify-evenly mt-4 mb-4">
              <div>
                <label className="font-normal text-blue-900  ">CARD</label>
                <input
                  type="radio"
                  name="payment"
                  value="CARD"
                  className="ml-2"
                  checked={values.payment === "CARD"}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="font-normal text-blue-900  ">UPID</label>
                <input
                  type="radio"
                  name="payment"
                  value="UPID"
                  className="ml-2"
                  checked={values.payment === "UPID"}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label
                  className="font-normal  text-blue-900 "
                  checked={values.payment === "COD"}
                  value="COD"
                  onChange={handleChange}
                >
                  COD
                </label>
                <input type="radio" name="payment" className="ml-2" required />
              </div>
            </div>
            <div className="mb-4">
              <h1>{values.total}</h1>
            </div>

            <div className="text-center ">
              <Button className="bg-blue-600 w-[45vh]" type="submit">
                PROCEED TO PAY
              </Button>
            </div>
          </form>
          <div>
            <h1>{values.address}</h1>
            <h1>{values.name}</h1>
            <h1>{values.phone}</h1>
            <h1>{values.payment}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
