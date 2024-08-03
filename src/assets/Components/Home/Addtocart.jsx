import React, { useContext } from "react";
import axios from "axios"
import { contexts } from "../../../App"
import { toast } from 'sonner'






// export const  Setshoeide = async (data,contexts)=>{
//     const { datas, setdata,setshoeid,cartitem, setcartitem } = contexts
//     // const {setcartitem,cartitem}=useContext(contexts)
       
//         try {
//             const usersid = localStorage.getItem("id");
//             const res = await axios.get(`http://localhost:4000/user/${usersid}`);
//             const cartss = res.data.cart;
      
//             const check=cartss.find((itemid)=>itemid.id===data.id)
//             console.log(check,"check");
//             if(check){
//               toast.warning("product alredy exist")
//             }else{
//               const update = [...cartss, data];
//             const reso = await axios.patch(`http://localhost:4000/user/${usersid}`, {
//               cart: update,
//             });
//             console.log(reso.data, "ll");
//             setcartitem(reso.data);
//             toast.success("product added tocart")
      
//             }
      
            
      
//             // toast.warning("productin cart")
      
//             // setcartitem()
//             console.log(cartitem);
      
//             // console.log("adding " ,update);
//           } catch (err) {
//             console.log(err);
//           }
//         };
//         export default Setshoeide
      
      
      
//           // addtocart
      
import React from 'react'

function Addtocart() {
    const { datas,cartitem, setcartitem } = useContext(contexts);
  const addtocarts = async (data) => {
    

    const usersid = localStorage.getItem("id");
    const res = await axios.get(`http://localhost:4000/user/${usersid}`);

  try {
    const cartss = res.data.cart;

    const check=cartss.find((itemid)=>itemid.id===data.id)
    console.log(check,"check");
    if(check){
      toast.warning("product alredy exist")
    }else{
      const update = [...cartss, data];
    const reso = await axios.patch(`http://localhost:4000/user/${usersid}`, {
      cart: update,
    });
    console.log(reso.data, "ll");
    setcartitem(reso.data);
    toast.success("product added tocart")

    }

    

    // toast.warning("productin cart")

    // setcartitem()
    // console.log(cartitem);

    // console.log("adding " ,update);
  } catch (err) {
    console.log(err);
  }
};
console.log(cartitem);
console.log(datas, "data");
        
}

export default Addtocart