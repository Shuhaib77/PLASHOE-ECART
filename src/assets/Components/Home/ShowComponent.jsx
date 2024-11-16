import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { contexts } from "../../../App";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function ShowComponent() {
  const { datas, addtocarts, wishlists, wlitem } = useContext(contexts);
  const [dedata, setdedata] = useState([]);
  const datatodescribe = useParams();
 
  useEffect(() => {
    const res = datas.filter(
      (specificdata) => specificdata._id === datatodescribe.dataid
    );
    setdedata(res);
  }, []);
  console.log(dedata,"dd");

  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div>
        <div className="flex  flex-wrap justify-center gap-10 mt-10 ">
          {dedata.map((data) => {
            return (
              <div className="  ">
                <Card className="h-[55vh] w-[50vh] mt-20 gap-1 ">
                  <CardHeader color="" className="relative h-56">
                  <i
                      class="fa-solid fa-heart ml-4 "
                      style={{
                        color: wlitem.some(
                          (item) => item.productid?._id === data?._id
                        )
                          ? "red"
                          : "blue",
                      }}
                      onClick={() => {
                       wishlists(data)
                    }}
                    ></i>

                    <img src={data.image} alt="card-image" />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
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
      <Footer />
    </>
  );
}

export default ShowComponent;
