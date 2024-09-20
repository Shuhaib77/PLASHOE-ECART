import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
// import { Button } from "@material-tailwind/react";
import { contexts } from "../../../App";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Women() {
  const { addtocarts,datas, setdata,fetchData,wishlists,wlitem } = useContext(contexts);
  // const [womendata, setwomendata] = useState([]);
  const navigate = useNavigate();


  // fetchData()


 return (
  
    <div>
      <div>
        <div className="">
          <Navbar />
        </div>
        <div className="w-full h-full bg-gray-300  flex justify-center items-center mt-5  ">
          <div className="w-full m-6 h-full mt-8 mb-8 bg-white ">
            <h1 className=" text-center md:text-left  text-4xl md:mt-10 md:ml-10 text-light-green-800">WOMEN</h1>
            <div className="  flex flex-col  md:flex-row justify-between mt-5">
              <div className="  md:ml-12">
                <Button className=" mb-5 w-full">Filter shoe</Button>
              </div>
              <div className=" mb-5 md:mr-5 flex flex-col items-center md:flex-row">
                {/* <h1 className="mb-5">Default sorting</h1> */}
                <Button
                  className="bg-light-green-800 w-full"
                  onClick={() => {
                    navigate("/collection");
                  }}
                >
                  Show all
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap justify-around items-center ">
              {datas.filter((wdata) => wdata.catogery == "women").map((data) => {
                return (
                  <div className=" ">
                    <Card className="h-full w-[50vh] mt-20  gap-x-10   ">
                      <CardHeader color="" className="relative h-100%">
                      <i
                        class="fa-solid fa-heart ml-4 "
                        style={{
                          color: wlitem.find((item) => item.id === data.id)
                            ? "red"
                            : "",
                        }}
                        onClick={() => {
                          
                          wishlists(data);
                        }}
                      ></i>
                        <img src={data.image} alt="card-image" />
                      </CardHeader>
                      <CardBody>
                        <Typography variant="h5" color="" className="">
                          {data.brand}
                        </Typography>
                        <Typography>{data.title}</Typography>
                        <Typography>{data.catogery}</Typography>
                        <Typography>{data.price}</Typography>
                      </CardBody>
                      <CardFooter className=" flex justify-between">
                        <Button
                          onClick={() => {
                            navigate(`/showcomponent/${data.id}`);
                          }}
                        >
                          Read More
                        </Button>
                        <Button
                          onClick={() => {
                            addtocarts(data);
                          }}
                        >
                          Add to cart
                        </Button>
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

export default Women;
