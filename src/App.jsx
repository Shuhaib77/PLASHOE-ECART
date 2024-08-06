import { createContext, useEffect, useState } from "react";

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

export const contexts = createContext();

function App() {
  const [datas, setdata] = useState([]);
  const [search, setsearh] = useState(null);
  const [user, setuser] = useState([]);
  const [udatass, setudatass] = useState([]);

  const [shoeid, setshoeid] = useState([]);
  const [cartitem, setcartitem] = useState([]);
  // const [cartnew,setcartnew]=useState([])
  const usersid = localStorage.getItem("id");
  

  useEffect(() => {
    const fn = async () => {
      const res = await axios.get(`http://localhost:4000/user/${usersid}`);
      setcartitem(res.data);
    };

    fn();
  }, []);

  const addtocarts = async (data) => {
    const res = await axios.get(`http://localhost:4000/user/${usersid}`);

    try {
      const cartss = res.data.cart;

      const check = cartss.find((itemid) => itemid.id === data.id);
      console.log(check, "check");
      if (check) {
        toast.warning("product alredy exist");
      } else {
        const update = [...cartss, data];
        const reso = await axios.patch(
          `http://localhost:4000/user/${usersid}`,
          {
            cart: update,
          }
        );
        console.log(reso.data, "ll");
        setcartitem(reso.data);
        toast.success("product added tocart");
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

  return (
    <>
      <Toaster richColors position="bottom-right" />
      <contexts.Provider
        value={{
          datas,
          setdata,
          search,
          setsearh,
          user,
          setuser,
          udatass,
          setudatass,
          shoeid,
          setshoeid,
          cartitem,
          setcartitem,
          addtocarts,
          
        }}
      >
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
          <Route
            path="/showcomponent/:dataid"
            element={<ShowComponent />}
          ></Route>
          <Route path="/ourstory" element={<Ourstory />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </contexts.Provider>
    </>
  );
}

export default App;
