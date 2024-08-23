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
import axios from "axios";

function Collection() {
  const {  addtocarts,datas, setdata,fetchData ,wishlists,wlitem} = useContext(contexts);
  const navigate = useNavigate();

  // fetchData()
 return (
    <div>
      <div>
        <div className="">
          <Navbar />
        </div>

        <div className="w-full h-full bg-gray-300 flex justify-center items-center mt-5  ">
          <div className="w-[160vh] h-full mb-8 mt-8 bg-white ">
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
            <div className="flex flex-wrap justify-center items-center mb-10">
              {datas.map((data) => {
                return (
                  <div className=" ">
                    <Card className="h-[55vh] w-[50vh] mt-20 gap-x-2 gap-1   ">
                      <CardHeader color="" className="relative h-56">
                      <i
                        class="fa-solid fa-heart ml-4 "
                        style={{
                          color: wlitem.find((item) => item.id === data.id)
                            ? "red"
                            : "blue",
                        }}
                        onClick={() => {
                          
                          wishlists(data);
                        }}
                      ></i>
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
                        <Typography>{data.catogery}</Typography>
                        <Typography>{data.price}</Typography>
                      </CardBody>
                      <CardFooter className="pt-0 flex justify-between">
                        <Button
                          onClick={() => {
                            navigate(`/showcomponent/${data.id}`);
                          }}
                        >
                          {" "}
                          Read More{" "}
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

export default Collection;
