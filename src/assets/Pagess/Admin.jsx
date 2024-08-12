import React from "react";
import Navbar from "../Components/Navbar";
import { Button, Input } from "@material-tailwind/react";
import { useNavigate, Link, useParams } from "react-router-dom";
import Alluser from "../Components/Admin/Alluser";
import Editproducts from "../Components/Admin/Editproducts";
import Addproduct from "../Components/Admin/Addproduct";
import Trackorder from "../Components/Admin/Trackorder";
import Dashboard from "../Components/Admin/Dashboard";

function Admin() {
  const navigate = useNavigate();
  const {url}=useParams()
  
console.log(url,"vals")
  const Data = [
    // {title:"user",icon: <i class="fa-solid fa-users fa-flip fa-xl mr-3 "></i>},
    // {title:"user",icon: <i class="fa-solid fa-users fa-flip fa-xl mr-3 "></i>},
    {
      title: "user",
      icon: <i class="fa-solid fa-users fa-flip fa-xl mr-3 "></i>,
       url:"allusers"
    },
    {
      title: "Add product",
      icon: <i class="fa-solid fa-cart-plus fa-flip fa-xl  mr-2"></i>,
      url:"addprdt"
    },
    {
      title: "Edit product",
      icon: <i class="fa-brands fa-opencart fa-flip fa-xl mr-2 "></i>,
       url:"editprdt"
    },
    {
      title: "Track order",
      icon: <i class="fa-solid fa-map-location-dot fa-flip fa-lg mr-4"></i>,
       url:"trackorder"
    },
    {
      title: "Dashboard",
      icon: <i class="fa-brands fa-dashcube fa-flip fa-xl mr-4"></i>,
      url:"dashboard"
    },
    
  ];

  return (
    <>
   
      {/* <Navbar/> */}
      <div className="flex  p-5  justify-between  bg-blue-900 text-white  ">
        <div className="flex ">
          <h1 className="mt-3  ml-6 font-semibold text-xl">PLASHOE</h1>
        </div>
        <div className="flex">
          <Input className="bg-white" label="type here"></Input>
          <Button className="">search</Button>
          <div>
            <i
              class="fa-solid fa-house fa-xl mt-4  ml-3 cursor-pointer  "
              onClick={() => {
                navigate("/");
              }}
            ></i>
          </div>
        </div>
      </div>

     <div className="flex">
     <div className="mt-1   bg-blue-900 w-[25vh] h-[90vh] ">
        <div className=" flex flex-col justify-center h-[60vh]  text-white mb-20">
          {Data.map((item) => {
            return (
              <Link
              to={`/admin/${item.url}`}
              className="mt-10 ml-1 mr-1 hover:bg-white hover:p-2 hover:text-black hover:border rounded hover:pl-2"
            >
              {item.icon}
              {item.title}
            </Link>
            
            );
          })}
        </div>
        
      </div>
      <div className="">
        {url==='editprdt'? <Editproducts/>:url==='allusers'?<Alluser/>:url==='addprdt'?<Addproduct/>:url==='trackorder'?<Trackorder/>:<Dashboard/>}
       
      </div>
     </div>
     
   
 
    </>
  );
}

export default Admin;
