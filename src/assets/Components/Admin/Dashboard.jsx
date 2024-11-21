import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { contexts } from "../../../App";
import Chart from 'chart.js/auto';

function Dashboard() {
  const [aprdt, setaprdt] = useState([]);
  const [aorders, setaorders] = useState([]);
  const [profit, setprofit] = useState([]);
  const { datas } = useContext(contexts);
  const token = localStorage.getItem("atoken");
  const [ausers, setausers] = useState([]);
  const chartRef = useRef(null);

  // Fetch users data
  const userss = async () => {
    try {
      const response = await axios.get("https://plashoeserver.onrender.com/api/admin/users", {
        headers: { Authorization: token },
      });
      setausers(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch revenue data
  const fn = async () => {
    try {
      const response = await axios.get("https://plashoeserver.onrender.com/api/admin/revanue", {
        headers: { Authorization: token }
      });
      setaprdt(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch orders data
  const ordersss = async () => {
    try {
      const res = await axios.get("https://plashoeserver.onrender.com/api/admin/orders", {
        headers: { Authorization: token }
      });
      setaorders(res.data.allorders);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch data on mount
  useEffect(() => {
    userss();
    fn();
    ordersss();
  }, []);

  console.log(ausers.length);
  

  // Set up Chart.js
  // useEffect(() => {
  //   if (chartRef.current) {
  //     new Chart(chartRef.current, {
  //       type: 'bar',
  //       data: {
  //         labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
  //         datasets: [{
  //           label: 'My First Dataset',
  //           data: [11, 16, 7, 3, 14],
  //           backgroundColor: [
  //             'rgb(255, 99, 132)',
  //             'rgb(75, 192, 192)',
  //             'rgb(255, 205, 86)',
  //             'rgb(201, 203, 207)',
  //             'rgb(54, 162, 235)'
  //           ]
  //         }]
  //       },
  //       options: {
  //         responsive: true,
  //         maintainAspectRatio: false,
  //       }
  //     });
  //   }
  // }, []);

  return (
    <>
      <div className="flex justify-center m-10 w-100% mt-5">
        {/* Dashboard cards */}
        <div className="bg-gradient-to-r from-teal-400 to-yellow-200 w-[35vh] h-[15vh] mr-4">
          <div className="ml-3 mt-5">
            <i className="fa-brands fa-product-hunt fa-2xl" style={{ color: "#ffffff" }}></i>
            <h1 className="mt-4">ALL USERS </h1>
            <h1>
              All users: <span className="text-2xl"> {ausers?.length}</span>
            </h1>
          </div>
        </div>

        <div className="w-[35vh] h-[15vh] bg-gradient-to-r from-teal-400 to-yellow-200 mr-4">
          <div className="ml-3 mt-5">
            <i className="fa-solid fa-user fa-2xl" style={{ color: "#ffffff" }}></i>
            <h1 className="mt-4">PRODUCTS</h1>
            <h1>
              Products: <span className="text-2xl">{datas?.length}</span>
            </h1>
          </div>
        </div>

        <div className="w-[35vh] h-[15vh] bg-gradient-to-r from-teal-400 to-yellow-200 mr-4">
          <div className="ml-3 mt-5">
            <i className="fa-solid fa-cart-shopping fa-2xl" style={{ color: "#ffffff" }}></i>
            <h1 className="mt-4">ORDERS</h1>
            <h1>
              All orders: <span className="text-2xl">{aorders?.length}</span>
            </h1>
          </div>
        </div>

        <div className="w-[35vh] h-[15vh] bg-gradient-to-r from-teal-400 to-yellow-200">
          <div className="ml-3 mt-5">
            <i className="fa-solid fa-chart-simple fa-2xl" style={{ color: "#ffffff" }}></i>
            <h1 className="mt-4">PROFIT</h1>
            <h1>
              All profit: <span className="text-2xl">{aprdt?.totalrevanue}</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Chart section */}
      {/* <div className="flex justify-center mt-10">
        <div className="w-[70vh] h-[40vh]">
          <canvas ref={chartRef} className="w-full h-full" />
        </div>
      </div> */}
    </>
  );
}

export default Dashboard;
