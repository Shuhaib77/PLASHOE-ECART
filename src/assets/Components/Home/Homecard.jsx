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

function Homecard() {

  const {datas,setdata}=useContext(contexts)

  // const [datas, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/datass");
        setdata(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    console.log(datas);
  }, []);

  // console.log(datas,"data")
  return (
    <div>
      <div>
        <div className="flex  flex-wrap justify-center ">
          {datas.slice(0, 6).map((data) => {
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
                  <CardFooter className="pt-0">
                    <Button>Read More</Button>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
        <div className="flex  mt-10 ">
          <div className="bg-home-bg2 bg-no-repeat ml-5 mr-2 w-full">
            <div className=" flex justify-center h-[70vh]  items-center">
              {/* <h1 className="text-white block">Men</h1> <br /> */}
              <Button className="text-black bg-white border-black border-2">
                {" "}
                Shop now
              </Button>
            </div>
          </div>
          <div className="bg-home-bg3 bg-no-repeat w-full mr-5 ml-2">
            <div className=" flex justify-center  h-[70vh]  items-center">
              {/* <h1 className="text-white block">Men</h1> */}
              <Button className="text-black bg-white  border-black border-2">
                {" "}
                Shop now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {datas.slice(6, 12).map((data) => {
            return (
              <>
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
                  <CardFooter className="pt-0">
                    <Button>Read More</Button>
                  </CardFooter>
                </Card>
              </>
            );
          })}
        </div>
        <div className=" mt-10 ">
          <div className="bg-home-bg4 bg-no-repeat ml-5  w-100% mr-5 flex justify-center items-center  h-[60vh]">
            <div className="text-center">
              <h1 className="text-white text-5xl font-semibold">
                Better for People & the Planet
              </h1>
              <h6 className="text-white text-2xl mt-3 font-medium">
                Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est
                dictum in vulputate
              </h6>
              <Button className="text-black bg-white border-black border-2 mr-4 mt-4">
               
                Shop women
              </Button>
              <Button className="text-black bg-white border-black border-2 ml-4 mt-4">
                
                Shop bymen
              </Button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Homecard;
