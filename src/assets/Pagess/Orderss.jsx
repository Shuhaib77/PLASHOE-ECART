import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Orderss() {
  const [detorders, setdetorder] = useState([]);
  const id = localStorage.getItem("id");
  useEffect(() => {
    const orders = async () => {
      const response = await axios.get(`http://localhost:4000/user/${id}`);
      setdetorder(response.data.detorder);
    };
    orders();
  }, []);

  return (
    <>
      <div className="bg-gray-200 h-full border-b-2   ">
        <div className=" border-b-4 p-5">
          <Navbar />
        </div>
        {detorders.map((item) => {
          return (
            <div className="flex justify-center items-center  w-[170vh] h-full  border-white-900 bg-white ml-5 mt-10 mb-5  ">
              <div className=" flex justify-center items-center w-[60vh] h-[30vh]  ">
                <div className=" flex flex-col  justify-center  h-full w-[50vh] bg-white   ">
                  <h1 className="text-2xl mb-5">ORDERDETAILS</h1>
                  <div className="">
                    <h1 className="">
                      <span className="text-red-900">NAME:</span>{" "}
                      <span className="text-blue-900">{item.name}</span>
                    </h1>
                    <h1 className="mt-3">
                      <span className="text-red-900">ADDRESS:</span>{" "}
                      <span className="text-blue-900">{item.address}</span>
                    </h1>
                    <h1 className="mt-3">
                      <span className="text-red-900">PHONE:</span>{" "}
                      <span className="text-blue-900">{item.phone}</span>
                    </h1>
                    <h1 className="mt-3">
                      <span className="text-red-900">ADDRESS:</span>{" "}
                      <span className="text-blue-900">{item.address}</span>
                    </h1>
                    <h1 className="mt-3">
                      <span className="text-red-900">PAY METHOD:</span>{" "}
                      <span className="text-blue-900">{item.payment}</span>
                    </h1>
                    <h1 className="mt-3">
                      <span className="text-red-900">TOTAL:</span>{" "}
                      <span className="text-blue-900">{item.total}</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  justify-center items-center w-[100vh] h-full mt-5 mb-5  bg-white ">
                {item.pyprdct.map((val) => {
                  return (
                    <div className="w-[100vh] h-[25vh]  flex justify-between border-2 mb-3  border-blue-900 mr-5 ">
                      <div className="ml-4 mt-3">
                        <h1>{val.title}</h1>
                        <h1>{val.brand}</h1>
                        <h1>{val.catogery}</h1>
                        <h1>{val.price}</h1>
                        <h1>{val.title}</h1>
                      </div>
                      <div className="h-[20vh w-[30vh]">
                        <img src={val.image} alt="" />
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
