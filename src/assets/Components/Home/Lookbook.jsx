import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function Lookbook() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="flex justify-center mt-20">
          <h1 className="text-5xl">LooKbook</h1>
        </div>
        <div className="mt-20 ">
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-4.jpg"
            alt=""
          />
          <div className="flex mt-20 justify-between">
            <h1 className="ml-10">Fall/winter 2021</h1>
            <p className="mr-10">
              Elementum donec leo vulputate sit proin suspendisse <br />{" "}
              malesuada neque proin gravida ut platea vitae duis hac <br /> hac
              vel id ipsum ultricies ut faucibus ultrices
            </p>
          </div>
          <div className="mt-20">
            <img
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-3.jpg"
              alt=""
            />
            <div className="flex mt-20 justify-between">
              <h1 className="ml-10">Spring/Summer 2021</h1>
              <p className="mr-10">
                Elementum donec leo vulputate sit proin suspendisse <br />{" "}
                malesuada neque proin gravida ut platea vitae duis hac hac{" "}
                <br /> vel id ipsum ultricies ut faucibus ultrices.
              </p>
            </div>
            <div className="mt-20">
              <img
                src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-2.jpg"
                alt=""
              />
              <div className="flex mt-20 justify-between">
                <h1 className="ml-10">Go & Play</h1>
                <p className="mr-10">
                  Elementum donec leo vulputate sit proin suspendisse <br />{" "}
                  malesuada neque proin gravida ut platea vitae duis hac hac{" "}
                  <br /> vel id ipsum ultricies ut faucibus ultrices.
                </p>
              </div>
              
            </div>
            <div className="mt-20">
              <img
                src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-1.jpg"
                alt=""
              />
              <div className="flex mt-20 justify-between">
                <h1 className="ml-10">Adventurer Gear</h1>
                <p className="mr-10">
                  Elementum donec leo vulputate sit proin suspendisse <br />{" "}
                  malesuada neque proin gravida ut platea vitae duis hac hac{" "}
                  <br /> vel id ipsum ultricies ut faucibus ultrices.
                </p>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}

export default Lookbook;
