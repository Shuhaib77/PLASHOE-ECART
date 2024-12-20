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
    const res = await axios.get(`https://plashoeserver.onrender.com/api/cart/${idss}`, {
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
    await axios.delete(`https://plashoeserver.onrender.com/api/cart/delete/${id}/${idss}`);
    fetchcart();
  };

  //cartincrement
  const increment = async (id) => {
    await axios.post(`https://plashoeserver.onrender.com/api/cart/incr/${id}/${idss}`);
    fetchcart();
  };

  //cartdecrement
  const decrement = async (id) => {
    await axios.post(`https://plashoeserver.onrender.com/api/cart/decr/${id}/${idss}`, {
      cart: decrement,
    });
    fetchcart();
  };

  //addto all price details
  const alladd = async () => {
    const res = await axios.get(`https://plashoeserver.onrender.com/api/cart/${idss}`, {
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
        `https://plashoeserver.onrender.com/api/pay/${idss}`
      );

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
        <div className="text-center mt-5">not item found</div>

        <Footer />
      </div>
    );
  }

  return (
    <>
      <div className="bg-gray-200 lg:p-5">
        <Navbar />
        <div className=" w-full  bg-white lg:mt-5    h-full  ">
          <h1 className="text-center"></h1>

          {!price && (
            <div className=" w-full">
              <h1 className="mt-8 lg:ml-3  text-3xl text-center text-blue-700 font-semibold border-b-2 p-5 border-black">
                CART
              </h1>

              <div className="flex flex-wrap lg:gap-4    mt-5  gap-y-5  justify-center  shadow-md  w-full    ">
                {cartitem.map((data, i) => {
                  return (
                    <div className="">
                      <Card className="lg:w-[75vh] lg:h-[40vh] sm:w-[25vh] sm:h-[100vh]  ">
                        <CardBody className="flex lg:flex-row justify-around items-center sm:flex flex-col sm:items-center sm:justify-center  ">
                          <CardHeader
                            shadow={false}
                            floated={false}
                            className="m-0    rounded-r-none "
                          >
                            <img
                              src={data.productid.image}
                              alt="card-image"
                              className="w-[250px] lg:w-[400px] object-cover"
                            />
                          </CardHeader>
                          <div className="lg:text-left text-center">
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
                            <div className=" lg:ml-2   ">
                              <div className="mt-3  lg:ml-3 cursor-pointer text-black hover:text-2xl hover:text-red-900">
                                <i
                                  class="fa-solid fa-trash fa-lg"
                                  onClick={() => {
                                    cartdelete(data?.productid._id);
                                  }}
                                ></i>
                              </div>
                              <div className="flex">
                                <Button
                                  className="text-black bg-white"
                                  onClick={() => decrement(data?.productid._id)}
                                >
                                  -
                                </Button>
                                <h1 className="mt-3 lg:ml-3 lg:mr-3">
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
              <div className="text-center p-3  mt-5">
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
          )}

          <div>
            {price && (
              <div className="w-full h-full ">
                <h1 className="text-center md:ml-10 p-3 md:mr-9 mt-8 text-3xl text-blue-700  font-semibold border-b-2  border-black ">
                  PRICE DETAILS
                </h1>
                <div className="flex  flex-col justify-center items-center h-full  w-full">
                  {cartnew.map((item, index) => {
                    const total = 0;
                    return (
                      <div
                        key={index}
                        className="w-full sm:w-[72vh]  h-full  rounded-md shadow-lg p-10 lg:flex-row justify-around items-center  sm:flex flex-col sm:items-center sm:justify-center mt-16  "
                      >
                        <div className="">
                          <img src={item.productid.image} alt="" className="lg:w-[200px] w-[300px]  " />
                        </div>
                        <div className=" h-[15vh] lg:ml-2 text-center lg:text-left ">
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

                  <Button className="bg-green-800 mt-5" onClick={fn}>
                    PAY
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Cart;
