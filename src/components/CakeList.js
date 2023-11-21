import React from "react";
import Cake from "./Cake";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
 
// import Loader from "./Loader";
const cakes = [
    {
        image: "cake1.jpg",
        name: "Fruit Land",
        price: "800",
        desc : "This is a chocolate cake with fruit toppings",
        flavour : "Chocolate"
    },
   
    {
        image: "cake2.jpg",
        name: "Choco Fruit Blast",
        price: "100",
        desc : "This cake is a chocolate cake with straberry toppings",
        flavour : "Vannila with Cherry Toppings"
    },
 
    {
        image: "cake3.jpg",
        name: "Cherry Blossom",
        price: "800",
        desc : "This cake is loaded with cherries and vannila cream",
        flavour : "Vannila with Cherry Toppings"
    },
 
    {
        image: "cake4.jpg",
        name: "Strawberry Blast",
        price: "700",
        desc : "Strawberries Everywhere",
        flavour : "Milk Flavour with strawberry cream"
    },
 
    {
        image: "cake5.jpg",
        name: "Choco Vannila Piece",
        price: "150",
        desc : "A perfect mix of chocolate and vannila",
        flavour : "Vannila and Chocolate"
    },
 
    {
        image: "cake6.jpg",
        name: "Chocolate Pastry Piece",
        price: "150",
        desc : "A Cool chocolate pastry",
        flavour : "Chocolate"
    },
 
    {
        image: "cake7.jpg",
        name: "Blackberry Choco Fusion",
        price: "1000",
        desc : "Blend of chocolate and black berries",
        flavour : "Chocolate"
    },
 
    {
        image: "cake8.jpg",
        name: "Cake Family",
        price: "500",
        desc : "A cake for a family",
        flavour : "Chocolate and Normal Cake"
    }
]
 
function CakeList() {
 
    var [cakes, setCakeList]= useState()
 
    useEffect(()=>{
        axios({
            method : "get",
            url: "http://api1byashu.eu-4.evennode.com/api"+"/allcakes"
        }).then((response)=>{
            console.log("response from all cakes api", response)
            setCakeList(response.data.data)
        }, (error)=>{
            console.log("Error from all cakes api", error)
        })
    }, [])
 
    if(cakes){
        return (
            <div className="row" >
                {cakes.map((each, index) => (
                    <Cake
                        key={index}
                        image={each.image}
                        name={each.name}
                        price={each.price}
                        desc={each.desc}
                        flavour={each.flavour}
                        id={each.cakeid}
                    />
                ))}
            </div>
        )
    }
    else{
        return <Loader /> ;
    }
}
 
export default CakeList