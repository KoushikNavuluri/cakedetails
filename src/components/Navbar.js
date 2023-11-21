import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
 
function Navbar(props) {
  var isloggedin = useSelector((state) => state.isloggedin);
  var [searchcake, SetSearchCake] = useState();
 
  function handleSearch(event) {
    SetSearchCake(event.target.value);
  }
 
 
  function logout() {
    window.location.href = "/";
    localStorage.clear();
  }
 
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link to="/Home">
          <a class="navbar-brand">Home</a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/Login">
                <a class="nav-link active" aria-current="page" href="#">
                  Login
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Signup">
                <a class="nav-link">SignUp</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Forgot">
                <a class="nav-link ">Forgot Pass</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/addcake">
                <a class="nav-link ">Add Cake</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/admin">
                <a class="nav-link ">Admin</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <form class="d-flex" role="search">
            <input
              type="text"
              placeholder="Search for the Cakes"
              onChange={handleSearch}
            ></input>
            <Link to={"/search?q=" + searchcake}>
              <a>
                <button type="submit" className="btn btn-primary" style={{marginLeft:"15px"}}>
                  Search
                </button>
              </a>
            </Link>
          </form>
         
        </div>
       
      </nav>
      <div class="d-flex">
            {isloggedin == false && (
              <Link to="/login">
                <button
                  style={{ "margin-right": "1rem" }}
                  class="btn btn-primary"
                  type="submit"
                >
                  Login
                </button>
              </Link>
            )}
            {isloggedin == true && (
              <button onClick={logout} class="btn btn-danger" type="submit">
                Logout
              </button>
            )}
          </div>
    </nav>
  );
}
 
export default Navbar;