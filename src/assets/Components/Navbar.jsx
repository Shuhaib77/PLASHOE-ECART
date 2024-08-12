import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contexts } from "../../App";
import { Input, Button } from "@material-tailwind/react";

import axios from "axios";
import { toast } from "sonner";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const navigate = useNavigate(contexts);
  // const [filterdata,setfilterdata]=useState([])
  const [sdata, setsdata] = useState([]);
  const [searchval, setsearchval] = useState("");
  const { search, setsearh, user ,cartitem,cartnew} = useContext(contexts);
  console.log(cartnew,"sss");

  const [menu, setmenu] = useState(false);
  const usersss = localStorage.getItem("id");
  console.log("length");
  useEffect(() => {
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
    // console.log(inputWord);
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
            <div className="text-l  ml-5 text-gray-700 font-medium md:block hidden  ">
              SALE
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
              {/* <Link to="contact" smooth={true} duration={500} >CONTACT</Link> */}
            </div>
            {/* <span>{cartitem.length}</span> */}
            <div
              className="text-l  ml-5 mr-2 text-gray-700 font-medium hover:border-b-2 border-black md:block hidden   "
              onClick={() => {
                navigate("/cart");
              }}
            >
              
              <i
                class="fa-solid fa-bag-shopping fa-xl text-black  hover:text-pink-700"
                // style={{ color: "#000000" }}
              ></i>
            {/* <span>{cartnew.length()}</span> */}
            </div>
            <div className="text-l ml-5 text-gray-700 font-medium hover:border-b-2 border-black md:block hidden   ">
              <i
                class="fa-solid fa-user fa-xl text-black  hover:text-pink-700 "
                onClick={() => {
                  if (usersss) {
                    // navigate('/register')
                    localStorage.removeItem("id");

                    toast.warning("loged Out");

                    navigate("/");
                    // toast.warning("loged in");
                  } else {
                    navigate("/login");
                    // toast.warning("logedddd")
                  }
                }}
              ></i>
            </div>

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
                //  style={{color: "#000000"}}
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
