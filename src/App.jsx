import React, { createContext, useEffect, useState } from "react";

import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./assets/Pagess/Home";
import User from "./assets/Pagess/User";
import Admin from "./assets/Pagess/Admin";
import Login from "./assets/Pagess/Login";
import Register from "./assets/Pagess/Register";
  
import { Toaster } from "sonner";
import AllProducts from "./assets/Components/AllProducts";
import Men from "./assets/Components/Home/Men";
import Women from "./assets/Components/Home/Women";
import Collection from "./assets/Components/Home/Collection";
import Lookbook from "./assets/Components/Home/Lookbook";
import ShowComponent from "./assets/Components/Home/ShowComponent";
import Ourstory from "./assets/Components/Home/Ourstory";
import Cart from "./assets/Components/Cart";
import { toast } from "sonner";
import axios from "axios";
import Payment from "./assets/Pagess/Payment";
import Addproduct from "./assets/Components/Admin/Addproduct";
import Editproducts from "./assets/Components/Admin/Editproducts";
import Alluser from "./assets/Components/Admin/Alluser";
import Trackorder from "./assets/Components/Admin/Trackorder";
import Dashboard from "./assets/Components/Admin/Dashboard";
import Adbody from "./assets/Components/Admin/Adbody";
import Orderss from "./assets/Pagess/Orderss";
// import card from "@material-tailwind/react/theme/components/card";
import Wishliste from "./assets/Components/Wishliste";
import ProductDetail from "./assets/Components/Home/ProductDetail";
import { adminConfig } from "./hederconfig/config";

export const contexts = createContext();

function App() {

  const [datas, setdata] = useState([]);
  const [search, setsearh] = useState(null);
  const [user, setuser] = useState([]);
  const [udatass, setudatass] = useState([]);
  const [shoeid, setshoeid] = useState([]);
  const [wlitem,setwlitem]=useState([])
  const [cartitem, setcartitem] = useState([]);
// const [cartnew,setcartnew]=useState([])
  const handleOpen = (value) => setSize(value);
  const [size, setSize] = React.useState(null);
  //adminsssss
  const [asearchitem, asetsearchitem] = useState("");
  const [prdt, setprdt] = useState([]);
  const [lastasearch, setlastsearch] = useState(null);
  const [admin,setAdmin]=useState(false)







  useEffect(() => {
    if (localStorage.getItem("admin")) {
      setAdmin(true);
    }
  }, []);
//------------------------
//datas fetchingg
const usersid = localStorage.getItem("id");
const fetchData = async () => {
  try {
    
    
    // const response = await axios.get("https://jsoneserver.onrender.com/datass");
    const response = await axios.get("http://localhost:5000/api/admin/products",adminConfig)
    
    console.log(adminConfig,"mkldkmweldf");
    
    setdata(response.data);
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
   fetchData();
  }, []);

  console.log("kb",datas);
  
//---------------------------
 

// const usersid = localStorage.getItem("id");


const fn = async () => {
    const res = await axios.get(`https://jsoneserver.onrender.com/user/${usersid}`);
    setcartitem(res.data.cart);
  };
  useEffect(() => {
    fn();
  }, []);
  
//addto cartt
 const addtocarts = async (data) => {
    
    try {
      const res = await axios.get(`https://jsoneserver.onrender.com/user/${usersid}`);
      const cartss = res.data.cart;

      const check = cartss.find((itemid) => itemid.id === data.id);
      if (check) {
        toast.warning("product alredy exist");
      } else {
        const update = [...cartss, data];
        const reso = await axios.patch(
          `https://jsoneserver.onrender.com/user/${usersid}`,
          {
            cart: update,
          }
        );
        // setcartitem(reso.data.cart);
        toast.success("product added tocart");
        setRendder(!render)
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  //-----------------------
// useEffect(()=>{
// // addtocarts(cartitem);
// },[])


//fetchwishlist
const wldata=async(id)=>{
  const response= await axios.get(`https://jsoneserver.onrender.com/user/${usersid}`)
   setwlitem(response.data.wishlist)
}
useEffect(()=>{
wldata()
},[])

//addtowishlist

const wishlists=async(data)=>{
  const response= await axios.get(`https://jsoneserver.onrender.com/user/${usersid}`)
  const wlist=response.data.wishlist
   const wlitems=wlist.find((item)=>item.id===data.id)
   if(wlitems ){
    const res=wlitem.filter((item)=>item.id!=wlitems.id)
    await axios.patch(`https://jsoneserver.onrender.com/user/${usersid}`,{wishlist:res})
    wldata()
    toast.warning("removed from wishlist")
  }else{
    const upd=[...wlist,data]
   await axios.patch(`https://jsoneserver.onrender.com/user/${usersid}`,{wishlist:upd})
   toast.success("product add to wishlist")
   wldata()
   
   }

}





  return (
    <>
      <Toaster richColors position="bottom-right" />
      <contexts.Provider
        value={{
          search,
          setsearh,
          user,
          setuser,
          udatass,
          setudatass,
          shoeid,
          setshoeid,
          // cartitem,
          // setcartitem,
          addtocarts,
          handleOpen,
          asearchitem,
          asetsearchitem,
          prdt,
          setprdt,
          lastasearch,
          setlastsearch,
          size,
          setSize,
          datas, 
          setdata,
          fetchData,
          fn,
          wishlists,
          setwlitem,
          wldata,
          wlitem,
        }}
      >
       {admin  &&
       
       <Routes>
       <Route path="/admin/:url" element={<Admin  />}></Route>
         <Route path="/addprdt" element={<Addproduct />}></Route>
         <Route path="/editprdt" element={<Editproducts />}></Route>
         <Route path="/allusers" element={<Alluser />}></Route>
         <Route path="/trackorder" element={<Trackorder />}></Route>
         <Route path="/dashboard" element={<Dashboard />}></Route>
         <Route path="/adbody/:id" element={<Adbody />}></Route>
       </Routes>
}
       
        <Routes>
          <Route path="/" element={<Home  setAdmin={setAdmin}/>}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/details/:id" element={<ProductDetail/>}/>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/all" element={<AllProducts />}></Route>
          <Route path="/men" element={<Men />}></Route>
          <Route path="/women" element={<Women />}></Route>
          <Route path="/collection" element={<Collection />}></Route>
          <Route path="/lookbook" element={<Lookbook />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/showcomponent/:dataid"element={<ShowComponent />}
          ></Route>
          <Route path="/ourstory" element={<Ourstory />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/wishlist" element={<Wishliste />}></Route>
          <Route path="/orderss" element={<Orderss />}></Route>

          
        </Routes>


     
      </contexts.Provider>
    </>
  );
}

export default App;
