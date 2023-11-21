import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./signup";
import Forgot from "./Forgot";
import UserList from "./UserList";
import Search from "./Search";
import Navbar from "./Navbar";
import AddCake from "./addCake";
import Carousel from "./Carousel";
import CakeList from "./CakeList";
import Cakedetails from "./CakeDetails";
import Cart from "./Cart";
import Summary from "./Summary";
import Confirmorder from "./Confirmorder";
import Payment from "./Payment";
import Checkout from "./Checkout";
import Address from "./Address";

function MyRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Carousel />}></Route>
        <Route path="/home" element={<Carousel />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cakelist" element={<CakeList />}></Route>
        <Route path="/userlist" element={<UserList />}></Route>
        <Route path="/forgot" element={<Forgot />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/admin" element={<UserList />}></Route>
        <Route path="/addcake" element={<AddCake />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/details/:cakeid" element={<Cakedetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}>
          <Route path="" element={<Summary />} />
          <Route path="summary" element={<Summary />} />
          <Route path="addaddress" element={<Address />} />
          <Route path="payment" element={<Payment />} />
          <Route path="confirmorder" element={<Confirmorder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MyRouter;
