import axios from "axios";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [aprdt, setaprdt] = useState([]);
  const [auser, setauser] = useState([]);
  const [aorders, setaorders] = useState([]);
  const [profit, setprofit] = useState([]);
  const [atotal, setatotal] = useState([]);

  const sum = profit.reduce((acc, val) => acc + val.total, 0);

  useEffect(() => {
    const fn = async () => {
      try {
        const response = await axios.get("http://localhost:4000/datass");
        setaprdt(response.data);
        const res = await axios.get("http://localhost:4000/user");
        setauser(res.data);
        const allorders = res.data.flatMap((item) => item.detorder);
        const b = allorders.map((item) => item.pyprdct);
        setaorders(b, "edede");
        const profits = res.data.flatMap((item) => item.detorder);
        setprofit(profits);
      } catch (error) {
        console.log(error);
      }
    };
    fn();
  }, []);

  return (
    <>
      <div className="flex justify-around w-[150vh] mt-5 ">
        <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 w-[35vh] h-[15vh]">
          <div className="ml-3 mt-5">
            <i
              class="fa-brands fa-product-hunt fa-2xl"
              style={{ color: "#ffffff" }}
            ></i>
            <h1 className="mt-4">PRODUCT</h1>
            <h1>
              All products: <span className="text-2xl"> {aprdt.length}</span>
            </h1>
          </div>
        </div>
        <div className="w-[35vh] h-[15vh] bg-gradient-to-r from-teal-400 to-yellow-200 ">
          <div className="ml-3 mt-5">
            <i class="fa-solid fa-user fa-2xl" style={{ color: "#ffffff" }}></i>
            <h1 className="mt-4">USER</h1>
            <h1 className="">
              All users : <span className="text-2xl">{auser.length}</span>{" "}
            </h1>
          </div>
        </div>
        <div className="w-[35vh] h-[15vh] bg-gradient-to-r from-cyan-500 to-blue-500">
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
              All profit: <span className="text-2xl">{sum}</span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
