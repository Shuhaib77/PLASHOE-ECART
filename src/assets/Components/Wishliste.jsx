import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { contexts } from "../../App";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Wishliste() {
  const idu = localStorage.getItem("id");

  const { wldata, wlitem, addtocarts, wishlists, datas } = useContext(contexts);

  console.log(wlitem, "ffffhhh");

  const navigate = useNavigate();
  const alldata = datas.map((item) => item);
  console.log(alldata);

  if (wlitem.length == 0) {
    return (
      <div>
        <Navbar />
        <div>
          {toast.warning("no item found")}
          <h1 className="text-center mt-5">no item found</h1>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <div>
        <div className="">
          <Navbar />
        </div>
        <div className="w-full h-full bg-gray-300 flex justify-center items-center mt-5  ">
          <div className="w-full h-full mb-8 mt-8 bg-white ">
            <div className="border-b-2 pb-2 border-black">
              <h1 className=" text-center md:ml-5 md:text-left text-4xl mt-10  text-light-green-800 ">
                WISHLIST
              </h1>
            </div>

            <div className=" md:flex justify-between mt-5 pb-5  ">
              <div className=" md:ml-10 ">
                <Button
                  className="bg-light-green-800 w-full"
                  onClick={() => {
                    navigate("/collection");
                  }}
                >
                  Show all
                </Button>
                {/* <Button className="">Filter shoe</Button> */}
              </div>
              <div className="mr-5">
                {/* <span className="mr-5">Default sorting</span> */}
              </div>
            </div>
            <div className="flex flex-wrap justify-around items-center mb-10 gap-10 ">
              { wlitem && wlitem?.map((data) => {
                return (
                  <div className=" ">
                    <Card className="h-[55vh] w-[50vh] mt-20 gap-1   ">
                      <CardHeader color="" className="relative h-56">
                        <i
                          class="fa-solid fa-heart ml-4 "
                          style={{
                            color: datas?.some(
                              (item) => item?._id === data?.productid?._id
                            )
                              ? "red"
                              : "blue",
                          }}
                          onClick={() => {
                            wishlists(data.productid);
                          }}
                        ></i>
                        <img src={data?.productid?.image} alt="card-image" />
                      </CardHeader>
                      <CardBody>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-2"
                        >
                          {data?.productid?.brand}
                        </Typography>
                        <Typography>{data.productid?.title}</Typography>
                        <Typography>{data.productid?.catogery}</Typography>
                        <Typography>{data.productid?.price}</Typography>
                      </CardBody>
                      <CardFooter className="pt-0 flex justify-between">
                        <Button
                          onClick={() => {
                            addtocarts(data?.productid);
                          }}
                        >
                          Add to cart
                        </Button>
                        <Button
                          onClick={() => {
                            navigate(`/showcomponent/${data?.productid?._id}`);
                            // deletewl(data.id)
                          }}
                        >
                          readmore
                        </Button>
                        {/* <i class="fa-solid fa-trash fa-xl" style={{color: "#000000"}} onClick={()=>{
                                deletewl(data.id)
                            }}></i>
                        */}
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

export default Wishliste;
