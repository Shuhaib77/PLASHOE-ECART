import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { contexts } from "../../../App";

function Dashboard() {
  const [aprdt, setaprdt] = useState([]);
  const [auser, setauser] = useState([]);
  const [aorders, setaorders] = useState([]);
  const [profit, setprofit] = useState([]);
  const [atotal, setatotal] = useState([]);
  const {datas}=useContext(contexts)

  const token =localStorage.getItem("atoken")

  const sum = profit.reduce((acc, val) => acc + val.total, 0);


    const fn = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/revanue",
          {
            headers:{
            Authorization:token
          }
        }
        );
        setaprdt(response.data.data);
        // // 
        // setauser(res.data);
        // const allorders = res.data.flatMap((item) => item.detorder);
        // const b = allorders.map((item) => item.pyprdct);
        // setaorders(b, "edede");
        // const profits = res.data.flatMap((item) => item.detorder);
        // setprofit(profits);
      } catch (error) {
        console.log(error);
      }
    };
  useEffect(() => {
    fn();
  }, []);


  const ordersss=async()=>{
    const res = await axios.get("http://localhost:5000/api/admin/orders",
      {
        headers:{
          Authorization:token
        }

    })

    console.log(res.data);
    setaorders(res.data.allorders)
    
  }
  useEffect(()=>{
    ordersss()
  },[])
  // console.log();
  console.log(aorders);
  
  console.log(aprdt,"yyy");
  

  return (
    <>
      <div className=" flex justify-center m-10  w-100% mt-5  ">
        <div className="  bg-gradient-to-r from-teal-400 to-yellow-200  w-[35vh] h-[15vh] ">
          <div className="ml-3 mt-5  ">
            <i
              class="fa-brands fa-product-hunt fa-2xl"
              style={{ color: "#ffffff" }}
            ></i>
            <h1 className="mt-4">PRODUCT SOLD</h1>
            <h1>
              All sold: <span className="text-2xl"> {aprdt.totalproduct}</span>
            </h1>
          </div>
        </div>
        <div className="w-[35vh] h-[15vh] bg-gradient-to-r from-teal-400 to-yellow-200 ">
          <div className="ml-3 mt-5">
            <i class="fa-solid fa-user fa-2xl" style={{ color: "#ffffff" }}></i>
            <h1 className="mt-4"> PRODUCTS</h1>
            <h1 className="">
              Products : <span className="text-2xl">{datas.length}</span>{" "}
            </h1>
          </div>
        </div>
        <div className="w-[35vh] h-[15vh] bg-gradient-to-r from-teal-400 to-yellow-200 ">
          <div className="ml-3 mt-5">
            <i
              class="fa-solid fa-cart-shopping fa-2xl"
              style={{ color: "#ffffff" }}
            ></i>
            <h1 className="mt-4">ORDERS</h1>
            <h1 className="">
              Allorders: <span className="text-2xl">{aorders.length}</span>{" "}
            </h1>
          </div>
        </div>
        <div className=" w-[35vh] h-[15vh] bg-gradient-to-r from-teal-400 to-yellow-200 ">
          <div className="ml-3 mt-5">
            <i
              class="fa-solid fa-chart-simple fa-2xl"
              style={{ color: "#ffffff" }}
            ></i>
            <h1 className="mt-4">PROFIT</h1>
            <h1>
              {" "}
              All profit: <span className="text-2xl">{aprdt.totalrevanue}</span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
