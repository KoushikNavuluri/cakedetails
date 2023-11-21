import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import Loader from "./Loader"

function Cakedetails(){
    var [cake,setCakedetails] = useState()
    var navigate = useNavigate()
    var [isAdding,setIsAdding] = useState(false)
    var params = useParams()

    function addToCart(){
        if(localStorage.token){
            console.log("user is loggeidn ")
            setIsAdding(true)
            axios({
                method:"post",
                url:"http://api1byashu.eu-4.evennode.com/api"+"/addcaketocart",
                data:{
                    cakeid:cake.cakeid,
                    name:cake.name,
                    price:cake.price,
                    image:cake.image,
                    weight:cake.weight,
                },
                headers :{
                    Authorization:localStorage.token
                }
            }).then((response)=>{

                console.log("response from add to cart api" ,response ,response.data)
                if(response.data.data){
                    navigate("/cart")
                }
            },(error)=>{
                console.log("error from add to cart api" , error)
            })
        }
        else{
            navigate("/login")
        }
    }

    useEffect(()=>{
        axios({
            url:"http://api1byashu.eu-4.evennode.com/api" + "/cake/"+params.cakeid
        }).then((response)=>{
            setCakedetails(response.data.data)
        })
    })
        if(cake){
            return (
                <div>
                    <div className="container mt-4">
                        <h1>{cake.name}</h1>
                        <section className="cake-details mb-5 pt-4 pb-4">
                            <div className="col-md-12 row">
                                <div className="col-md-6 mb-4 mb-md-0">
                                    <div className="mdb-lightbox">
                                        <div className="row product-gallery mx-1">
                                            <div className="col-12 mb-0">
                                                <div className="view rounded z-depth-1 main-img">
                                                    <a href={cake.image} data-size="710x823">
                                                        <img src={cake.image} alt={cake.name} className="img-fluid z-depth-1" style={{height:"30rem", width: "100%" }} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h5>{cake.name}</h5>
                                    <p className="mb-2 text-muted text-uppercase small">{cake.reviews} reviews</p>
        
                                    <p><span className="mr-1"><strong>₹{cake.price}</strong></span></p>
                                    <p className="pt-1">{cake.description}</p>
                                    <div className="table-responsive">
                                        <table className="table table-sm table-borderless mb-0">
                                            <tbody>
                                                <tr>
                                                    <th className="pl-0 w-25" scope="row"><strong>Flavour</strong></th>
                                                    <td>{cake.flavour}</td>
                                                </tr>
                                                <tr>
                                                    <th className="pl-0 w-25" scope="row"><strong>Ingredients</strong></th>
                                                    <td>{cake.ingredients?.join()}</td>
                                                </tr>
                                                <tr>
                                                    <th className="pl-0 w-25" scope="row"><strong>Occasion</strong></th>
                                                    <td>{cake.type}</td>
                                                </tr>
                                                <tr>
                                                    <th className="pl-0 w-25" scope="row"><strong>Weight</strong></th>
                                                    <td>{cake.weight} kg</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <hr />
                                    {/* <button type="button" className="btn btn-primary btn-md mr-1 mb-2">Buy now</button> */}
                                    {!isAdding && <button onClick={addToCart} type="button" className="btn btn-light btn-md mr-1 mb-2"><i
                                        className="fas fa-shopping-cart pr-2"></i>Add to cart</button>}
                                    {isAdding && <button type="button" className="btn btn-light btn-md mr-1 mb-2" disabled><i
                                        className="fas fa-shopping-cart pr-2"></i> Please wait... Adding to cart</button>}
                                    {/* <div className="form-group">
                                        <strong>Pincode</strong>
                                        <input ref={referencehandler} name="pincode" className="form-control" />
                                    </div> */}
                                </div>
                            </div>
        
                        </section></div>
                </div>
            )
        }
        else{
            return <Loader />
        }
        
    
}

export default Cakedetails