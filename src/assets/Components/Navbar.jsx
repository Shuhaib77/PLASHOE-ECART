import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contexts } from "../../App";
import { Input, Button } from "@material-tailwind/react";
import { data } from "autoprefixer";
import axios from "axios";
import { toast } from "sonner";

function Navbar() {
  const navigate = useNavigate(contexts);
  // const [filterdata,setfilterdata]=useState([])
  const [sdata, setsdata] = useState([]);
  const [searchval, setsearchval] = useState("");
  const { search, setsearh } = useContext(contexts);
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
    if (inputWord) {
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
        <div className="mt-3 bg-red  flex justify-between ">
          <div className="flex ">
            <div className="text-2xl mt-5 ml-6 font-semibold ">PLASHOE</div>
            <div className="text-l mt-6 ml-8 text-gray-700 font-medium ">
              <Link to={"/"} className="hover:border-b-2 border-pink-500  hover:text-black ">PLASHOE</Link>
            </div>
            <div className="text-l mt-6 ml-5  text-gray-700  font-medium  ">
              <Link to={"/men"} className="hover:border-b-2 border-pink-500  hover:text-black" >MEN</Link>
            </div>
            <div className="text-l mt-6 ml-5 text-gray-700 font-medium ">
              <Link to={"/women"} className="hover:border-b-2 border-pink-500  hover:text-black">WOMEN</Link>
            </div>
            <div className="text-l mt-6 ml-5 text-gray-700 font-medium ">
              <Link to={"/collection"} className="hover:border-b-2 border-pink-500  hover:text-black">COLLECTION</Link>
            </div>
            <div className="text-l mt-6 ml-5 text-gray-700 font-medium ">
            <Link to={"/lookbook"} className="hover:border-b-2 border-pink-500  hover:text-black">LOOKBOOK</Link>
            </div>
            <div className="text-l mt-6 ml-5 text-gray-700 font-medium ">
              SALE
            </div>
          </div>
          <div>
            <div className="flex ">
              <div className="mt-3">
                <Input
                  label="type here..."
                  onChange={(e) => {
                    setsearchval(e.target.value);
                  }}
                  value={searchval}
                ></Input>
              </div>
              <div className="relative right-20 left-1 top-3">
                <Button className="" onClick={handleSearch}>
                  {" "}
                  Search
                </Button>
              </div>
              <div className="text-l mt-6 ml-8  text-gray-700 font-medium ">
              <Link to={"/ourstory"} className="hover:border-b-2 border-pink-500 hover:text-black">OURSTORY</Link>
              </div>
              <div className="text-l mt-6 ml-8  text-gray-700  font-medium ">
                CONTACT
              </div>
              <div className="text-l mt-6 ml-8 text-gray-700 font-medium hover:border-b-2 border-pink-500  ">
                <i
                  class="fa-solid fa-bag-shopping fa-xl text-black  hover:text-light-green-900"
                  // style={{ color: "#000000" }}
                  
                ></i>
              </div>
              <div
                className="text-l mt-6 ml-8 mr-8 text-gray-700 font-medium hover:border-b-2 border-pink-500  "
                onClick={() => {
                  navigate("/login");
                }}
              >
                <i 
                  class="fa-solid fa-user fa-xl text-black  hover:text-light-green-900 "
                  // style={{ color: "#000000"  }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
