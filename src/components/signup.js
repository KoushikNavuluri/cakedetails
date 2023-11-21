import axios from "axios";
import { useState } from "react";

function Signup() {
  var user = { name: "", email: "", password: "" };
  var [error, setError] = useState();

  function handleNameText(event) {
    user.name = event.target.value;
  }
  function handleEmailText(event) {
    user.email = event.target.value;
  }
  function handlePassText(event) {
    user.password = event.target.value;
  }

  function register() {
    console.log();
    axios({
      url: "http://localhost:7000/createaccount",
      method: "post",
      data: user,
    }).then(
      (response) => {
        console.log("Response has been recieved", response.data);
        if (response.data.message === "User Already Exists") {
          setError("This email already exists....");
        }
      },
      (error) => {
        console.log("Error from Api is..", error);
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
                      Sign up
                    </p>

                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            onChange={handleNameText}
                            type="text"
                            id="form3Example1c"
                            class="form-control"
                          />
                          <label class="form-label" for="form3Example1c">
                            Your Name
                          </label>
                        </div>
                      </div>

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

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            onChange={handlePassText}
                            type="password"
                            id="form3Example4c"
                            class="form-control"
                          />
                          <label class="form-label" for="form3Example4c">
                            Password
                          </label>
                        </div>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          onClick={register}
                          class="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://img.freepik.com/free-vector/bakery-promo-poster_1284-10798.jpg?w=740&t=st=1698310303~exp=1698310903~hmac=d6d791def52322600b90a3088499142308df98e86c51d0ca92950024ace636bf"
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

export default Signup;
