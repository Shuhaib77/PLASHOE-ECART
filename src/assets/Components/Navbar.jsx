import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { contexts } from "../../App";

function Navbar() {
  const navigate=useNavigate()

  
  
  return (
    <div className=" ">
      <div>
        <div className="h-[4vh]  bg-gray-300"></div>
        <div className="mt-3 bg-red  flex justify-between ">
          <div className="flex ">
            <div className="text-2xl mt-5 ml-6 font-semibold ">PLASHOE</div>
            <div className="text-l mt-6 ml-8 text-gray-700 font-medium ">
              PLASHOE
            </div>
            <div className="text-l mt-6 ml-5  text-gray-700  font-medium ">
              MEN
            </div>
            <div className="text-l mt-6 ml-5 text-gray-700 font-medium ">
              WOMEN
            </div>
            <div className="text-l mt-6 ml-5 text-gray-700 font-medium ">
              COLTIONLEC
            </div>
            <div className="text-l mt-6 ml-5 text-gray-700 font-medium ">
              LOOKBOOK
            </div>
            <div className="text-l mt-6 ml-5 text-gray-700 font-medium ">
              SALE
            </div>
          </div>
          <div>
            <div className="flex ">
              <div className="text-l mt-6 ml-8  text-gray-700 font-medium ">
                OUTSTORY
              </div>
              <div className="text-l mt-6 ml-8  text-gray-700  font-medium ">
                CONTACT
              </div>
              <div className="text-l mt-6 ml-8 text-gray-700 font-medium ">
                <i
                  class="fa-solid fa-bag-shopping fa-2xl"
                  style={{ color: "#000000" }}
                ></i>
              </div>
              <div className="text-l mt-6 ml-8 mr-8 text-gray-700 font-medium  " onClick={()=>{navigate('/login')}} >
                <i
                  class="fa-solid fa-user fa-2xl"
                  style={{ color: "#000000" }}
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
