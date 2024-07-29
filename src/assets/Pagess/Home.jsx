import React from "react";
import { Button } from "@material-tailwind/react";
import Navbar from "../Components/Navbar";
import Homebanner from "../Components/Home/Homebanner";
import Homecard from "../Components/Home/Homecard";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="">
      <div className=" ">
        <div className="">
          <Navbar />
        </div>
        <div className="">
          <Homebanner />
        </div>
        <div>
          <Homecard />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
