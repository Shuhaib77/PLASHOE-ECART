import React, { useContext } from "react";
import { contexts } from "../../App";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const { search, datas } = useContext(contexts);
  const navigate = useNavigate();
  console.log(search);
  return (
    <div>
      <div>
        <Navbar />
      </div>
     
      

      <div className=" flex flex-wrap mt-10 mb-10 justify-center items-center">
        {search?.map((data) => {
          return (
            <div className="  ">
              <Card className="h-[50vh] w-[50vh] mt-20 gap-1 ">
                <CardHeader color="" className="relative h-56">
                  <img src={data.image} alt="card-image" />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {data.brand}
                  </Typography>
                  <Typography>{data.title}</Typography>
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
                      navigate(`/cart/${data.id}`);
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
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AllProducts;
