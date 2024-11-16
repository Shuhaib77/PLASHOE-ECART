import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import { contexts } from "../../../App";
import { Button } from "react-scroll";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const { datas, addtocarts } = useContext(contexts);
  const [dedata, setdedata] = useState([]);

  const ids = localStorage.getItem("id");

  useEffect(() => {
    const res = datas.filter((e) => e._id === id);
    setdedata(...res);
  }, [id, datas]);

  return (
    <div className="bg-blue-gray-50 h-full">
      <Navbar />
      <div className=" gap-5 flex justify-center items-center  h-[90vh] w-full">
        {dedata && (
          <div className=" bg-white p-3 w-[150vh] ml-5 mr-5 lg:flex-row justify-around items-center sm:flex flex-col h-[70vh]     rounded-lg shadow-lg ">
            <div className="mt-10 w-full">
              <img
                src={dedata.image}
                alt=""
                className=" w-[500px] object-cover p-3  rounded-lg"
              />
            </div>
            <div className="mt-10 w-full p-3 border-l-2 text-center">
              <div className=" text-gray-700">{dedata.title}</div>
              <div className="font-bold">{dedata.brand}</div>
              {/* <div className="flex justify-between items-end"> */}
                <div>{dedata.catogery}</div>
              {/* </div> */}
              <div>
                <div className="text-blue-600 mt-5">${dedata.price}</div>
                <Button
                  className=" bg-blue-600 p-3 rounded-lg text-white font-bold mt-5"
                  onClick={() => {
                    if (ids) {
                      addtocarts(dedata);
                    } else {
                      toast.warning("Plss login");
                    }
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
