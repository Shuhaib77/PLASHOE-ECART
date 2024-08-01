import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import { contexts } from "../../../App";
import { data } from "autoprefixer";
import { Link, useNavigate } from "react-router-dom";
import User from "../../Pagess/User";


function Homecard() {
  const navigate=useNavigate()
  const { datas, setdata, searchval, setsearchval,User,shoeid,setshoeid,fn } = useContext(contexts);

  // const [datas, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/datass");
        setdata(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    console.log(datas);
  }, []);

  // console.log(datas,"data")
  return (
    <div>
      <div>
        <div className="flex  flex-wrap justify-center gap-10 ">
          {datas.slice(0, 6).map((data) => {
            return (
              <div className="  ">
                <Card className="h-[50vh] w-[50vh] mt-20 gap-1 ">
                  <CardHeader color="blue-gray" className="relative h-56">
                    <img src={data.image} alt="card-image" />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {data.brand}
                    </Typography>
                    <Typography>{data.title}</Typography>
                  </CardBody>
                  <CardFooter className="pt-0 flex justify-between">
                  <Button onClick={()=>{
                    navigate(`/showcomponent/${data.id}`)
                  }} > Read More </Button> 
                   <Button  onClick={()=>{
                    
                    setshoeid(data.id)
                    
                    
                 
                  }} >Add to cart</Button>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
        <div className="flex  mt-10 ">
          <div className="bg-home-bg2 bg-no-repeat ml-5 mr-2 w-full h-[70vh] ">
            <div className=" flex justify-center h-[70vh]  items-center">
              {/* <h1 className="text-white block">Men</h1> <br /> */}
              <Button className="text-black bg-white border-black border-2" onClick={()=>{
                navigate('/collection')
              }}>
                {" "}
                Shop now
              </Button>
            </div>
          </div>
          <div className="bg-home-bg3 bg-no-repeat w-full mr-5 ml-2">
            <div className=" flex justify-center  h-[70vh]  items-center">
              {/* <h1 className="text-white block">Men</h1> */}
              <Button className="text-black bg-white  border-black border-2" onClick={()=>{
                navigate('/collection')
              }}>
                {" "}
                Shop now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {datas.slice(6, 12).map((data) => {
            return (
              <>
                <Card className="h-[50vh] w-[50vh] mt-20  ">
                  <CardHeader color="blue-gray" className="relative h-56">
                    <img src={data.image} alt="card-image" />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {data.brand}
                    </Typography>
                    <Typography>{data.title}</Typography>
                  </CardBody>
                  <CardFooter className="pt-0 flex justify-between" >
                    <Button onClick={()=>{
                    navigate(`/showcomponent/${data.id}`)
                  }} >Read More</Button>
                  <Button onClick={()=>{
                    
                    setshoeid(data.id)
                 
                  }} >Add to cart</Button>
                  </CardFooter>
                </Card>
                
              </>
            
            );
          })}
         
        </div>

        <div className="w-100% h-[60vh] bg-blue-gray-100 flex justify-around items-center mt-10 ml-5 mr-5 ">
          <div className="">
            <p>
              Eu eget felis erat mauris aliquam mattis lacus, arcu <br />
              leo aliquam sapien pulvinar laoreet vulputate sem <br />
              aliquet phasellus egestas felis, est, vulputate <br />
              morbi massa mauris vestibulum dui odio.
            </p>

            <div className="flex mt-10 ">
              <img
                src=" https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-3.svg"
                alt=""
                className="mr-4"
              />
              <img
                src=" https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-2.svg"
                alt=""
                className="mr-4"
              />
              <img
                src=" https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-1.svg"
                alt=""
              />
            </div>
          </div>

          <div>
            <img
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-recycled-circle-iamge.jpg"
              alt=""
            />
          </div>
        </div>
        {/* tosearch */}

        {/* <div className="flex flex-wrap justify-center gap-10">

          {
          datas.filter((sitem)=>{

            if(searchval==""){
              return sitem
            }else if(sitem.title.toLowerCase().includes(searchval.toLowerCase())){
              return sitem

            }

          }
        ).map((itemss)=>{
          return <>
          <Card className="h-[50vh] w-[50vh] mt-20  ">
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={data.image} alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {data.brand}
              </Typography>
              <Typography>{data.title}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </>
  

        })
          }
          
         
           
              
         
        </div> */}
      </div>
    </div>
  );
}

export default Homecard;
