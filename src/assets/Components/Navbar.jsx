import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contexts } from "../../App";
import { Input,Button,Badge } from "@material-tailwind/react";

import axios from "axios";
import { toast } from "sonner";
import { Link as ScrollLink } from "react-scroll";
import Admin from "../Pagess/Admin";

function Navbar({setAdmin}) {
  const navigate = useNavigate();
  // const [filterdata,setfilterdata]=useState([])
  const [sdata, setsdata] = useState([]);
  const [searchval, setsearchval] = useState("");
  const { search, setsearh, user, cartnew,datas } = useContext(contexts);
  const [menu, setmenu] = useState(false);
  const [openAdmin,setOPenAdmin]=useState(false)
  const usersss = localStorage.getItem("id");

  // const[cartitem,setcartitem]=useState([])

  function handleAdmin(){
    setAdmin(true)
    navigate("/admin/dashboard")
  
  
  }
  
// useEffect(()=>{
//   const fetchcart=async()=>{
//     const response=await axios.get(`http://localhost:4000/user/${idss}`)
//     setcartitem(response.data.cart)
//     console.log(response.data);
//    }
  
//   fetchcart()
//   },[])
// console.log(cartitem);


  useEffect(() => {  

    if(localStorage.getItem("admin")){
      setOPenAdmin(true)
    }




    const fdatass = async () => {
      const response = await axios.get("http://localhost:4000/datass");
      try {
        setsdata(response.data);
      } catch (error) {
        toast.warning("not fetched");
      }
    };
    fdatass();
  }, []);

  const handleSearch = (e) => {
    let inputWord = sdata.filter((x) =>
      x.title.toLowerCase().includes(searchval.toLowerCase())
    );
    setsearh(inputWord);
    if (inputWord.length >= 0) {
      toast.success("finded");
      navigate("/all");
    } else {
      toast.warning("not find");
    }
  };
  return (
    <div className="bg-white ">
      <div>
        <div className="h-[4vh]  bg-gray-300"></div>
        <div className="mt-2 bg-red  flex justify-around ">
          <div className="flex items-center  ">



            <div className="text-2xl  font-semibold md:block hidden ">
              PLASHOE
            </div>
            <div className="text-l  ml-8 text-gray-700 font-medium md:block hidden ">
              <Link
                to={"/"}
                className="hover:border-b-2 border-pink-500  hover:text-black "
              >
                PLASHOE
              </Link>
            </div>
            <div className="text-l  ml-5  text-gray-700  font-medium md:block hidden   ">
              <Link
                to={"/men"}
                className="hover:border-b-2 border-pink-500  hover:text-black"
              >
                MEN
              </Link>
            </div>
            <div className="text-l ml-5 text-gray-700 font-medium  md:block hidden ">
              <Link
                to={"/women"}
                className="hover:border-b-2 border-pink-500  hover:text-black"
              >
                WOMEN
              </Link>
            </div>
            <div className="text-l  ml-5 text-gray-700 font-medium md:block hidden  ">
              <Link
                to={"/collection"}
                className="hover:border-b-2 border-pink-500  hover:text-black"
              >
                COLLECTION
              </Link>
            </div>
            <div className="text-l  ml-5 text-gray-700 font-medium md:block hidden  ">
              <Link
                to={"/lookbook"}
                className="hover:border-b-2 border-pink-500  hover:text-black"
              >
                LOOKBOOK
              </Link>
            </div>
            <div className="text-l  ml-5 text-gray-700 font-medium hover:border-b-2 border-black  md:block hidden   ">
              
             <Link to={"/wishlist"}><i class="fa-solid fa-heart-circle-check fa-xl" style={{color: "#791a3e"}}></i></Link>
            </div>
            <div className=" ml-4 ">
              <Input
                label="type here..."
                onChange={(e) => {
                  setsearchval(e.target.value);
                }}
                value={searchval}
                className=""
              ></Input>
            </div>
            <div className=" ">
              <Button className="" onClick={handleSearch}>
                {" "}
                Search
              </Button>
            </div>
          </div>
          <div className=" ml-5 mr-2 mt-4 text-gray-700 hover:border-b-2 border-black  font-medium  md:block hidden   ">
          <i class="fa-brands fa-opencart fa-xl cursor-pointer" style={{color: "#791a3e"}}  onClick={() => {
                navigate("/orderss");
              }}></i>
           
          </div>
          <div className="flex items-center ">
            <div className="text-l  ml-4  text-gray-700 font-medium md:block hidden  ">
              <Link
                to={"/ourstory"}
                className="hover:border-b-2 border-pink-500 hover:text-black"
              >
                OURSTORY
              </Link>
            </div>
            <div className="text-l ml-5 text-gray-700  font-medium md:block hidden    ">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={800}
                className="cursor-pointer hover:border-b-2 border-pink-500 hover:text-black"
              >
                CONTACT
              </ScrollLink>
            </div>
            {/* <span>{cartitem.length}</span> */}
            <div
              className="  ml-5 mr-2 font-medium hover:border-b-2 border-black md:block hidden   "
              onClick={() => {
                navigate("/cart");
              }}
            >
               {/* <Badge content={cartitem.length}>
               </Badge> */}
               <i class="fa-solid fa-bag-shopping fa-xl  " style={{color: "#791a3e"}}></i>
              
           
            </div>
            <div className="text-l ml-5 text-gray-700 font-medium hover:border-b-2 border-black md:block hidden   ">
              {usersss ? (
                <div className="mt-2 text-black   ">
                  <i
                    class="fa-solid fa-user-minus fa-xl ml-2     "
                    style={{color: "#791a3e"}}
                    onClick={() => {
                      localStorage.clear("id");
                      toast.warning("loged Out");
                      window.location.reload();
                      navigate("/login");
                    }}
                  ></i>
                  <h1 className="      ">
                    logout
                  </h1>
                </div>
              ) : (
                <div className="mt-2 text-black  ">
                  {" "}
                  <i
                    class="fa-solid fa-user fa-xl ml-2      "
                    style={{color: "#791a3e"}}
                    onClick={() => {
                      navigate("/login");
                    }}
                  ></i>{" "}
                  <h1 className="   ">log-in</h1>
                </div>
              )}
             
            </div>
            {openAdmin && <Button cl onClick={()=>handleAdmin()} className=" bg-black w-25 ml-1">admin</Button>}
           
         
            <div className="sm:hidden">
           
               <i
                class="fa-regular fa-bars fa-2xl  "
                onClick={() => {
                  if (menu) {
                    setmenu(false);
                  } else {
                    setmenu(true);
                  }
                }}
                ></i>
          
    
            
            </div>
            
          </div>
        </div>
      </div>
      {menu}
    </div>
  );
}

export default Navbar;
