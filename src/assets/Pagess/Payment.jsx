import React from "react";
import { Input, Textarea ,Button} from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
function Payment() {
  const location=useLocation()
  const id=localStorage.getItem("id")
  const {grandtotal} =location.state;
  console.log(id);
  
  const {values,handleChange,handleBlur,handleSubmit}=useFormik({
    initialValues:{
      name:"",
      address:"",
      phone:"",
      payment:"",
      total:grandtotal
    },
    onSubmit:async(values)=>{
      const response= await axios.get(`http://localhost:4000/user/${id}`)
      const detail=response.data.detorder
      const upd=[...detail,values]
      await axios.patch(`http://localhost:4000/user/${id}`,{detorder:upd})

    }
  })
  
  
  
  return (
    <div className="">
      <h1 className="text-center mt-10 ">Payment</h1>
      <div className="flex items-center justify-center h-[90vh] ">
        <div className=" h-[60vh] w-[45vh]   ">
          <div className="w-[45vh] h-[10vh] bg-blue-900 pt-5 mb-2 flex justify-around ">
            <h1 className="text-white text-xl text-center ">TOTAL PRICE: </h1>
            <h1 className="text-white text-3xl text-center ">${grandtotal}</h1>
          </div>
         <form action="" onSubmit={handleSubmit}>
         <Input label="name" className="mt border-3  " value={values.name} name="name" onChange={handleChange}></Input>
          <Textarea label="address" value={values.address} name="address" onChange={handleChange}  ></Textarea>
          <Input label="phone" type="text" onChange={handleChange} name="phone" ></Input>
          <div className="flex justify-evenly mt-4 mb-4">
            <div >
              <label className="font-normal text-blue-900  ">CARD</label>
              <input type="radio" name="payment" value='CARD'  className="ml-2" checked={values.payment==='CARD'} onChange={handleChange}  />
            </div>
            <div>
              <label className="font-normal text-blue-900  ">UPID</label>
              <input type="radio" name="payment" value='UPID' className="ml-2" checked={values.payment==='UPID'} onChange={handleChange}/>
            </div>

            <div className="mb-3">
              <label className="font-normal  text-blue-900 " checked={values.payment==='COD'} value='COD'  onChange={handleChange}>COD</label>
              <input type="radio" name="payment" className="ml-2" />
            </div>
           
            
          </div>
          <div className="mb-4">
            <h1>{values.total}</h1>
          {/* <Input label="phone" type="text" value={values.total} onChange={handleChange} name="total" ></Input> */}
          </div>
          
        <div className="text-center ">
        <Button className="bg-blue-600 w-[45vh]" type="submit">PROCEED TO PAY</Button>
        </div>
         </form>
         <div>
          <h1>{values.address}</h1>
          <h1>{values.name}</h1>
          <h1>{values.phone}</h1>
          <h1>{values.payment}</h1>
         </div>
          {/* <Input label="name"></Input>
          <Input label="phone" type="text"></Input> */}
        </div>
      </div>
    </div>
  );
}

export default Payment;
