import React, { useContext, useEffect, useReducer, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { contexts } from "../../App";
// import { useParams } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cart() {
  
  const [cartitem, setcartitem] = useState([]);
  const [price, setprice] = useState(false);
  const [cartnew, setcartnew] = useState([]);
  const idss = localStorage.getItem("id");
  const utokens = localStorage.getItem("utoken");

  //cart fetch
  const fetchcart = async () => {
    const res = await axios.get(`http://localhost:5000/api/cart/${idss}`, {
      headers: {
        Authorization: utokens,
      },
    });

    setcartitem(res.data.data);
  };
  useEffect(() => {
    fetchcart();
  }, []);

  //deletecart
  const cartdelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/cart/delete/${id}/${idss}`);
    fetchcart();
  };

  //cartincrement
  const increment = async (id) => {
    await axios.post(`http://localhost:5000/api/cart/incr/${id}/${idss}`);
    fetchcart();
  };

  //cartdecrement
  const decrement = async (id) => {
    await axios.post(`http://localhost:5000/api/cart/decr/${id}/${idss}`, {
      cart: decrement,
    });
    fetchcart();
  };

  //addto all price details
  const alladd = async () => {
    const res = await axios.get(`http://localhost:5000/api/cart/${idss}`, {
      headers: {
        Authorization: utokens,
      },
    });
    setcartnew(res.data.data);
  };
  useEffect(() => {
    alladd();
  }, []);

  //grand total
  const grandtotal = cartnew.reduce(
    (total, item) => total + item.quantity * item.productid.price,
    0
  );

  //payment
  const fn = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/pay/${idss}`
      );
      toast.success("payment successfull");
      const approvalUrl = response.data.approval_url;
      if (approvalUrl) {
        window.location.href = approvalUrl;
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (cartitem.length === 0) {
    return (
      <div>
        <Navbar />
        {toast.warning("no item found")}
        <div className="text-center mt-5">not item found</div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <div>
        <Navbar />
        <div className=" flex justify-center ">
          <h1 className="text-center"></h1>
          <div>
            <h1 className="mt-8 text-3xl text-center text-blue-700 font-semibold border-b-2 border-black">
              CART
            </h1>

            <div className="flex  flex-wrap  gap-x-5 mt-5 gap-y-5  justify-center  items-center  w-full ">
              {cartitem.map((data, i) => {
                return (
                  <div className="">
                    <Card className="w-[100vh] h-full ">
                      <CardBody className="flex">
                        <CardHeader
                          shadow={false}
                          floated={false}
                          className="m-0 w-[400px]  rounded-r-none object-cover"
                        >
                          <img src={data.productid.image} alt="card-image" />
                        </CardHeader>
                        <div className="text-pretty">
                          <Typography
                            variant="h6"
                            color="gray"
                            className="mb-4 uppercase"
                          >
                            {data.productid.title}
                          </Typography>
                          <Typography
                            variant="h4"
                            color="blue-gray"
                            className="mb-2"
                          >
                            {data.productid.description}
                          </Typography>
                          <Typography color="gray" className=" font-normal">
                            {data.productid.price}
                          </Typography>
                          <Typography>{data?.productid.catogery}</Typography>
                          <Typography className="text-red-900 font-medium">
                            total:{data.productid.price * data.quantity}
                          </Typography>
                          <div className="flex ml-2 justify-between  ">
                            <div className="mt-3  ml-3 cursor-pointer text-black hover:text-2xl hover:text-red-900">
                              <i
                                class="fa-solid fa-trash fa-lg"
                                onClick={() => {
                                  cartdelete(data?.productid._id);
                                }}
                              ></i>
                            </div>
                            <div className="flex ">
                              <Button
                                className="text-black bg-white"
                                onClick={() => decrement(data?.productid._id)}
                              >
                                -
                              </Button>
                              <h1 className="mt-3 ml-3 mr-3">
                                {data?.quantity}{" "}
                              </h1>
                              <Button
                                className="text-black bg-white"
                                onClick={() => increment(data?.productid._id)}
                              >
                                +
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                );
              })}
            </div>
            <div className="text-center  mt-5">
              <Button
                onClick={() => {
                  alladd();
                  setprice(true);
                }}
                className="bg-blue-900"
              >
                placeorder
              </Button>
            </div>
          </div>
          {price === true && (
            <div className="w-full ">
              <h1 className="text-center md:ml-10 md:mr-9 mt-8 text-3xl text-blue-700  font-semibold border-b-2  border-black ">
                PRICE DETAILS
              </h1>
              <div className="flex  flex-col justify-center items-center  w-full">
                {cartnew.map((item, index) => {
                  const total = 0;
                  return (
                    <div
                      key={index}
                      className=" w-[62vh]  h-[20vh] border-2 flex justify-center items-center mt-16  "
                    >
                      <div className="w-[100%] h-[15vh]">
                        <img src={item.productid.image} alt="" />
                      </div>
                      <div className="w-[50vh] h-[15vh] ml-2 ">
                        <h1>{item.productid.title}</h1>
                        <h1>{item.quantity}</h1>
                        <h1 className="text-red-800">Price:{item.price}</h1>
                        <h1 className="text-red-800">
                          {" "}
                          <h1 className="text-red-900">
                            Total: {item.productid.price * item.quantity}
                          </h1>
                        </h1>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="text-center mt-10">
                <h1 className="text-blue-700">
                  Grand total:{" "}
                  <span className="text-red-900">{grandtotal}</span>{" "}
                </h1>

                <Button
                  className="bg-green-800 mt-5"
                  onClick={
                    fn
                    // navigate("https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-7PY957092E321040X", {
                    //   state: { grandtotal, cartnew },
                    // });
                  }
                >
                  PAY
                </Button>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Cart;
