import axios from "axios";
import { useState } from "react";

function Forgot() {
  var user = { email: "" };
  var [error, setError] = useState();

 
  function handleEmailText(event) {
    user.email = event.target.value;
  }
 

  function forgotPass() {
    console.log();
    axios({
      url: "http://api1byashu.eu-4.evennode.com/api" + "/recoverpassword",
      method: "post",
      data: user,
    }).then(
      (response) => {
        console.log("Response has been recieved", response.data);
      }
    );
  }

  return (
    <section class="vh-100" style={{ "background-color": "#eee" }}>
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style={{ "border-radius": "25px" }}>
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <label class="alert-danger" for="form3Example1c">
                        {error}
                      </label>
                    </div>

                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Forgot Pass
                    </p>

                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            onChange={handleEmailText}
                            type="email"
                            id="form3Example3c"
                            class="form-control"
                          />
                          <label class="form-label" for="form3Example3c">
                            Your Email
                          </label>
                        </div>
                      </div>

                      

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          onClick={forgotPass}
                          class="btn btn-primary btn-lg"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://img.freepik.com/free-vector/hand-drawn-chocolate-cupcake_53876-115613.jpg?w=740&t=st=1698310425~exp=1698311025~hmac=5675e4ee14cabd35752626f4d17ae130cee24e23db4d63c327d394cccd2fb47a"
                      class="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


  
  
  
  export default Forgot;

  
  