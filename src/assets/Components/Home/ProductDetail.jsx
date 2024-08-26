import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import { contexts } from '../../../App'
import { Button } from 'react-scroll'

const ProductDetail = () => {
    const {id} =useParams()
    const { datas,addtocarts } = useContext(contexts);
    const [dedata, setdedata] = useState([]);
    
  
    useEffect(() => {
      const res = datas.filter(
        (e) => e.id === id
      );
      setdedata(...res);
    //   console.log("dd",dedata.id)
    }, [id,datas]);
    // console.log("dd",dedata.id);
    
  return (

    <div className='h-[200px]'>
        <Navbar/>
        <div className='bg-blue-gray-50 gap-5 justify-center items-center flex h-[100vh] w-[100%]'>{dedata &&
            <div className='flex flex-col bg-white p-3 rounded-lg shadow-lg'>
               <img src={dedata.image} alt=""  className='min-h-[300px] w-[600px] object-cover p-3 border border-black rounded-lg'/>
           <div className='mt-3 p-3'>
           <div className=' text-gray-700'>{dedata.title}</div>
            <div className= 'font-bold'>{dedata.brand}</div>
           <div className='flex justify-between'>
           <div>{dedata.catogery}</div>
           <div className='text-blue-600'>${dedata.price}</div>
           </div>

           </div>
           <Button className='w-[100%] p-3 bg-blue-600 rounded-lg text-white font-bold' onClick={()=>{
            addtocarts(dedata)
           }}>
            Add to Cart
           </Button>
            </div>}
        </div>
 
        </div>
  )
}

export default ProductDetail