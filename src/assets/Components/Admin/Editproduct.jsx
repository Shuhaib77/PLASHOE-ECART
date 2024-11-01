import React, { useContext, useEffect } from 'react'
import {
    Input,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from 'react';
import { contexts } from '../../../App';


function Editproduct({collectdata,size,handleOpen,setcollectdata,setclick}) {
   const {fetchData}=useContext(contexts)
    // const [editprdt, seteditprdt] = useState(null);
const token=localStorage.getItem("atoken")
console.log(collectdata._,'hguu');




  const { handleChange, handleSubmit, values, errors, setValues } = useFormik({
        initialValues: {
          id: collectdata._id,
          image: collectdata.image,
          brand: collectdata.brand,
          title: collectdata.title,
          catogery: collectdata.catogery,
          price: collectdata.price,
          quantity: 1,
        },
        onSubmit: async (values) => {
    
          const formDta = new FormData();
    
          formDta.append("id", values._id);
          formDta.append("image", values.image);
          formDta.append("brand", values.brand);
          formDta.append("category", values.catogery);  
          formDta.append("price", values.price);
          formDta.append("quantity", values.quantity);
          formDta.append("title", values.title);
          
          // Log the FormData contents for debugging
          // for (let pair of formDta.entries()) {
          //   console.log(`${pair[0]}: ${pair[1]}`);
          // }
          
          try {
            const response = await axios.put(
              `http://localhost:5000/api/admin/products/${collectdata._id}`,
              formDta, 
              {
                headers: {
                  Authorization: token,
                  'Content-Type': 'multipart/form-data' 
                }
              }
            );
          
            console.log(response, 'response');
            toast.success("Updated");
           
          } catch (error) {}finally{
            setcollectdata(null)
            handleOpen(null)
            setclick(false)
            
           }
       
            fetchData()
         
        },
      });
      


    //   const handleclick = async (data) => {
    //     const res = await axios.get(`http://localhost:5000/api/products/${collectdata._id}`,{},
    //       {
    //         headers:{
    //           Authorization:token
    //         }
    //       }
    
    //     );
    //     console.log(res.data, "dededed");
    //     setValues(res.data.product);
    //   };

      const canselfn =()=>{
        setcollectdata(null)
        handleOpen(null)
        setclick(false)
      }
  return (
    <div>
          <Dialog
          open={
            size === "xs" ||
            size === "sm" ||
            size === "md" ||
            size === "lg" ||
            size === "xl" ||
            size === "xxl"
          }
          size={size || "xl"}
        //   handler={handleOpen}
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
                      value={values._id}
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
                     type="submit"
                     onClick={()=>fe}
                   
                  >
                    <span className="text-center">Confirm</span>
                  </Button>
                  <Button
                    className="bg-red-900"
                    onClick={() => canselfn()}
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
        </Dialog>
    </div>
  )
}

export default Editproduct