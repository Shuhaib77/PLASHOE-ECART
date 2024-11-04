import React, { useContext, useState } from "react";
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
import { object, string } from "yup";

function Addproduct() {
  const { size, setSize, handleOpen } = useContext(contexts);
  const [imagePreview, setImagePreview] = useState(null);

const formik = useFormik({
    initialValues: {
      description: "",
      image: null, 
      brand: "",
      title: "",
      catogery: "",
      price:null,
      quantity: 1,
    },
    onSubmit: async (values) => {
      const formData = new FormData();

      formData.append("description", values.description);
      formData.append("image", values.image); // Append the file itself
      formData.append("brand", values.brand);
      formData.append("title", values.title);
      formData.append("catogery", values.catogery);
      formData.append("price", values.price);
      formData.append("quantity", values.quantity);

      try {
        const atokens = localStorage.getItem("atoken");
        const res = await axios.post(
          "http://localhost:5000/api/admin/products",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: atokens,
            },
          }
        );
        console.log(res, "Response from server");
        toast.success("Product added successfully");
      } catch (error) {
        console.log("Error uploading product:", error);
      }
    },
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue("image", file); // Set the file in Formik's state
      setImagePreview(URL.createObjectURL(file)); // Set preview URL
      console.log("Image Name:", file.name); // Log file name
    }
  };

  return (
    <div>
      <div className="flex justify-center w-[50vh] items-center h-[30vh]">
        <Button onClick={() => handleOpen("xl")} className="bg-blue-500">
          Add product
        </Button>
      </div>
      <Dialog open={size === "xl"} size={size || "sm"} handler={handleOpen}>
        <DialogHeader className="mt-10 ml-18 border-b-4 border-green-700 ">
          ADD PRODUCTS
        </DialogHeader>
        <DialogBody>
          <div className="flex">
            <div className="h-[35vh] ml-20 mt-10">
              <form className="w-[40vh]" onSubmit={formik.handleSubmit}>
                <div className="w-100 ">
                  <Input
                    type="file"
                    label="Image"
                    onChange={handleImageChange}
                    name="image"
                  />
                </div>
                <div className="mt-7">
                  <Input
                    label="Description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    name="description"
                    required
                  />
                </div>
                <div className="mt-7">
                  <Input
                    label="Title"
                    className="w-[60vh]"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    name="title"
                    required
                  />
                </div>
                <div className="mt-7">
                  <Input
                    label="Brand"
                    value={formik.values.brand}
                    onChange={formik.handleChange}
                    name="brand"
                    required
                  />
                </div>
                <div className="mt-7 ">
                  <Input
                    label="Category"
                    className="w-[60vh]"
                    value={formik.values.catogery}
                    onChange={formik.handleChange}
                    name="catogery"
                  />
                </div>
                <div className="mt-7">
                  <Input
                    label="Quantity"
                    className="w-[60vh]"
                    value={formik.values.quantity}
                    onChange={formik.handleChange}
                    name="quantity"
                  />
                </div>
                <div className="w-100 mt-7 ">
                  <Input
                    label="Price"
                    className="w-[60vh]"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    name="price"
                    required
                  />
                </div>
                <div className="text-end mt-5">
                  <Button variant="gradient" color="green" type="submit">
                    Confirm
                  </Button>
                </div>
              </form>
            </div>
            <div className="ml-20 ">
              <div className="w-[55vh] ml-20 h-[30vh] ">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Image Preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500">No Image Selected</span>
                )}
              </div>
              <div className="w-[65vh] ml-10 mt-5 h-[40vh] ">
                <h1 className="ml-10 pt-5 ">
                  <span className="text-red-900 font-medium">ID:</span> {formik.values.id}
                </h1>
                <h1 className="ml-10 mt-6">
                  <span className="text-red-900 font-medium">TITLE:</span> {formik.values.title}
                </h1>
                <h1 className="ml-10 mt-6">
                  <span className="text-red-900 font-medium">BRAND:</span> {formik.values.brand}
                </h1>
                <h1 className="ml-10 mt-6">
                  <span className="text-red-900 font-medium">CATEGORY:</span> {formik.values.catogery}
                </h1>
                <h1 className="ml-10 mt-6">
                  <span className="text-red-900 font-medium">QUANTITY:</span> {formik.values.quantity}
                </h1>
                <h1 className="ml-10 mt-6">
                  <span className="text-red-900 font-medium">PRICE:</span> {formik.values.price}
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
    </div>
  );
}

export default Addproduct;
