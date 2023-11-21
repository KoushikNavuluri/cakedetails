import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import User from "./components/User";
import UserList from "./components/UserList";
import Login from "./components/Login";
import Signup from "./components/signup";
import Forgot from "./components/Forgot";
import AddCake from "./components/addCake";
import CakeList from "./components/CakeList";
import SearchCake from "./components/Search";
import InCrementSalary from "./components/Salary";

function App() {
  return (  
    <div>
      {/* <InCrementSalary /> */}
      <hr />
      <Login />
      <Signup />
      <Forgot />
      {/* <AddCake /> */}
      <SearchCake />
      {/* <User  name="Koushik" / >
      <User  name="Vardhan" / >
      <User  name="Srinu" / >
      <User  name="Naveen" / > */}
      {/* <Home / > */}
      <Navbar />
      <Carousel />
      <CakeList />
      {/* <Cards />   */}
      <UserList />
    </div>
  );
}

export default App;
