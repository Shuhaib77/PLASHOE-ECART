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

function Men() {
  const { datas } = useContext(contexts);
  const [mendata, setmendata] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    const res = datas.filter((men) => men.catogery == "men");
    setmendata(res);
  }, [datas]);
  console.log(mendata);

  // const res=datas.filter((men)=>men.catogery=="men")
  // setmendata(res)
  // console.log(mendata)

  return (
    <div>
      <div>
        <div className="">
          <Navbar />
        </div>

        <div className="w-full h-[170vh] bg-gray-300 flex justify-center items-center mt-5  ">
          <div className="w-[160vh] h-[150vh] bg-white ">
            <h1 className="text-4xl mt-10 ml-10 text-light-green-800">MEN</h1>

            <div className="flex justify-between mt-5">
              <div className="ml-5">
                <Button className="">Filter shoe</Button>
              </div>
              <div className="mr-5">
                <span className="mr-5">Default sorting</span>
                <Button className="bg-light-green-800" onClick={()=>{
                navigate('/collection')
              }}  >Show all</Button>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center ">
              {mendata.map((data) => {
                return (
                  <div className=" ">
                    <Card className="h-[50vh] w-[50vh] mt-20 gap-1   ">
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
                  }}>Read More</Button>
                   <Button  >Add to cart</Button>
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

export default Men;
