import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Orderss() {
  const [detorders, setdetorder] = useState([]);
  const id = localStorage.getItem("id");
  console.log(id);

  const orders = async () => {
    const response = await axios.get(`https://plashoeserver.onrender.com/api/orders/${id}`);
    setdetorder(response.data.data.orders);
  };
  useEffect(() => {
    orders();
  }, []);
  console.log(detorders);

  return (
    <>
      <div className="bg-gray w-full h-full border-b-2 bg-gray-200 ">
        <div className="  lg:ml-5 lg:mr-5">
          <Navbar />
        </div>
        <div className=" flex flex-col gap-5  h-full  border-white-900 ml-5 mr-5 bg-white p-3 mt-6 lg:mt-8 rounded   mb-5 sm:mr-5 sm:ml-5">
          {detorders.map((item) => {
            return (
              <div className="flex rounded-lg justify-center items-center mt-5  border p-3 shadow-sm ">
                <div className=" flex   items-center w-full h-full bg-white  ">
                  <div className="   flex items-center  md:flex flex-col justify-start md:float-start   p-2  h-full w-full  bg-white m-10">
                    <h1 className="text-2xl mb-5  ">
                      ORDERDETAILS {item.message}
                    </h1>
                    <div className="">
                      <h1 className="">
                        <span className="">NAME:</span>{" "}
                        <span className="text-blue-900">{item.orderTime}</span>
                      </h1>
                      <h1 className="mt-3">
                        <span className="">PAYERID:</span>{" "}
                        <span className="text-blue-900">{item.payerId}</span>
                      </h1>
                      <h1 className="mt-3">
                        <span className="">PAYMENTID:</span>{" "}
                        <span className="text-blue-900">{item.paymentId}</span>
                      </h1>
                      <h1 className="mt-3">
                        <span className="">PURCHASEDATE:</span>{" "}
                        <span className="text-blue-900">
                          {item.purchaseDate}
                        </span>
                      </h1>
                      <h1 className="mt-3">
                        <span className="">TOTAL PRICE:</span>{" "}
                        <span className="text-blue-900">{item.totalPrice}</span>
                      </h1>
                      {/* <h1 className="mt-3 ">
                      <span className="">TOTAL:</span>{" "}
                      <span className="text-blue-900">{item.total}</span>
                    </h1> */}
                    </div>
                  </div>
                </div>
                <div className="lg:flex-row flex-col  h-[90%] justify-center items-center w-full mt-5 mb-5 overflow-auto ml-5 mr-5 p-3 ">
                  {item.productId.map((val) => {
                    return (
                      <div className="w-full h-full  rounded-lg border  shadow-sm p-2 lg:flex-row justify-around sm:flex flex-col  mb-3 bg-white    ">
                        <div className=" bg-white mt-3">
                          <img
                            src={val.image}
                            alt=""
                            className="sm:w-[200px] lg:w-[300px]  p-2  hover:scale-105 transition-transform duration-300 rounded-lg"
                          />
                        </div>
                        <div className="md:ml-4 mt-3 w-full ">
                          <h1><span className=" font-bold text-gray-700">Name :</span>{val.title}</h1>
                          <h1><span className=" font-bold text-gray-700">Brand :</span>{val.brand}</h1>
                          <h1><span className=" font-bold text-gray-700">Catogery :</span>{val.catogery}</h1>
                          <h1><span className=" font-bold text-gray-700">Price :</span>{val.price}</h1>
                          <h1><span className=" font-bold text-gray-700">Quantity:</span>{val.quantity}</h1>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Orderss;
