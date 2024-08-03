import React from "react";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

function Homebanner() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="bg-home-bg bg-no-repeat h-[100vh] ml-8 mr-8 mt-7 flex  items-center">
          {/* <div className='   '> */}

          <div className="text-white font-medium   ml-20">
            <h1 className="font-semibold text-5xl mb-4 ">Love The Planet</h1>
            <h1 className="font-semibold text-5xl mb-3">We Walk On</h1>
            <p className="text-xl">
              Bibendum fermentum, aenean donec pretium aliquam blandit <br />{" "}
              tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.
            </p>
            <div className="mt-5 ">
              <Button
                className="bg-white text-black  border-black border-2"
                onClick={() => {
                  navigate("/men");
                }}
              >
                {" "}
                shop Men
              </Button>
              <Button
                className="ml-4 text-black bg-white  border-black border-2"
                onClick={() => {
                  navigate("/women");
                }}
              >
                {" "}
                shop woMen
              </Button>
            </div>
          </div>

          {/* </div> */}
        </div>

        <div className=" flex justify-around">
          <div>
            <h1 className="font-light mt-10"> As seen in:</h1>
          </div>
          <div>
            <img
              src=" https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-5.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src=" https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-4.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-3.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src=" https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-2.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-1.svg"
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="flex justify-center mt-10 mb-10 ">
          <div className="mr-10 mt-20">
            <img
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-home-about-image.jpg"
              alt=""
            />
          </div>
          <div className="mt-20 pt-20 ">
            <h6 className="font-light text-red-800 mt-10 ">About me</h6>
            <h1 className="font-medium text-5xl mt-5">
              Selected materials <br /> desgined for comfort <br /> and
              sustainablity
            </h1>
            <h6 className="mt-5 mb-5">
              Nullam auctor faucibus ridiculus dignissim sed et <br /> auctor
              sed eget auctor nec sed elit nunc, magna non <br /> urna amet ac
              neque ut quam enim pretium risus <br /> gravida ullamcorper
              adipiscing at ut magna.
            </h6>

            <Link className="border-light-blue-600 border-b-2 mt-5 text-">
              {" "}
              Read more{" "}
            </Link>
          </div>
        </div>
        <div className="h-[90vh] bg-gray-300 w-100% m-6">
          <div className="p-10 text-center  ">
            <h1 className="font-semibold text-4xl mt-5  ">
              See how your shoes are made
            </h1>
            <h6 className=" mt-5">
              Urna, felis enim orci accumsan urna blandit egestas mattis egestas
              feugiat viverra ornare donec <br /> adipiscing semper aliquet
              integer risus leo volutpat nulla enim ultrices
            </h6>
          </div>
          <div className="flex items-center justify-center m-6">
            <div className="flex mt-10">
              <div className=" ml-5 mt-5">
                <h1 className="mb-3">
                  01. <br /> Pet canvas <br />
                  Morbi eget bibendum sit adipiscing morbi ac nisl vitae
                  maecenas nulla cursus
                </h1>
                <hr />
                <h1 className="mt-3">
                  02. <br />
                  Algae foam + vegan glue <br />
                  Enim tincidunt donec vulputate magna pharetra mattis in
                </h1>
              </div>
              <div>
                <img
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-how-shoes-are-made-image.png"
                  alt=""
                />
              </div>
              <div className="ml-3 mt-5">
                <h1 className="mb-3">
                  01. <br /> Pet canvas <br />
                  Morbi eget bibendum sit adipiscing morbi ac nisl vitae
                  maecenas nulla cursus
                </h1>
                <hr />
                <h1 className="mt-5">
                  02. <br />
                  Algae foam + vegan glue <br />
                  Enim tincidunt donec vulputate magna pharetra mattis in
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-5">
          <h1 className="ml-5 text-2xl text-red-800">Our best seller</h1>
          <h1 className="border-b-2 border-blue-800 text-2xl text-red-800 mr-5">
            {" "}
            View all best seller
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Homebanner;
