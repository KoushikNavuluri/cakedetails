import { useNavigate } from "react-router"

function Cake(props) {
    var data = props.data
    var navigate = useNavigate()

    function showCakedetails(){
        navigate("/details/"+data.cakeid)    // programatical navigation
    }
    if(data){
        return (
            <div class="card m-3" style={{"width": "18rem"}}>
                <img onClick={showCakedetails} style={{height:"16rem"}} src={data.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{data.name}</h5>
                        <p class="card-text">{data.price}</p>
                    </div>
            </div>
        )
    }
    else{
        return null
    }
   
}

export default Cake