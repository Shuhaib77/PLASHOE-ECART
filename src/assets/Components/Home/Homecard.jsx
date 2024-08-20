import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import { contexts } from "../../../App";

import { Link, useNavigate } from "react-router-dom";

import User from "../../Pagess/User";
import Cart from "../Cart";
import card from "@material-tailwind/react/theme/components/card";
import { toast } from "sonner";

function Homecard() {
  const navigate = useNavigate();
  // const [datas, setdata] = useState([]);
  const {
    setshoeid,
    shoeid,
    cartitem,
    setcartitem,
    addtocarts,
    datas,
    setdata,
    fetchData,
    wishlists,
    wlitem,
    deletewl,
    wl,
    setwl,
  } = useContext(contexts);
  // const [wishlist, setWishlist] = useState("blue");

  fetchData();

  //     const b=wlitem.find((item)=>item.id===id)
  //     if(b){
  //       setWishlist("red")
  //     }
  //     else{
  //       setWishlist("blue")
  //     }
  // }

  return (
    <div>
      <div>
        <div className="flex  flex-wrap justify-center gap-10 ">
          {datas.slice(0, 6).map((data) => {
            return (
              <div className="  ">
                <Card className="h-[58vh] w-[50vh] mt-20 gap-1 ">
                  <CardHeader color="white" className="relative h-56">
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
                    <Typography variant="h5" color="" className="mb-2">
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
        <div className="flex  mt-10 ">
          <div className="bg-home-bg2 bg-no-repeat ml-5 mr-2 w-full h-[70vh] ">
            <div className=" flex justify-center h-[70vh]  items-center">
              <Button
                className="text-black bg-white border-black border-2"
                onClick={() => {
                  navigate("/collection");
                }}
              >
                {" "}
                Shop now
              </Button>
            </div>
          </div>
          <div className="bg-home-bg3 bg-no-repeat w-full mr-5 ml-2">
            <div className=" flex justify-center  h-[70vh]  items-center">
              <Button
                className="text-black bg-white  border-black border-2"
                onClick={() => {
                  navigate("/collection");
                }}
              >
                {" "}
                Shop now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {datas.slice(6, 12).map((data) => {
            return (
              <>
                <Card className="h-[55vh] w-[50vh] mt-20">
                  <CardHeader color="w" className="h-[50vh]">
                    <div>
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
                    </div>

                    <img src={data.image} alt="card-image" />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {data.brand}
                    </Typography>
                    <Typography>{data.title}</Typography>
                    <Typography>{data.price}</Typography>

                    <Typography>{data.catogery}</Typography>
                  </CardBody>

                  <CardFooter className="pt-0 flex justify-between">
                    <Button
                      onClick={() => {
                        navigate(`/showcomponent/${data.id}`);
                      }}
                    >
                      Read More
                    </Button>
                    <Button
                      onClick={() => {
                        console.log(cartitem);
                        addtocarts(data);
                      }}
                    >
                      Add to cart
                    </Button>
                  </CardFooter>
                </Card>
              </>
            );
          })}
        </div>

        <div className="w-100% h-[60vh] bg-blue-gray-100 flex justify-around items-center mt-10 ml-5 mr-5 ">
          <div className="">
            <p>
              Eu eget felis erat mauris aliquam mattis lacus, arcu <br />
              leo aliquam sapien pulvinar laoreet vulputate sem <br />
              aliquet phasellus egestas felis, est, vulputate <br />
              morbi massa mauris vestibulum dui odio.
            </p>

            <div className="flex mt-10 ">
              <img
                src=" https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-3.svg"
                alt=""
                className="mr-4"
              />
              <img
                src=" https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-2.svg"
                alt=""
                className="mr-4"
              />
              <img
                src=" https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-1.svg"
                alt=""
              />
            </div>
          </div>

          <div>
            <img
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-recycled-circle-iamge.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homecard;
