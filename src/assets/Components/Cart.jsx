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
import { data } from "autoprefixer";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state.map((item) =>
        item.id == action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    // return {count:state.count+action.value}

    case "decrement":
      return state.map((item) =>
        item.id == action.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    case "deletecart":
      return state.filter((item, i) => i != action.i);

    default:
      return state;
  }
};
// console.log(bb);

function Cart() {
  // const navigate=useNavigate()

  const { cartitem, setcartitems } = useContext(contexts);
  const [state, dispatch] = useReducer(reducer, cartitem.cart);
  const [dcart, setdeletedcart] = useState([]);
  const [cartnew, setcartnew] = useState([]);
  const   navigate=useNavigate()
  const idss = localStorage.getItem("id");
  console.log(idss);
  const Grandtotal = 0;
  const total = 0;

  useEffect(() => {
    const cartupd = async () => {
      const response = await axios.patch(`http://localhost:4000/user/${idss}`, {
        cart: state,
      });
    };
    cartupd();
  }, [state, idss]);

  // console.log((state, "ssss"));

  const cartdelete = (i) => {
    dispatch({
      type: "deletecart",
      i,
    });
  };

  //using this the orderproducts are not go when refresh

  useEffect(() => {
    const lastorderss = async () => {
      const response = await axios.get(`http://localhost:4000/user/${idss}`);
      setcartnew(response.data.orders);
    };
    lastorderss(setcartnew);
  }, []);

  const fnsummer = async (data) => {
    const response = await axios.get(`http://localhost:4000/user/${idss}`);
    try {
      const orders = response.data.orders;
      const userorder = state.find((item) => item.id == data.id);
      if (!orders.find((order) => order?.id == userorder.id)) {
        const updatedoredrs = [...orders, userorder];
        const res = await axios.patch(`http://localhost:4000/user/${idss}`, {
          orders: updatedoredrs,
        });
        setcartnew(res.data.orders);
        // console.log(cartnew);
      } else {
        toast.warning("product alredy in orders");
      }
    } catch (error) {
      console.log(error);
    }

    // console.log(cartnew,"gggg");
  };

    //updated delete orders in jsonserver


  useEffect(() => {
    const orderupd = async () => {
      const response = await axios.patch(`http://localhost:4000/user/${idss}`,{ orders: cartnew});
    };
    orderupd();
  }, [cartnew, idss]);
  //orderdelete
  const orderdelete = (i) => {
    const newcart = cartnew.filter((item, k) => k != i);
    setcartnew(newcart);
  };

  
 

  

  const grandtotal=cartnew.reduce((total,item)=>total+item.quantity*item.price,0)

  return (
    <>
      <div>
        <Navbar />
        {console.log(state, "summery")}

        <div className="flex justify-between">
          <h1 className="text-center"></h1>
          <div>
            <h1 className="ml-10 mr-9 mt-8 text-3xl text-blue-700 font-semibold border-b-2 border-red-500">
              CART
            </h1>

            <div className="flex  flex-wrap justify-center gap-8 items-center ">
              {state &&
                state.map((data, i) => {
                  return (
                    <div className="  ">
                      <Card className="h-[63vh] w-[50vh] mt-20 gap-1  ">
                        <CardHeader color="blue-gray" className=" ">
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
                              onClick={() =>
                                dispatch({
                                  type: "decrement",
                                  id: data.id,
                                })
                              }
                            >
                              -
                            </Button>
                            <h1 className="mt-3 ml-3 mr-3">
                              {data?.quantity}{" "}
                            </h1>
                            <Button
                              className="text-black bg-white"
                              onClick={() =>
                                dispatch({
                                  type: "increment",
                                  id: data.id,
                                })
                              }
                            >
                              +
                            </Button>
                            <div className="mt-3 ml-2 cursor-pointer text-black hover:text-2xl hover:text-red-900">
                              <i
                                class="fa-solid fa-trash fa-lg"
                                // style={{ color: "#000000" }}
                                onClick={() => {
                                  cartdelete(i);
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
          </div>
          <div className="w-[150vh] ">
            <h1 className="text-center ml-10 mr-9 mt-8 text-3xl text-red-700 font-semibold border-b-2 border-blue-700 ">
              ORDERS
            </h1>

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
                     <h1 className="text-red-900">Total: {item.price * item.quantity}</h1>
                    </h1>
                    <div>
                      <i
                        class="fa-solid fa-xmark hover:text-red-900 cursor-pointer"
                        onClick={() => {
                          orderdelete(index);
                        }}
                      ></i>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="text-center mt-10">
              <h1 className="text-blue-700">Grand total: <span className="text-red-900">{grandtotal}</span> </h1>
             
             <Button className="bg-green-800 mt-5" onClick={()=>{
              navigate('/payment')
             }} >PAY</Button>
            
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Cart;
