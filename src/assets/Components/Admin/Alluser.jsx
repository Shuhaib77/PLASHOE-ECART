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

function Alluser() {
  const handleOpen = (value) => setSize(value);
  const [size, setSize] = React.useState(null);
  const [ausers, setausers] = useState([]);
  const [blockusers, setblockusers] = useState([]);
  const [orderss, setorders] = useState([]);
  const [payedprdct, setpayedprdct] = useState([]);
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
//blocking user
  const handleuser = async (id) => {
    const response = await axios.get(`http://localhost:4000/user/${id}`);
    const blocks = response.data.block;
    setblockusers(response.data.block);
    try {
      if (blocks === true && response.data.admin == true) {
        toast.warning("this is a pro admin");
      } else if (blocks === true) {
        (await axios.patch(`http://localhost:4000/user/${id}`, {
          block: false,
        })) && toast.success("user blocked");
      } else {
        (await axios.patch(`http://localhost:4000/user/${id}`, {
          block: true,
        })) && toast.warning("user Unblocked");
      }
      fn();
    } catch (error) {
      console.log(error);
    }
  };

  //vieworders

  const vieworders = async (id) => {
    const response = await axios.get(`http://localhost:4000/user/${id}`);
    setorders(response.data.detorder);
  };

  const payed = orderss.flatMap((item) => item.pyprdct);
  const neww = payed.map((item) => item);
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
              <tr key={index} className=" even:bg-[#2f8f88] ">
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
                      className="bg-[#4db385]  ml-5 font-medium "
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
                    {data.block === true ? (
                      <i
                        class="fa-solid fa-lock-open fa-lg"
                        style={{ color: "#831100" }}
                      ></i>
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
      <div className="">
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
          className="h-[80vh]  overflow-auto "
        >
          <DialogHeader className=" fixed top-0 text-white ">
            ORDERS
          </DialogHeader>
          <DialogBody className="mt-2">
            <DialogHeader className="border-b-4 border-green-900  ">
              ORDERS
            </DialogHeader>
            <div className="flex flex-wrap justify-around gap-4 mt-3  ">
              {neww.length > 0 &&
                neww.map((data) => {
                  return (
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
                      <CardFooter className="flex justify-between gap-7 pt-2"></CardFooter>
                    </Card>
                  );
                })}
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
            {/* <Button
              variant="gradient"
              color="green"
              onClick={() => handleOpen(null)}
              type="submit"
            >
              <span className="text-center">Confirm</span>
            </Button> */}
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
}

export default Alluser;
