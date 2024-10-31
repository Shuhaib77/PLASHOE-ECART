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
    const response = await axios.get(`http://localhost:5000/api/orders/${id}`);
    setdetorder(response.data.data.orders);
  };
  useEffect(() => {
    orders();
  }, []);
  console.log(detorders);

  return (
    <>
      <div className="bg-gray-200 w-full h-full border-b-2   ">
        <div className=" border-b-4">
          <Navbar />
        </div>
        {detorders.map((item) => {
          return (
            <div className=" flex flex-col items-center md:flex-row justify-center  w-[175h] h-full  border-white-900 bg-white  md:border border-black   mt-10 mb-5 mr-5 md:ml-5">
              <div className=" flex  items-center w-full h-full  ">
                <div className="   flex items-center  md:flex flex-col justify-start md:float-start  border-2 p-2  h-full w-full  bg-white m-10">
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
                      <span className="text-blue-900">{item.purchaseDate}</span>
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
              <div className="flex flex-col  justify-center items-center w-full h-full mt-5 mb-5  bg-white ">
                {item.productId.map((val) => {
                  return (
                    <div className="w-full h-full  flex justify-around border-2 mb-3 bg-white border-gray-900  md:mr-5 ml-10 mr-10 md:ml-5 ">
                      <div className="md:ml-4 mt-3">
                        <h1>{val.title}</h1>
                        <h1>{val.brand}</h1>
                        <h1>{val.catogery}</h1>
                        <h1>{val.price}</h1>
                        <h1>{val.quantity}</h1>
                        <h1>{val.title}</h1>
                      </div>
                      <div className="h-[20vh w-[30vh] bg-white mt-3 ml-5 mb-5 mr-5 ">
                        <img src={val.image} alt="" className="" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Orderss;
