import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import Login from "./Login";


function Cart() {
  var [cakelist, setCakeList] = useState();
  useEffect(() => {
    axios({
      url: "http://api1byashu.eu-4.evennode.com/api" + "/cakecart",
      method: "get",
      headers: {
        Authorization: localStorage.token,
      },
    }).then(
      (response) => {
        console.log(response);
        console.log("Response from cart api", response.data);
        setCakeList(response.data.data);
      },
      (error) => {
        console.log("Error from api is", error);
      }
    );
  }, []);
 
  function removeFromCart(index) {
    console.log("cake id to remove ", cakelist[index].cakeid);
    var cakeid = cakelist[index].cakeid;
    axios({
      method: "post",
      url: "http://api1byashu.eu-4.evennode.com/api" + "/removecakefromcart",
      data: {
        cakeid: cakeid,
      },
      headers: {
        Authorization: localStorage.token,
      },
    }).then(
      (response) => {
        cakelist.splice(index, 1);
        setCakeList([...cakelist]);
      },
      (error) => {
        console.log("Error in removing from cart", error);
      }
    );
  }
 
  if (cakelist)  {
    return (
      /*<div className="table">
                {cakelist.map((each=>{
                    return <Card data={each}/>
                }))}
            </div>
        )
            }*/
      <div style={{ margin: "20px" }}>
        <table className="table table-bordered">
          <thead className="table-secondary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Image</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {cakelist.map((each, index) => {
            return (
              <tr key={each.cakeid}>
                <td scope="row">{index + 1}</td>
                <td scope="row">{each.name}</td>
                <td scope="row">{each.price}</td>
                <td scope="row">{each.quantity}</td>
                <td scope="row">
                  <img
                    style={{ height: "5rem", width: "6rem" }}
                    src={each.image}
                  ></img>
                </td>
                {/* <td scope="row"><img onClick={e => handleDelete(index,e)} style={{height:"3rem", width:"4rem"}} src="images/delete.jpg"></img></td> */}
                <td>
                  <button
                    onClick={removeFromCart.bind(null, index)}
                    class="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
        <div>
          {/*<button className="btn btn-primary"
        style={{marginLeft:"65rem"}} type="submit">Proceed to Payment</button>*/}
          <Link to="/checkout">
            <button
              className="btn btn-outline-danger"
              style={{ marginLeft: "65rem" }}
              type="submit"
            >
              Check Out{" "}
            </button>
          </Link>
        </div>
      </div>
    );
  } else {
    return <Login />;
  }
}
export default Cart;