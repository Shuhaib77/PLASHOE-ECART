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
  console.log(detorders, "gsfs");

  return (
    <>
      <Navbar/>
      <div>
        {detorders.map((item) => {
          return (
            <div className="flex justify-center items-center  w-full h-full ">
              <div className=" flex justify-center i  w-[70vh] h-[100vh]">
                <div className=" flex flex-col items-center border h-[40vh] w-[50vh] mt-10  ">
                  <h1 className="text-2xl">ORDERDETAILS</h1>
                  <div className="mt-10">
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
              <div className="flex flex-col  justify-around items-center w-[100vh] h-[100vh] overflow-auto ">
                <h1 className="text-2xl text-blue-900 border-b-4 border-red-900 pb-3">
                  ORDERD PRODUCTS
                </h1>
                {Array.isArray(item.pyprdct) &&
                  item.pyprdct.map((val) => {
                    return (
                      <div className="w-[100vh] h-[20vh] border flex justify-between border-3 border-blue-900 ">
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
      <Footer/>
    </>
  );
}

export default Orderss;
