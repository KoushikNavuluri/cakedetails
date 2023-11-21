import { useNavigate } from "react-router"

function Cake(props) {
    var src = props.image
    var name = props.name
    var price = props.price
    var data = props.id
    var navigate = useNavigate()

    function showCakedetails(){
        console.log(props)
        navigate("/details/"+data)    // programatical navigation
    }

    return ([
        <div style={{ display: "grid", width:"200px",justifyContent:"center", gridTemplateRows:"1fr 1 fr 1fr 1fr 1fr"}}>
        <div class="card" style={{ marginTop: "2rem", marginLeft: "2rem" }}>
            <img src={src} onClick={showCakedetails} class="card-img-top" alt="..." style={{padding:"10px",objectFit:"cover",width:"100%"}}/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">Price : {price} /-</p>
            </div>
        </div>
        </div>
    ])
}
export default Cake

