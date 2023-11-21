function AddCake() {
  var name;
  var flavour;
  var count;
  var sides;
  var toppings;
  var info = [];

  function handleNameText(event) {
    name = event.target.value;
    console.log("Name of cake entered by user is", name);
  }
  function handleFlavourText(event) {
    flavour = event.target.value;
    console.log("Flavour entered by user is", flavour);
  }
  function handleCountText(event) {
    count = event.target.value;
    console.log("Count entered by user is", count);
  }

  function handleToppingsText(event) {
    toppings = event.target.value;
    console.log("Toppings entered by user is", toppings);
  }

  function handleSidesText(event) {
    sides = event.target.value;
    console.log("sides entered by user is", sides);
  }

  function addingCake() {
    info.push([name, flavour, count, toppings, sides]);
    console.log(info);
  }

  return (
    <body
      style={{
        width: "100%",
        background: "hsla(152, 100%, 50%, 1)",

        background:
          "linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)",

        background:
          "-moz-linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)",

        background:
          "-webkit-linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)",
      }}
    >
      <div className="Basics" style={{ marginLeft: "500px" }}>
        <h1>Add CAKE</h1>

        <input
          onChange={handleNameText}
          className=""
          placeholder="Name of Cake"
          type="text"
          style={{ margin: "10px", display: "block" }}
          required
        ></input>
        <input
          onChange={handleFlavourText}
          className=""
          placeholder="Flavour"
          type="text"
          style={{ margin: "10px", display: "block" }}
          required
        ></input>
        <input
          onChange={handleCountText}
          className=""
          placeholder="Count"
          type="text"
          style={{ margin: "10px", display: "block" }}
          required
        ></input>
        <input
          onChange={handleSidesText}
          className=""
          placeholder="Sides"
          type="text"
          style={{ margin: "10px", display: "block" }}
          required
        ></input>
        <input
          onChange={handleToppingsText}
          className=""
          placeholder="Toppings"
          type="text"
          style={{ margin: "10px", display: "block" }}
          required
        ></input>

        <button
          onClick={addingCake}
          className="btn btn-primary"
          style={{ margin: "10px" }}
        >
          Submit
        </button>
      </div>
    </body>
  );
}

export default AddCake;
