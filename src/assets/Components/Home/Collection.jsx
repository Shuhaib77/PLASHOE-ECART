import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { contexts } from "../../../App";
import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";
// import axios from "axios";
// import Addtocart from "./Addtocart";
// import Addtocart from "./Addtocart";

function Collection() {
  const { datas,cartitem, setcartitem,addtocarts } = useContext(contexts);
  const navigate=useNavigate()


  // addtocart
  // const addtocart = async (data) => {
    

  //   try {
  //     const usersid = localStorage.getItem("id");
  //     const res = await axios.get(`http://localhost:4000/user/${usersid}`);
  //     const cartss = res.data.cart;

  //     const check=cartss.find((itemid)=>itemid.id===data.id)
  //     console.log(check,"check");
  //     if(check){
  //       toast.warning("product alredy exist")
  //     }else{
  //       const update = [...cartss, data];
  //     const reso = await axios.patch(`http://localhost:4000/user/${usersid}`, {
  //       cart: update,
  //     });
  //     console.log(reso.data, "ll");
  //     setcartitem(reso.data);
  //     toast.success("product added tocart")

  //     }

      

  //     // toast.warning("productin cart")

  //     // setcartitem()
  //     // console.log(cartitem);

  //     // console.log("adding " ,update);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // console.log(cartitem);
  // // console.log(datas, "data");
  //   // addtocart

 

  return (
    <div>
      <div>
        <div className="">
          <Navbar />
        </div>

        <div className="w-full h-[290vh] bg-gray-300 flex justify-center items-center mt-5  ">
          <div className="w-[160vh] h-[270vh] bg-white ">
            <h1 className="text-4xl mt-10 ml-10 text-light-green-800">
              TRENDINGS
            </h1>

            <div className="flex justify-between mt-5">
              <div className="ml-5">
                <Button className="">Filter shoe</Button>
              </div>
              <div className="mr-5">
                <span className="mr-5">Default sorting</span>
                <Button className="bg-light-green-800">Show all</Button>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center ">
              {datas.map((data) => {
                return (
                  <div className=" ">
                    <Card className="h-[50vh] w-[50vh] mt-20 gap-x-2 gap-1   ">
                      <CardHeader color="blue-gray" className="relative h-56">
                        <img src={data.image} alt="card-image" />
                      </CardHeader>
                      <CardBody>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-2"
                        >
                         
                          {data.brand}
                        </Typography>
                        <Typography>{data.title}</Typography>
                      </CardBody>
                      <CardFooter className="pt-0 flex justify-between">
                      <Button onClick={()=>{
                    navigate(`/showcomponent/${data.id}`)
                  }} > Read More </Button> 
                   <Button onClick={()=>{
                    addtocarts(data)
                   
                   }} >Add to cart</Button>
                      </CardFooter>
                    </Card>

                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Collection;
