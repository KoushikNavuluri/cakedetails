import axios from "axios"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Cake from "./Cake"


 
function Search(){
    var [isSearching,setIssearching] = useState(true)
    var [searchresults,setSearchresults] = useState([])
    var [query,setQuery] = useSearchParams()
    var text = query.get("q")
 
    useEffect(()=>{
        setIssearching(true)
        axios({
            method:"get",
            url:"http://api1byashu.eu-4.evennode.com/api"+"/searchcakes?q="+text
        }).then((response)=>{
            setIssearching(false)
            console.log("response from search cakes api" , response)
            setSearchresults(response.data.data)
        } , (error)=>{
            setIssearching(false)
            console.log("Error from search cakes api" , error)
        })
    },[text])
 
    if(isSearching){
       return null;
    }
    else{
    return (
        <div>
            <h1>{searchresults.length} Results found for {text}</h1>
 
            <div className="row">
                {searchresults.map((each)=>{
                    return <Cake data={each} />
                })}
            </div>
        </div>
    )
}
}
 
export default Search