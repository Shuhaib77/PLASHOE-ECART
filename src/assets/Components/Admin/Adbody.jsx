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
  const {  datas,fetchData } = useContext(contexts);
  // const [editprdt, seteditprdt] = useState(null);
const navigate=useNavigate()
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
  const token=localStorage.getItem("atoken")

  

  // const handleclick = async (data) => {
  //   const res = await axios.get(
  //     `https://jsoneserver.onrender.com/datass/${data.id}`
  //   );
  //   // console.log(res.data, "dededed");
  //   setValues(res.data);
  // };

  //delete products

  const deleteprdt = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/admin/products/delete/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      navigate("/admin/editprdt")
      toast.success("product deleted")
      
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
                    setcollectdata(data)
                    handleOpen("xl"),
                    // handleclick(data);
                    setclick(true)
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

        {/* <Dialog
          open={
            size === "xs" ||
            size === "sm" ||
            size === "md" ||
            size === "lg" ||
            size === "xl" ||
            size === "xxl"
          }
          size={size || "xl"}
          handler={handleOpen}
          className="h-[80vh]"
        >
          <DialogHeader>edit product</DialogHeader>
          <DialogBody>
            <div className=" flex h-[40vh] ml-20  ">
              <form action="" className="w-[45vh]" onSubmit={handleSubmit}>
                <div className="w-100 ">
                  <div className=" ">
                    <Input
                      label="Imageurl"
                      onChange={handleChange}
                      value={values.image}
                      name="image"
                    ></Input>
                  </div>
                  <div className="mt-7">
                    <Input
                      label="Id"
                      className=""
                      type=""
                      value={values.id}
                      onChange={handleChange}
                      name="id"
                    ></Input>
                  </div>
                </div>
                <div className="mt-7">
                  <Input
                    label="Title"
                    className="w-[60vh]"
                    onChange={handleChange}
                    value={values.title}
                    name="title"
                  ></Input>
                </div>

                <div className="mt-7">
                  <Input
                    label="Brand"
                    className=""
                    onChange={handleChange}
                    value={values.brand}
                    name="brand"
                  ></Input>
                </div>
                <div className="mt-7 ">
                  <Input
                    label="Catogery"
                    className="w-[60vh]"
                    onChange={handleChange}
                    value={values.catogery}
                    name="catogery"
                  ></Input>
                </div>
                <div className="mt-7">
                  <Input
                    label="Quantity"
                    className="w-[60vh]"
                    onChange={handleChange}
                    value={values.quantity}
                    name="quantity"
                  ></Input>
                </div>

                <div className="w-100 mt-7 ">
                  <Input
                    label="Price"
                    className="w-[60vh]"
                    onChange={handleChange}
                    value={values.price}
                    name="price"
                  ></Input>
                </div>
                <div className="text-end mt-5">
                  <Button
                    className="bg-green-800"
                    onClick={() => handleOpen(null)}
                    type="submit"
                  >
                    <span className="text-center">Confirm</span>
                  </Button>
                  <Button
                    className="bg-red-900"
                    onClick={() => handleOpen(null)}
                  >
                    <span>Cancel</span>
                  </Button>
                </div>
              </form>
              <div className="ml-20">
                <div className=" h-[60vh] w-[40vh] ml-10 flex flex-col justify-center  ">
                  <div className="bg-green-600 h-[15vh] w-[40vh]">
                    <img src={values.image} alt="" />
                  </div>
                  <div className="h-[30vh] mt-20 ml-10 w-[40vh]">
                    <h1>
                      <span className="text-red-900 font-medium">TITLE:</span>
                      <span className="text-blue-600">{values.title}</span>
                    </h1>
                    <h1 className="mt-4">
                      <span className="text-red-900 font-medium">BRAND:</span>
                      <span className="text-blue-600">{values.brand}</span>
                    </h1>
                    <h1 className="mt-4">
                      <span className="text-red-900 font-medium">
                        CATOGERY:
                      </span>
                      <span className="text-blue-600">{values.catogery}</span>
                    </h1>
                    <h1 className="mt-4">
                      <span className="text-red-900 font-medium">
                        QUANTITY:
                      </span>
                      <span className="text-blue-600">{values.quantity}</span>
                    </h1>
                    <h1 className="mt-4">
                      <span className="text-red-900 font-medium">PRICE:</span>
                      <span className="text-blue-600">{values.price}</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </DialogBody>
          <DialogFooter></DialogFooter>
        </Dialog> */}

{click && <Editproduct collectdata={collectdata} size={size} handleOpen={handleOpen} setcollectdata={setcollectdata} setclick={setclick}/>}
      </div>
    </>
  );
}

export default Adbody;
