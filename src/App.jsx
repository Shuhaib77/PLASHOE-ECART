import { createContext, useState } from "react";

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

export const contexts = createContext();

function App() {
  const [datas, setdata] = useState([]);
  const [search,setsearh]=useState(null);
  const [user,setuser]=useState([]);
  const [udatass, setudatass] = useState([]);


  return (
    <>
    <Toaster richColors position="top-center-" />
      <contexts.Provider value={{ datas, setdata,search,setsearh,user,setuser,udatass, setudatass}}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/all" element={<AllProducts />}></Route>
          <Route path="/men" element={<Men />}></Route>
          <Route path="/women" element={<Women />}></Route>
          <Route path="/collection" element={<Collection />}></Route>
          <Route path="/lookbook" element={<Lookbook />}></Route>
          <Route path="/showcomponent/:dataid" element={<ShowComponent />}></Route>
          <Route path="/ourstory" element={<Ourstory />}></Route>
          <Route path="/cart/:productid" element={<Cart />}></Route>
        </Routes>
      </contexts.Provider>
    </>
  );
}

export default App;
