import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contexts } from "../../App";
import { Input,Button } from "@material-tailwind/react";
import { data } from "autoprefixer";
import axios from "axios";
import { toast } from "sonner";

function Navbar() {
  const navigate = useNavigate(contexts);
  // const [filterdata,setfilterdata]=useState([])
  const [sdata,setsdata]=useState([])
  const [searchval,setsearchval]=useState("")
  const{search,setsearh}=useContext(contexts)
     useEffect(()=>{
      const fdatass=async ()=>{
        const response=await axios.get("http://localhost:4000/datass")
        try{
          setsdata(response.data)


        }catch(error){
          toast.warning("not fetched")

        }
      
      }
      fdatass()
      
      

     },[])
 
  const handleSearch = (e) => {
    let inputWord=sdata.filter((x)=>x.title.toLowerCase().includes(searchval.toLowerCase()));
    setsearh(inputWord.length>0);
    console.log(inputWord);
    // if(inputWord){
    //   toast.success("finded")
    //   // navigate('/all')
    // }else{
    //   toast.warning("not find")
    // }
    
    
  }
  
    

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
              <div className="mt-3">
                <Input label="type here..." onChange={(e)=>{
                  setsearchval(e.target.value)
                }}
                value={searchval}
                ></Input> 
              </div>
              <div className="relative right-20 left-1 top-3">
              <Button className="" onClick={handleSearch}> Search</Button>
              </div>
              <div className="text-l mt-6 ml-8  text-gray-700 font-medium ">
                OUTSTORY
              </div>
              <div className="text-l mt-6 ml-8  text-gray-700  font-medium ">
                CONTACT
              </div>
              <div className="text-l mt-6 ml-8 text-gray-700 font-medium ">
                <i
                  class="fa-solid fa-bag-shopping fa-xl"
                  style={{ color: "#000000" }}
                ></i>
              </div>
              <div
                className="text-l mt-6 ml-8 mr-8 text-gray-700 font-medium  "
                onClick={() => {
                  navigate("/login");
                }}
              >
                <i
                  class="fa-solid fa-user fa-xl"
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
