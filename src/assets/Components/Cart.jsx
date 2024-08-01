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


const reducer=(state,action)=>{
  switch(action.type){
    case("increment"): 
    return state.map(val=>val.id===action.value?{...val, quantity:val.quantity+1}:val)
    case("decrement"): 
    return state.count.map(val=>val.id===action.value?{...val, quantity:val.quantity-1}:val)
  }

}

function Cart() {
  const navigate=useNavigate()
  
  const { datas, user, shoeid,cartitem, setcartitem } = useContext(contexts);
  // const [productq,setproductq]=useState([])



  const [states,dispatch]=useReducer(reducer,{
    count:0,
    price:0
  })
  // console.log(user);
 
  // const [cartitem, setcartitem] = useState([]);
  // const [usercart,setusercart]=useLocalStorageState([])
  useEffect(() => {
    const res = datas.find((product) => product.id === shoeid);
    // setcartitem(res)
    // console.log(cartitem);
    const addtocart = async () => {
      // console.log(cartitem);

      if (res) {
        // console.log(cartitem);
        console.log(res);
        try {
          const resp = await axios.get(`http://localhost:4000/user/${user.id}`);
          const updatecart = [...resp.data.cart, res];

          const resps = await axios.patch(
            `http://localhost:4000/user/${user.id}`,
            {
              cart: updatecart,
            }
          );
          setcartitem(resps.data.cart);
          // console.log(resps.data);

          // console.log(updatecart);
          toast.success("cart updated");
        } catch (error) {
          console.log(error);
        }
      } else {
        toast.warning("product not found");
      }
    };

    addtocart();
  }, [datas,user,shoeid,setcartitem]);
  // const updateCart = async (newCart) => {
  //   try {
  //     await axios.patch(`http://localhost:4000/user/${user.id}`, {
  //       cart: newCart,
  //     });
  //     setcartitem(newCart);
  //     toast.success("Cart updated successfully!");
  //   } catch (error) {
  //     console.error("Failed to update cart", error);
  //     toast.error("Failed to update cart");
  //   }
  //   updateCart()
  // };
 

  console.log(cartitem, "bbb");

  // console.log(resp.data.cart);

  return (
    <>
      <div>
        <Navbar />

        <h1>hii cartt</h1>
        <div className="flex  flex-wrap justify-center gap-10 ">
          {cartitem?.map((data) => {
            return (
              <div className="  ">
                <Card className="h-[50vh] w-[50vh] mt-20 gap-1 ">
                  <CardHeader color="blue-gray" className="relative h-56">
                    <img src={data.image} alt="card-image" />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {data.brand}
                    </Typography>
                    <Typography>{data.title}</Typography>
                  </CardBody>
                  <CardFooter className="pt-0 flex justify-between mt-3">
                    <div>
                    <Button
                      onClick={() => {
                        navigate(`/showcomponent/${data.id}`);
                      }}
                    >
                      {" "}
                      Read More{" "}
                    </Button>
                    </div>
                    <div className="flex justify-center" >
                    <Button className="text-black bg-white" onClick={()=>{
                       dispatch({
                        type:'decrement',
                        value: data.quantity
                        })

                    }}>-</Button>
                    <h1 className="mt-3 ml-3 mr-3">{data.quantity} </h1>
                    <Button className="text-black bg-white" onClick={()=>{
                      dispatch({
                      type:'increment',
                      value: data.quantity
                      })
                      
                    }}>+</Button>
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
