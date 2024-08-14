import React, { useContext } from "react";
import { Input, Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "sonner";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { contexts } from "../../../App";

function Addproduct() {
  const { size, setSize, handleOpen } = useContext(contexts);
  // const [size, setSize] = React.useState(null);

  // const handleOpen = (value) => setSize(value);

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      id: "",
      image: "",
      brand: "",
      title: "",
      catogery: "",
      price: "",
      quantity: "",
      // size: [],
    },
    onSubmit: async (values) => {
      const reponse = await axios.get("http://localhost:4000/datass");
      const datas = reponse.data.find((item) => item.id == values.id);
      if (datas) {
        toast.warning("the product id alredy exists");
      } else {
        const newprdt = { ...values };
        await axios.post("http://localhost:4000/datass", newprdt);
        toast.success("product added successfully");
      }
    },
  });
  return (
    <div>
      <>
        <div className="flex justify-center w-[50vh] items-center h-[30vh]">
          <Button onClick={() => handleOpen("xl")} className="bg-blue-500">
            Add product
          </Button>
        </div>
        <Dialog open={size === "xl"} size={size || "sm"} handler={handleOpen}>
          <DialogHeader className="mt-10 ml-18 border-b-4 border-green-700 ">
            ADD PRODUCTS
          </DialogHeader>
          <DialogBody className="">
            <div className="flex">
              <div className="  h-[35vh] ml-20 mt-10 ">
                <form action="" className="w-[40vh]" onSubmit={handleSubmit}>
                  <div className="w-100 ">
                    <div className=" ">
                      <Input
                        label="Imageurl"
                        onChange={handleChange}
                        value={values.image}
                        name="image"
                        required
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
                        required
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
                      required
                    ></Input>
                  </div>

                  <div className="mt-7">
                    <Input
                      label="Brand"
                      className=""
                      onChange={handleChange}
                      value={values.brand}
                      name="brand"
                      required
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
                      required
                    ></Input>
                  </div>
                  <div className="text-end mt-5">
                    <Button
                      variant="gradient"
                      color="green"
                      onClick={() => handleOpen(null)}
                      type="submit"
                    >
                      <span className="text-center">Confirm</span>
                    </Button>
                  </div>
                </form>
              </div>
              <div className="ml-20 ">
                <div className=" w-[55vh] ml-20  h-[30vh]   ">
                  <img src={values.image} alt="" />
                </div>
                <div className=" w-[65vh] ml-10 mt-5 h-[40vh]   ">
                  <h1 className=" ml-10 pt-5  ">
                    {" "}
                    <span className="text-red-900 font-medium">ID:</span>{" "}
                    {values.id}
                  </h1>
                  <h1 className=" ml-10 mt-6">
                    {" "}
                    <span className="text-red-900 font-medium">
                      TITLE:
                    </span>{" "}
                    {values.title}
                  </h1>
                  <h1 className=" ml-10 mt-6">
                    <span className="text-red-900 font-medium">BRAND:</span>{" "}
                    {values.brand}
                  </h1>
                  <h1 className=" ml-10 mt-6">
                    <span className="text-red-900 font-medium">CATOGERY:</span>{" "}
                    {values.catogery}
                  </h1>
                  <h1 className=" ml-10 mt-6">
                    <span className="text-red-900 font-medium">QUANTITY:</span>{" "}
                    {values.quantity}
                  </h1>
                  <h1 className=" ml-10 mt-6">
                    <span className="text-red-900 font-medium">PRICE:</span>{" "}
                    {values.price}{" "}
                  </h1>
                </div>
              </div>
            </div>
          </DialogBody>
          <DialogFooter className="border-t-4 border-green-700 ">
            <Button
              variant="text"
              color="red"
              onClick={() => handleOpen(null)}
              className="mr-1 "
            >
              <span>Cancel</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    </div>
  );
}

export default Addproduct;
