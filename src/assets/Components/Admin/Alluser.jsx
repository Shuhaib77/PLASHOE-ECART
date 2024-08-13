import React, { useEffect, useState } from "react";

import {
  Card,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
   CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import axios from "axios";
import { data } from "autoprefixer";
import { toast } from "sonner";

// const TABLE_ROWS = [
//   {
//     name: "John Michael",
//     job: "Manager",
//     date: "23/04/18",
//   },
//   {
//     name: "Alexa Liras",
//     job: "Developer",
//     date: "23/04/18",
//   },
//   {
//     name: "Laurent Perrier",
//     job: "Executive",
//     date: "19/09/17",
//   },
//   {
//     name: "Michael Levi",
//     job: "Developer",
//     date: "24/12/08",
//   },
//   {
//     name: "Richard Gran",
//     job: "Manager",
//     date: "04/10/21",
//   },
// ];

function Alluser() {
  const handleOpen = (value) => setSize(value);
  const [size, setSize] = React.useState(null);
  const [ausers, setausers] = useState([]);
  const [blockusers, setblockusers] = useState([]);
  const [orderss, setorders] = useState([]);
  const TABLE_HEAD = [
    "ID",
    "EMAIL",
    "PASSWORD",
    "COFIRMPASSWORD",
    "ADMIN",

    "ORDERDETAILS",
    "",
  ];

  const fn = async () => {
    const response = await axios.get("http://localhost:4000/user");
    try {
      setausers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fn();
  }, []);
  console.log(ausers, "sws2ed");

  // useEffect(()=>{
  //   const fn=async()=>{
  //   const response = await axios.get(`http://localhost:4000/user/${id}`);
  //   try {
  //     setblockusers(response.data.block);

  //   } catch (error) {
  //     console.log(error);

  //   }
  //   fn()
  // }

  // },[])
  // console.log(blockusers,"gggdgdq");

  const handleuser = async (id) => {
    const response = await axios.get(`http://localhost:4000/user/${id}`);
    const blocks = response.data.block;
    setblockusers(response.data.block);

    // console.log(blocks,"ggggg");

    try {
      // const user=response.data.find((item)=>item.id==id)
      const res =
        blocks === true
          ? (await axios.patch(`http://localhost:4000/user/${id}`, {
              block: false,
            })) && toast.success("user blocked")
          : (await axios.patch(`http://localhost:4000/user/${id}`, {
              block: true,
            })) && toast.warning("user Unblocked");
      console.log(res, "oooo");

      fn();
      // toast.warning("user not find");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(blockusers, "wff");

  //vieworders
  const vieworders = async (id) => {
    const response = await axios.get(`http://localhost:4000/user/${id}`);
    setorders(response.data.orders);
  };
  console.log(orderss, "ygudegde");

  return (
    <>
      <Card className="h-full w-full overflow-scroll ml-5 mt-5 mr-5 ">
        <table className="w-[135vh] min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ausers.map((data, index) => (
              <tr key={index} className=" even:bg-blue-400 ">
                <td className="p-4 ">
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal hover:text-white"
                  >
                    {data.id}
                  </Typography>
                </td>
                <td className="p-4 ">
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal "
                  >
                    {data.email}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal"
                  >
                    {data.password}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal"
                  >
                    {data.confirmpass}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="black"
                    className="font-medium"
                  >
                    {data.admin ? (
                      <i
                        class="fa-solid fa-thumbs-up fa-xl"
                        style={{ color: "#002e7a" }}
                      ></i>
                    ) : (
                      <i
                        class="fa-solid fa-thumbs-down fa-lg"
                        style={{ color: "#831100" }}
                      ></i>
                    )}
                  </Typography>
                </td>

                <td>
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal"
                  >
                    <Button
                      className="bg-blue-900  ml-5 font-medium "
                      onClick={() => {
                        handleOpen("xl");
                        vieworders(data.id);
                      }}
                    >
                      orders
                    </Button>
                  </Typography>
                </td>
                <td>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="black"
                    className="font-medium"
                    onClick={() => {
                      handleuser(data.id);
                    }}
                  >
                    {/* {
                    blockusers.map((item)=>item.block==true? <i
                          class="fa-solid fa-lock fa-lg"
                          style={{ color: "#e32400" }}
                        ></i>:<i
                        class="fa-solid fa-lock fa-lg"
                        style={{ color: "#669c35" }}
                      ></i>  
                        
                    
                    )
                  } */}
                    {data.block === true ? (
                     <i class="fa-solid fa-lock-open fa-lg" style={{color: "#831100"}}></i>
                    ) : (
                      <i
                        class="fa-solid fa-lock fa-lg"
                        style={{ color: "#831100" }}
                      ></i>
                    )}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <div >
    
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
          handler={handleOpen}
          className="h-[80vh]  overflow-auto   "
        
        >
          
          
          
          <DialogHeader className=" fixed top-0 text-white">ORDERS</DialogHeader>
          <DialogBody className="mt-5">
          <DialogHeader className=" ">ORDERS</DialogHeader>
       
         
            {/* <div className=" flex h-[40vh] ml-20  "></div> */}

            

            <div className="flex flex-wrap justify-around gap-4  ">
              {
                orderss.map((data)=>{
                  return(
                    <Card className="w-96 h-[50vh] border-5 border-g ">
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
                {/* <Button
                  onClick={() => {
                    handleOpen("xl"), handleclick(data);
                  }}
                  className="bg-blue-900"
                >
                  Edit
                </Button>
                <div className="mt-3 hover:text-xl">
                  <i
                    class="fa-solid fa-trash fa-xl text-black hover:text-red-900 "
                    onClick={() => {
                      deleteprdt(data.id);
                    }}
                  ></i>
                </div> */}
              </CardFooter>
            </Card>
                  )

                })
              }
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={() => handleOpen(null)}
              className="mr-1 "
            >
              <span>Cancel</span>
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={() => handleOpen(null)}
              type="submit"
            >
              <span className="text-center">Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
}

export default Alluser;
