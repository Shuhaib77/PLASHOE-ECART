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
// import { Setshoeide } from './Addtocart';

function ShowComponent() {
  const { datas, addtocarts } = useContext(contexts);
  const [dedata, setdedata] = useState([]);

  const datatodescribe = useParams();

  // console.log(datatodescribe);

  useEffect(() => {
    const res = datas.filter(
      (specificdata) => specificdata.id === datatodescribe.dataid
    );
    setdedata(res);

    // console.log(datas);
  }, [datas]);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="flex  flex-wrap justify-center gap-10 mt-10 ">
          {dedata.map((data) => {
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
                        addtocarts(data)
                        
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
