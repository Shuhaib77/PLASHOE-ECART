import React, { useContext } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { contexts } from "../App";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Resposivenav({ openRight, setOpenRight }) {
  // const { openRight, setOpenRight, openDrawerRight, closeDrawerRight } =
  //   useContext(contexts);

  //   const [openRight, setOpenRight] = React.useState(false);

  
const users=localStorage.getItem("id")
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  const navigate=useNavigate()

  return (
    <div className="">
      <Drawer
        placement="right"
        open={openDrawerRight}
        onClose={closeDrawerRight}
        className="p-4"
      >
        <div className="  flex flex-col justify-between items-stretch  ">
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
          <div className="text-2xl mb-5  font-semibold ">PLASHOE</div>
          <div className="text-l mb-3  text-gray-700 font-medium ">
            <Link
              to={"/"}
              className="hover:border-b-2 border-pink-500  hover:text-black "
            >
              PLASHOE
            </Link>
          </div>
          <div className="text-l mb-3     text-gray-700  font-medium  ">
            <Link
              to={"/men"}
              className="hover:border-b-2 border-pink-500  hover:text-black"
            >
              MEN
            </Link>
          </div>
          <div className="text-l mb-3  text-gray-700 font-medium  ">
            <Link
              to={"/women"}
              className="hover:border-b-2 border-pink-500  hover:text-black"
            >
              WOMEN
            </Link>
          </div>
          <div className="text-l mb-3    text-gray-700 font-medium  ">
            <Link
              to={"/collection"}
              className="hover:border-b-2 border-pink-500  hover:text-black"
            >
              COLLECTION
            </Link>
          </div>
          <div className="text-l  mb-3   text-gray-700 font-medium   ">
            <Link
              to={"/lookbook"}
              className="hover:border-b-2 border-pink-500  hover:text-black"
            >
              LOOKBOOK
            </Link>
          </div>


          {/* <Typography variant="h5" color="blue-gray"> */}
          <div className="text-l mb-3    text-gray-700 font-medium  ">
            <Link
              to={"/lookbook"}
              className="hover:border-b-2 border-pink-500  hover:text-black"
            >
              LOOKBOOK
            </Link>

          </div>
          <div className="text-l   text-gray-700 font-medium hover:border-b-2 border-black   " onClick={()=>{
            navigate(()=>{
              if(users){
                navigate("/wishlist");

              }else{
                toast.warning("plss login")
              }
            

            })
          }}>
              <Link >
                <i
                  class="fa-solid fa-heart-circle-check fa-xl"
                  style={{ color: "#791a3e" }}
                ></i>
              </Link>
            </div>
            <div className=" mb-3  mt-4 text-gray-700 hover:border-b-2 border-black  font-medium  ">
            <i
              class="fa-brands fa-opencart fa-xl cursor-pointer"
              style={{ color: "#791a3e" }}
              onClick={() => {
                if(users){
                  navigate("/orderss");

                }else{
                  toast.warning("plss login")
                }
              
              
              }}
            ></i>
          </div>
           <div className="text-l  mb-3   text-gray-700 font-medium   ">
              <Link
                to={"/ourstory"}
                className="hover:border-b-2 border-pink-500 hover:text-black"
              >
                OURSTORY
              </Link>
            </div>
            {/* <div className="text-l ml-5 text-gray-700  font-medium md:block hidden    ">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={800}
                className="cursor-pointer hover:border-b-2 border-pink-500 hover:text-black"
              >
                CONTACT
              </ScrollLink>
            </div> */}
            {/* <span>{cartitem.length}</span> */}
            <div
              className="   font-medium hover:border-b-2 border-black   "
              onClick={() => {
                if(users){
                  navigate("/cart");

                }else{
                  toast.warning("plss login")
                }
              
              }}
            >
              {/* <Badge content={cartitem.length}>
               </Badge> */}
              <i
                class="fa-solid fa-bag-shopping fa-xl  "
                style={{ color: "#791a3e" }}
              ></i>
            </div>

            
            
          {/* </Typography> */}
        </div>
        {/* <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div> */}
      </Drawer>
    </div>
  );
}

export default Resposivenav;
