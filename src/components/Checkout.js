import { Outlet } from "react-router";
import { Link } from "react-router-dom";
 
function Checkout(){
    return(
        <div>
            <h1>Checkout Component</h1>
            <div className="row">
                <div className="col-md-4">
                    {/* <li class="nav-item">
                        <Link class="nav-link" to="/checkout/summary">Summary</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/checkout/addaddress">Add Address</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/checkout/confirmorder">Confirm Order</Link>
                    </li> */}
 
                    <Link class="nav-link" to="/checkout/summary">Summary</Link>
                    <Link class="nav-link" to="/checkout/addaddress">Add Address</Link>
                    <Link class="nav-link" to="/checkout/confirmorder">Confirm Order</Link>
                    <Link class="nav-link" to="/checkout/payment">Payment</Link>
 
                </div>
                <div className="col-md-4">
                    <Outlet/>
                </div>
 
               
            </div>
        </div>
    )
}
export default Checkout