import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
 
function Address(){
    var [addresssComponent,setAddressComponent]= useState({})
    var [error,setError] = useState("")
    var navigate = useNavigate()
    var user={ name:"",phone:"",address:"",pincode:"", city:""}
    function handleName(event){
        user.name=event.target.value
    }
    function handlePhone(event){
        user.phone=event.target.value
    }
    function handleAddress(event){
        user.address=event.target.value
    }
    function handlePincode(event){
        user.pincode=event.target.value
    }
    function handleCity(event){
        user.city=event.target.value
    }
   
    function addcakeorder(){
        //useEffect(()=>{
        axios({
            method :"post",
            url: "http://api1byashu.eu-4.evennode.com/api" + "/addcakeorder",
            data: {
                name: addresssComponent.name,
                address: addresssComponent.address,
                city: addresssComponent.city,
                pincode: addresssComponent.pincode,
                phone: addresssComponent.phone
            },
            headers:{
                Authorization: localStorage.token
            }
        }).then((response)=>{
            console.log("Response from adding Address is ",response, response.data)
            if(response.data.data){
                navigate("/checkout/confirmorder")
            }
        }, (error)=>{
            console.log("Error form api is ",error)
        })
   // },[])
    }
    return(
        <div>
            <h2>Address Component</h2>
            <div className="form-group">
            <form >
                <label>Name</label>
                <input onChange={handleName} className="form-control" type="text"></input><br></br>
                <label>Phone Number</label>
                <input onChange={handlePhone} className="form-control" type="tel"></input>
                <label>Address</label>
                <input onChange={handleAddress} className="form-control" type="text"></input>
                <label>City</label>
                <input onChange={handleCity} className="form-control" type="text"></input>
                <label>Pincode</label>
                <input onChange={handlePincode} className="form-control" type="text"></input>
               
            </form>
            </div>
            <Link to="/checkout/confirmorder"><button onClick={addcakeorder} className="btn btn-primary" style={{margin:"10px"}} type="submit">Submit</button></Link>
            {/* <input type=" text" placeholder="Enter Delivery Address"></input> */}
        </div>
    )
}
export default Address