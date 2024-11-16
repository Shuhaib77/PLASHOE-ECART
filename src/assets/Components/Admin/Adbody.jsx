import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { data } from "autoprefixer";
import { toast } from "sonner";
import { contexts } from "../../../App";
import { useNavigate, useParams } from "react-router-dom";
import Editproduct from "./Editproduct";

function Adbody() {
  const { datas, fetchData } = useContext(contexts);

  const navigate = useNavigate();
  const { id } = useParams();
  const [sprdt, setsprdt] = useState([]);

  const [click, setclick] = useState(false);
  const [collectdata, setcollectdata] = useState(null);

  const [size, setSize] = React.useState(null);
  const handleOpen = (value) => setSize(value);

  useEffect(() => {
    const res = datas.filter((it) => it._id === id);
    setsprdt(res);
  }, [datas, id]);
  console.log(sprdt);
  const token = localStorage.getItem("atoken");
  //delete prdt
  const deleteprdt = async (id) => {
    try {
      const response = await axios.delete(
        `https://plashoeserver.onrender.com/api/admin/products/delete/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      navigate("/admin/editprdt");
      toast.success("product deleted");
    } catch (error) {
      console.log(error);
    }
    fetchData();
  };

  return (
    <>
      <div className="ml-10 mt-5 border-b-2 border-green-800 ">
        <h1 className="font-medium text-red-900 mb-3 text-2xl">
          EDIT PRODUCTS
        </h1>
        {/* <h1>{sprdt.map((item)=>{
          return(
            // <h1>{item.title}</h1>
          )
        })}</h1> */}
      </div>

      <div className="flex flex-wrap justify-center items-center  gap-5 mt-20 w-[full] h-[70vh] overflow-auto ">
        {sprdt.map((data, index) => {
          return (
            <Card className="w-96 h-[50vh] border-5 border-g">
              <CardHeader className="h-[30vh] mt-5">
                <img src={data.image} alt="profile-picture" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography color="blue-gray" className="mb-2">
                  {data.title}
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  {data.brand}
                </Typography>
              </CardBody>
              <CardFooter className="flex justify-between gap-7 pt-2">
                <Button
                  onClick={() => {
                    setcollectdata(data);
                    handleOpen("xl"),
                      // handleclick(data);
                      setclick(true);
                    // navigate(`/editprdts/${data._id}`)
                  }}
                  className="bg-blue-900"
                >
                  Go TO Edit
                </Button>
                <div className="mt-3 hover:text-xl">
                  <i
                    class="fa-solid fa-trash fa-xl text-black hover:text-red-900 "
                    onClick={() => {
                      deleteprdt(data._id);
                    }}
                  ></i>
                </div>
              </CardFooter>
            </Card>
          );
        })}

        {click && (
          <Editproduct
            collectdata={collectdata}
            size={size}
            handleOpen={handleOpen}
            setcollectdata={setcollectdata}
            setclick={setclick}
          />
        )}
      </div>
    </>
  );
}

export default Adbody;
