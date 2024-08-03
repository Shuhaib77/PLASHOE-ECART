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
      return state.map((item)=>item.id==action.id?{...item,quantity:item.quantity+1}:item) ;
      // return {count:state.count+action.value}

    case "decrement":
     return state.map((item)=> item.id==action.id&&item.quantity>1?{...item,quantity:item.quantity-1}:item);
      
    default:
      return state;
  }
};

function Cart() {
  // const navigate=useNavigate()

  const {cartitem } = useContext(contexts);
  // console.log("sa",cartitem);
  // console.log(cartitem.cart);
  const [state, dispatch] = useReducer(reducer,cartitem.cart )

  return (
    <>
      <div>
        <Navbar />

        <h1>hii cartt</h1>
        <div></div>
        <div className="flex  flex-wrap justify-center gap-10 ">
          {state &&
            state.map((data) => {
              return (
                <div className="  ">
                  <Card className="h-[50vh] w-[50vh] mt-20 gap-1 ">
                    <CardHeader color="blue-gray" className="relative h-56">
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
                              id:data.id,
                            })
                          }
                        >
                          -
                        </Button>
                        <h1 className="mt-3 ml-3 mr-3">{data?.quantity} </h1>
                        <Button
                          className="text-black bg-white"
                          onClick={() => 
                            dispatch({
                              type: "increment",
                              id:data.id,
                            })
                          }
                        >
                          +
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              );
            })}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Cart;
