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

function Collection() {
  const { datas } = useContext(contexts);
  const navigate=useNavigate()

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
                    navigate(`/cart/${data.id}`)
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
