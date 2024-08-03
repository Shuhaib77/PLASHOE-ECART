// import axios from "axios"
// import { useContext } from "react"
// import { contexts } from "../../../App"


// const {setcartitem,cartitem}=useContext(contexts)
//  export const Setshoeide = async (data)=>{
 
//       try{
//         const users = localStorage.getItem("id")
//         const res = await axios.get(`http://localhost:4000/user/${users}`)
//         const cartss = res.data.cart
        
//         const update =[
//           ...cartss,data
//         ]
//       const reso= await axios.patch(`http://localhost:4000/user/${users}`, {cart:update })
//       console.log(reso.data,"ll");
//       setcartitem(reso.data)
//       console.log(cartitem);
      

 
   
        
//         // setcartitem()
//         // console.log(cartitem);

//         // console.log("adding " ,update);
//       }catch(err){
//         console.log("err",err);
//       }
//   }
