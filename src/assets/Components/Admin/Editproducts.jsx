
import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { toast } from "sonner";
import { contexts } from "../../../App";
import Editproduct from "./Editproduct";
import axios from "axios";
function Editproducts() {
  const { prdt, setprdt, data,datas,fetchData } = useContext(contexts);
  const token = localStorage.getItem("atoken");
  const [click, setclick] = useState(false);
  const [collectdata, setcollectdata] = useState(null);
  const [size, setSize] = React.useState(null);
  const handleOpen = (value) => setSize(value);

  const [dataso, setdata] = React.useState(null);






  // const fetchDatas = async () => {
  //   try {
  //     console.log("hello ");

  //     const response = await axios.get("http://localhost:5000/api/products");
  //     setdata(response.data.products);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchDatas();
  // }, []);

  //delete product
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
      toast.success("product deleted");
    } catch (error) {
      console.log(error);
    }
    fetchData();
  };

  console.log(size, "im suhiuid");

  useEffect(()=>{
    fetchData()
  },[])
  //pagination

  //set item at 1 page
  const pageitem = 3;
  //set page num
  const [page, setPage] = useState(1);


  const totalpage=Math.ceil(datas.length/pageitem)

  const onepagedata=datas.slice((page-1)*pageitem,page*pageitem)

  const paginate=(pagenum)=>{
    if(pagenum>=1 && pagenum<=totalpage){
      setPage(pagenum)
    }

  }
  // _______-












  return (
    <>
      <div className="w-100%">
        <div className="ml-10 mt-5 border-b-2 border-green-800 ">
          <h1 className="font-medium text-red-900 mb-3 text-2xl">
            EDIT PRODUCTS
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-10   mt-20 w-full h-[60vh] overflow-auto ">
          {onepagedata?.map((data, index) => {
            return (
              <Card className="h-full w-[50vh] mt-20  gap-x-10  ">
                <CardHeader className="relative h-56">
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
                  <Typography
                    color="blue-gray"
                    className="font-medium"
                    textGradient
                  >
                    {data.catogery}
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-between  pt-2">
                  <Button
                    onClick={() => {
                      setcollectdata(data);
                      setclick(true);
                      handleOpen("xl");
                    }}
                    className="bg-blue-900"
                  >
                    Edit
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

          <div>
         
          </div>
        </div>
       <div className=" text-center">
       <Button onClick={()=>{
          paginate(page+1)
          

        }}
        disabled={page === totalpage}
        >+</Button>
        <Button onClick={()=>{
          paginate(page-1)

        }}
        disabled={page === 1}
        >-</Button>
       

       </div>
      </div>
    </>
  );
}

export default Editproducts;
