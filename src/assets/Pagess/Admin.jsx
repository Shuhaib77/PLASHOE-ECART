import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Button, Input,Menu,
  MenuHandler,
  MenuList,
  MenuItem,Avatar } from "@material-tailwind/react";
import { useNavigate, Link, useParams } from "react-router-dom";
import Alluser from "../Components/Admin/Alluser";
import Editproducts from "../Components/Admin/Editproducts";
import Addproduct from "../Components/Admin/Addproduct";
import Trackorder from "../Components/Admin/Trackorder";
import Dashboard from "../Components/Admin/Dashboard";
import { toast } from "sonner";
import { contexts } from "../../App";
import axios from "axios";

function Admin() {
  const {
    asearchitem,
    asetsearchitem,
    prdt,
    setprdt,
    lastasearch,
    setlastsearch,
  } = useContext(contexts);
  const navigate = useNavigate();
  const { url } = useParams();

  const id = localStorage.getItem("id");
  const Data = [
    {
      title: "user",
      icon: <i class="fa-solid fa-users  fa-xl mr-3 "></i>,
      url: "allusers",
    },
    {
      title: "Add product",
      icon: <i class="fa-solid fa-cart-plus  fa-xl  mr-2"></i>,
      url: "addprdt",
    },
    {
      title: "Edit product",
      icon: <i class="fa-brands fa-opencart fa-xl mr-2 "></i>,
      url: "editprdt",
    },

    {
      title: "Dashboard",
      icon: <i class="fa-brands fa-dashcube  fa-xl mr-4"></i>,
      url: "dashboard",
    },
  ];

  const[vals,setval]=useState("")
  const [servals,setservals]=useState([])
  // console.log(prdt, "dd");

  // const fn = (e) => {
  //   let searchitems = prdt.filter((x) =>
  //     x.title.toLowerCase().includes(asearchitem.toLowerCase())
  //   );
  //   setlastsearch(searchitems);
  //   // console.log(searchitems);
  //   if (searchitems.length > 0) {
  //     toast.success("finded");
  //     navigate("/adbody");
  //   } else {
  //     toast.warning("not finded");
  //   }
  // };


useEffect(()=>{
  const fndatas=async()=>{
    const res=await axios.get("http://localhost:4000/datass")
    setprdt(res.data)
  }
  fndatas()

},[])



  const adminser=(e)=>{
   const value=e.target.value
    setval(value)
    setservals(prdt.filter((x)=>x.title.toLowerCase().includes(value)))
    
    
}
console.log(prdt);
console.log(servals);


const handleaclick=()=>{

}





  return (
    <>
      <div className="flex  p-5  justify-between w-100% bg-[#38746f] text-white  ">
        <div className="flex ">
          <h1 className="mt-3  ml-6 font-semibold text-xl">PLASHOE</h1>
        </div>
        <div className="flex  ">
          <Input
            className="bg-white "
            label="type here"

            onChange={adminser}
            // onChange={(e) => {
            //   asetsearchitem(e.target.value);
            // }}
          ></Input>
          <div>
            {/* <Button className=" mr-5" onClick={fn}>
              search
            </Button> */}
          </div>
          <div className="mr-5 ml-5">

          
            <i
              class="fa-solid fa-house fa-xl mt-4  cursor-pointer  hover:text-green-200   "
              onClick={() => {
                
                navigate("/")
               
              }}
            ></i>
          </div>
          <div className="mt-2 text-white    hover:text-green-300">

          <Menu placement="bottom-start"  >
          <MenuHandler>
            <div >
            <i class="fa-solid fa-user fa-xl cursor-pointer" style={{color: "#ffffff"}} ></i>


            </div>
         
          </MenuHandler>
          <MenuList onClick={() => {
                navigate("/")
              }}>
           
            <MenuItem>Log Out</MenuItem>
           
          </MenuList>
        </Menu>
            {/* <i
              class="fa-solid fa-user-minus fa-xl ml-2   "
              onClick={() => {
                localStorage.removeItem("id");
                localStorage.clear()
                navigate("/")
                window.location.reload()
                toast.warning("loged Out");
                
              }}
            ></i> */}
            {/* <h1 className=" text-white     ">logout</h1> */}
          </div>
        </div>
      </div>

      <div className="flex">
        <div className=" bg-[#226c66] w-[25vh] mt-1 h-[90vh] ">
          <div className=" flex flex-col gap-10  justify-center w-[25] h-[60vh]  text-white mb-20">
            {Data.map((item) => {
              return (
                <Link
                  to={`/admin/${item.url}`}
                  className=" ml-1  mr-1 hover:bg-white p-2 hover:text-black hover:border rounded  "
                >
                  {item.icon}
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="">
          {url === "editprdt" ? (
            <Editproducts />
          ) : url === "allusers" ? (
            <Alluser />
          ) : url === "addprdt" ? (
            <Addproduct />
          ) : url === "trackorder" ? (
            <Trackorder />
          ) : (
            <Dashboard />
          )}
        </div>
      </div>

      { vals && <div className="bg-white absolute top-20  w-[100] shadow overflow-auto max-h-[100%] rounded   ">
       {servals.map((it)=>{
        return(
          
          <Link to={`/adbody/${it.id}`} className="border border-shadow-lg roonded-4 p-2 flex justify-between  w-[100%] h-[8vh]     " onClick={()=>handleaclick(it.id)}>
            <h1>{it.title}</h1>
            <img src={it.image} alt="" className="object-cover mr-3 " />
          
          </Link>
        )
      })}
        
      </div>
      }
    </>
  );
}

export default Admin;
