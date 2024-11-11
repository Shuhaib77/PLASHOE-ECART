import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {  } from "react";
import { contexts } from "../../../App";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Collection() {
  const { addtocarts, datas, wishlists, wlitem } = useContext(contexts);
  const navigate = useNavigate();
  const ids = localStorage.getItem("id");

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(datas.length / itemsPerPage);

  // Slice the data array to get items for the current page
  const paginatedData = datas.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Change page function
  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <div>
        <div className="">
          <Navbar />
        </div>
        <div className="w-full h-full bg-gray-300 flex justify-center items-center mt-5">
          <div className="w-full m-6 h-full mb-8 mt-8 bg-white">
            <h1 className="text-center md:text-left text-4xl mt-10 md:ml-10 text-light-green-800">
              TRENDINGS
            </h1>

            <div className="flex flex-wrap justify-around items-center">
              {paginatedData.map((data) => (
                <div key={data._id} className="mt-5">
                  <Card className="h-full w-[50vh] mt-20 gap-x-10">
                    <CardHeader color="" className="relative h-56">
                      <i
                        className="fa-solid fa-heart ml-4"
                        style={{
                          color: wlitem.some(
                            (item) => item.productid?._id === data?._id
                          )
                            ? "red"
                            : "blue",
                        }}
                        onClick={() => wishlists(data)}
                      ></i>
                      <img src={data.image} alt="card-image" />
                    </CardHeader>
                    <CardBody>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2"
                      >
                        {data.brand}
                      </Typography>
                      <Typography>{data.title}</Typography>
                      <Typography>{data.catogery}</Typography>
                      <Typography>{data.price}</Typography>
                    </CardBody>
                    <CardFooter className="pt-0 flex justify-between">
                      <Button
                        onClick={() => navigate(`/showcomponent/${data._id}`)}
                      >
                        Read More
                      </Button>
                      <Button
                        onClick={() => {
                          if (ids) {
                            addtocarts(data);
                          } else {
                            toast.warning("Plss login");
                          }
                        }}
                      >
                        Add to cart
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-8">
              <button
                className="px-4 py-2 bg-gray-300 mr-2"
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
              <button
                className="px-4 py-2 bg-gray-300 ml-2"
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Collection;
