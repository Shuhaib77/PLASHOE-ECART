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
import filled from "@material-tailwind/react/theme/components/timeline/timelineIconColors/filled";
import { data } from "autoprefixer";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state.map((item) =>
        item.id == action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case "decrement":
      return state.map((item) =>
        item.id == action.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    case "deletecart":
      return state.filter((item, j) => item.id != action.id);

    case "clearcart":
      return [];

    default:
      return state;
  }
};
function Cart() {
  const { setcartitems } = useContext(contexts);
  const [cartitem, setcartitem] = useState([]);
  const [dcart, setdeletedcart] = useState([]);
  const [cartnew, setcartnew] = useState([]);
  const [plaorder, setplaorder] = useState([]);
  const navigate = useNavigate();
  const idss = localStorage.getItem("id");

  //fetchorders
  const fetchorders = async () => {
    const response = await axios.get(`http://localhost:4000/user/${idss}`);
    setcartnew(response.data.orders);
    // console.log(response.data);
  };
  useEffect(() => {
    fetchorders();
  }, []);
  // console.log(cartnew);

  //fetchcart
  const fetchcart = async () => {
    const response = await axios.get(`http://localhost:4000/user/${idss}`);
    setcartitem(response.data.cart);
    // console.log(response.data);
  };
  useEffect(() => {
    fetchcart();
  }, []);
  // console.log(cartitem);

  //deletecart

  const cartdelete = async (id) => {
    const upcart = cartitem.filter((item) => item.id != id);
    await axios.patch(`http://localhost:4000/user/${idss}`, { cart: upcart });
    // setcartitem(upcart)

    fetchcart();
  };

  //cartincrement

  const increment = async (id) => {
    const incrmcart = cartitem.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    await axios.patch(`http://localhost:4000/user/${idss}`, {
      cart: incrmcart,
    });

    fetchcart();
  };
  //cartdecrement
  const decrement = async (id) => {
    const decrement = cartitem.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    await axios.patch(`http://localhost:4000/user/${idss}`, {
      cart: decrement,
    });

    fetchcart();
  };

  //addto all price details
  const alladd = async (data) => {
    const response = await axios.get(`http://localhost:4000/user/${idss}`);
    const topay = response.data.orders;
    const upd = data;
    const res = await axios.patch(`http://localhost:4000/user/${idss}`, {
      orders: upd,
    });
    setcartnew(res.data.orders);
    fetchorders();
  };
  //only one aad to price details
  const fnsummer = async (data) => {
    const response = await axios.get(`http://localhost:4000/user/${idss}`);
    try {
      const orders = response.data.orders;
      const userorder = cartitem.find((item) => item.id == data.id);
      if (!orders.find((order) => order?.id == userorder.id)) {
        const updatedoredrs = [...orders, userorder];
        const res = await axios.patch(`http://localhost:4000/user/${idss}`, {
          orders: updatedoredrs,
        });
        setcartnew(res.data.orders);
        fetchorders();
      } else {
        toast.warning("product alredy in orders");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //dleteinpricedetails
  const pricedelete = async (i) => {
    const upproductprice = cartnew.filter((item, j) => j != i);
    await axios.patch(`http://localhost:4000/user/${idss}`, {
      orders: upproductprice,
    });
    fetchorders();
  };
  //tofind grand total
  const grandtotal = cartnew.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  //delete cart when go to payment
  const fn = async () => {
    try {
      await axios.patch(`http://localhost:4000/user/${idss}`, { cart: [] });
      toast.success("cart cleard");
    } catch (error) {
      toast.warning("cart not cleard!!!!");
    }
    //for pricedetail clearing
    try {
      await axios.patch(`http://localhost:4000/user/${idss}`, { orders: [] });
      toast.success("pricecleard");
    } catch (error) {
      console.log(error);
      toast.warning(" not pricecleard");
    }
  };

  if (cartitem.length === 0) {
    return (
      <div>
        <Navbar />

        <div className="text-center mt-5">not data</div>
        <Footer/>
      </div>
    );
  }

  return (
    <>
      <div>
        <Navbar />
        <div className="flex justify-around ">
          <h1 className="text-center"></h1>
          <div>
            <h1 className="ml-10 mr-9 mt-8 text-3xl text-center text-blue-700 font-semibold border-b-2 border-black">
              CART
            </h1>

            <div className="flex  flex-wrap justify-center gap-8 items-center  w-[115vh] ">
              {cartitem.map((data, i) => {
                return (
                  <div className="  ">
                    <Card className="h-[63vh] w-[50vh] mt-20 gap-1  ">
                      <CardHeader color="" className=" ">
                        <img src={data?.image} alt="card-image" />
                      </CardHeader>
                      <CardBody>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-2"
                        >
                          {data?.brand}
                        </Typography>
                        <Typography>{data?.title}</Typography>
                        <Typography>{data?.price}</Typography>
                        <Typography>{data?.catogery}</Typography>
                        <Typography className="text-red-900 font-medium">
                          Total:{data.price * data.quantity}
                        </Typography>
                      </CardBody>
                      <CardFooter className="pt-0 flex justify-between mt-3">
                        <div>
                          <Button
                            onClick={() => {
                              navigate(`/showcomponent/${data?.id}`);
                            }}
                          >
                            {" "}
                            Read More{" "}
                          </Button>
                        </div>

                        <div className="flex justify-center">
                          <Button
                            className="text-black bg-white"
                            onClick={
                              () => decrement(data.id)
                         
                            }
                          >
                            -
                          </Button>
                          <h1 className="mt-3 ml-3 mr-3">{data?.quantity} </h1>
                          <Button
                            className="text-black bg-white"
                            onClick={
                              () => increment(data.id)
                            
                            }
                          >
                            +
                          </Button>
                          <div className="mt-3 ml-2 cursor-pointer text-black hover:text-2xl hover:text-red-900">
                            <i
                              class="fa-solid fa-trash fa-lg"
                              onClick={() => {
                                cartdelete(data.id);
                              }}
                            ></i>
                          </div>
                        </div>
                      </CardFooter>
                      <div className="text-end mr-5">
                        <Button
                          className="bg-green-700 w-[21vh]"
                          onClick={() => {
                            fnsummer(data);
                          }}
                        >
                          BUY
                        </Button>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-5">
              <Button
                onClick={() => {
                  alladd(cartitem);
                }}
              >
                placeorder
              </Button>
            </div>
          </div>
          <div className="w-[150vh] ">
            <h1 className="text-center ml-10 mr-9 mt-8 text-3xl text-black font-semibold border-b-2 border-blue-700 ">
              PRICE DETAILS
            </h1>
            <div className=" flex flex-col justify-center items-center w-[57vh]">
              {cartnew.map((item, index) => {
                const total = 0;
                return (
                  <div
                    key={index}
                    className=" w-[62vh]  h-[20vh] border-2 flex justify-center items-center mt-16  "
                  >
                    <div className="w-[35vh] h-[15vh]">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="w-[50vh] h-[15vh] ml-2 ">
                      <h1>{item.title}</h1>
                      <h1>{item.quantity}</h1>
                      <h1 className="text-red-800">Price:{item.price}</h1>
                      <h1 className="text-red-800">
                        {" "}
                        <h1 className="text-red-900">
                          Total: {item.price * item.quantity}
                        </h1>
                      </h1>
                      <div>
                        <i
                          class="fa-solid fa-xmark hover:text-red-900 cursor-pointer"
                          onClick={() => {
                            pricedelete(index);
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <h1 className="text-blue-700">
                Grand total: <span className="text-red-900">{grandtotal}</span>{" "}
              </h1>

              <Button
                className="bg-green-800 mt-5"
                onClick={() => {
                  fn(),
                    navigate("/payment", {
                      state: { grandtotal, cartnew },
                    });
                }}
              >
                PAY
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Cart;
