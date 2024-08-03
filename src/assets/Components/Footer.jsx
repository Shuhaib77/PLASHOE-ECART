import React from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <div className=" mt-10 ">
        <div className="bg-home-bg4 bg-no-repeat ml-5   w-100% mr-5 flex justify-center items-center  h-[70vh]">
          <div className="text-center">
            <h1 className="text-white text-5xl font-semibold">
              Better for People & the Planet
            </h1>
            <h6 className="text-white text-2xl mt-3 font-medium">
              Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est
              dictum in vulputate
            </h6>
            <Button
              onClick={() => {
                navigate("/women");
              }}
              className="text-black bg-white border-black border-2 mr-4 mt-4"
            >
              {" "}
              Shop women
            </Button>
            <Button
              className="text-black bg-white border-black border-2 ml-4 mt-4"
              onClick={() => {
                navigate("/men");
              }}
            >
              Shop bymen
            </Button>
          </div>
        </div>
        <div className=" flex justify-around mt-10 p-5 mb-10">
          <div>
            <h1>
              {" "}
              <i
                class="fa-solid fa-truck fa-lg"
                style={{ color: "#000000" }}
              ></i>{" "}
              Express Shipping
            </h1>
          </div>
          <div>
            <h1>
              {" "}
              <i
                class="fa-solid fa-arrows-rotate fa-lg"
                style={{ color: "#000000" }}
              ></i>{" "}
              Free Return
            </h1>
          </div>
          <div>
            <h1>Secure Payment</h1>
            <p className="mt-5 "></p>
          </div>
        </div>
        <hr />
        <div className=" flex justify-around mt-20 mb-20 ml-5 p-2  mr-5">
          <div>
            <h1 className="text-2xl font-semibold ">PLASHOE</h1>
            <p className="mt-10">
              Praesent eget tortor sit <br /> risus egestas nulla pharetra{" "}
              <br /> ornare quis bibendum est <br /> bibendum sapien proin
              nascetur
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold ">Shop</h1>
            <div className="mt-10 ">
              <span>Shop Men</span>
              <br />
              <span>Shop WoMen</span>
              <br />
              <span>Lookbook</span>
              <br />
              <span>Giftcard</span>
              <br />
              <span>Sale</span>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">About</h1>

            <div className="mt-10 ">
              <span>our story</span>
              <br />
              <span>Our Materials</span>
              <br />
              <span>Our Value</span> <br />
              <span>Sustainability</span> <br />
              <span>Manufacture</span>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Need Help?</h1>

            <div className="mt-10 ">
              <span>FAQs</span>
              <br />
              <span>Shipping & Returns</span>
              <br />
              <span>Shoe Care</span>
              <br />
              <span>Size Chart</span>
              <br />
              <span>Contact Us</span>
            </div>
          </div>
        </div>
        <div className="w-100% h-[15vh] bg-blue-gray-100 flex justify-around">
          <div>
            <h1 className="p-10">
              © 2024 Recycled Shoe Store. Powered by Recycled Shoe Store
            </h1>
          </div>
          <div>
            <h1 className="p-10">
              <img
                src="https://websitedemos.net/recycled-shoe-store/wp-content/uploads/sites/983/2021/11/payment-icons.png"
                alt=""
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
