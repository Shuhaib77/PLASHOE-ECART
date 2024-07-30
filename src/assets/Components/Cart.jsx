import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { contexts } from '../../App'
import { useParams } from 'react-router-dom'
import useLocalStorageState from 'use-local-storage-state'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

function Cart() {
    const {datas}=useContext(contexts)
    const cartpid=useParams()
    console.log(cartpid);

 
    const [cartitem,setcartitem]=useLocalStorageState([])
    useEffect(()=>{
        const res=datas.filter((products)=>products.id===cartpid)
        setcartitem(res)
    },[datas])
    console.log(datas);
  return (
    <div>
        <Navbar/>
        <div>
            <div>
                <h1>hii cartt</h1>
                <div className="flex  flex-wrap justify-center gap-10 ">
          {cartitem.map((data) => {
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
                   <Button onClick={()=>{
                    navigate(`/cart/${data.id}`)
                  }} >Add to cart</Button>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>

            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Cart