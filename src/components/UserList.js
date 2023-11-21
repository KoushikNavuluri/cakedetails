import React, { useState } from "react";

function Userlist() {
  var [users, setArr] = useState([
    {
      name: "Mahesh",
      email: "Mahesh@accenture.com",
      level: "2",
      designation: "Manager",
      location: "Hyderabad",
    },
    {
      name: "Koushik",
      email: "Koushik@accenture.com",
      level: "6",
      designation: "Trainer",
      location: "Hyderabad",
    },
    {
      name: "Naresh",
      email: "Naresh@accenture.com",
      level: "12",
      designation: "Developer",
      location: "Mumbai",
    },
    {
      name: "Suresh",
      email: "suresh@accenture.com",
      level: "11",
      designation: "Analyst",
      location: "Pune",
    },
    {
      name: "Rajesh",
      email: "rajesh@accenture.com",
      level: "10",
      designation: "Associate",
      location: "Hyderabad",
    },
  ]);

  var name, email, level, designation, location;
  function handleName(event) {
    name = event.target.value;
  }
  function handleEmail(event) {
    email = event.target.value;
  }
  function handleLevel(event) {
    level = event.target.value;
  }
  function handleDesignation(event) {
    designation = event.target.value;
  }
  function handleLocation(event) {
    location = event.target.value;
  }

  function addUser() {
    var user = [{ name, email, level, designation, location }];
    users = [...users];
    users = [...users, ...user];
    setArr(users);
    let compare = (a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    };

    users.sort(compare);
    console.log(users);
  }

  return (
    <div>
      <h1>List of Users</h1>
      <br />
      <table className="table table-hover table-bordered">
        <thead className="table-secondary">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Level</th>
            <th scope="col">Designation</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        {users.map((each, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{each.name}</td>
                <td>{each.email}</td>
                <td>{each.level}</td>
                <td>{each.designation}</td>
                <td>{each.location}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <div>
        <h2>Add New User</h2>
        <div>
          <label>Name</label>
          <input onChange={handleName} type="text" className="form-control" />
        </div>
        <div>
          <label>Email</label>
          <input onChange={handleEmail} type="text" className="form-control" />
        </div>
        <div>
          <label>Level</label>
          <input
            onChange={handleLevel}
            type="number"
            className="form-control"
          />
        </div>
        <div>
          <label>Designation</label>
          <input
            onChange={handleDesignation}
            type="text"
            className="form-control"
          />
        </div>
        <div>
          <label>Location</label>
          <input
            onChange={handleLocation}
            type="text"
            className="form-control"
          />
        </div>
        <button onClick={addUser} className="btn btn-primary">
          Add User
        </button>
      </div>
    </div>
  );
}

export default Userlist;
