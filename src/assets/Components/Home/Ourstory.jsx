import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Ourstory() {
  return (
    <div>
      <Navbar />

      <div>
        <div className="text-center mt-20">
          <h1 className="text-4xl">Our story</h1>
          <p className="mt-5 text-xl">
            Taking a stylish and sustainable footwear <br /> with a focus on
            creating a positive impact <br /> on both the world and the people
          </p>
        </div>
        <div className="flex justify-center mt-10 mb-20 ">
          <iframe
            className="w-[155vh] h-[80vh]"
            src="https://www.youtube.com/embed/XHOmBV4js_E?si=bacQCg-Ru1dWNgvb"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex justify-around">
          <div>
            <h1 className="text-2xl mb-4">Ethics and equality</h1>
            <p>
              Pellentesque quam convallis massa enim,
              <br /> faucibus ornare sollicitudin gravida justo sit <br />{" "}
              suspendisse pellentesque.
            </p>
          </div>
          <div>
            <h1 className="text-2xl mb-4">Eco-design</h1>
            <p>
              Risus leo molestie a aliquam amet urna orci ,
              <br /> nisl dignissim elementum nibh felis ultrices <br /> vitae
              consectetur.
            </p>
          </div>
          <div>
            <h1 className="text-2xl mb-4">Wildlife Preservation</h1>
            <p>
              Pellentesque nunc ante augue adipiscing ,
              <br /> sed suspendisse amet sed pellentesque <br /> convallis erat
              nibh vivamus.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Ourstory;
