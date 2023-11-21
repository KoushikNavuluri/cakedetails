import { useEffect, useState } from "react";

function InCrementSalary() {
  var [salary, increment] = useState(100000);
  var [level, changeLevel] = useState(20);

  useEffect(() => {
    alert("welcome");
  }, [level]);

  function multiplySalary() {
    increment(salary + salary * 0.1);
    console.log(salary + salary * 0.1);
  }
  function Promotion() {
    changeLevel(level - 1);
  }
  return (
    <div>
      <h1>{salary}</h1>
      <button type="button" onClick={multiplySalary}>
        Increment
      </button>
      <h1>{level}</h1>
      <button type="button" onClick={Promotion}>
        Increment
      </button>
    </div>
  );
}

export default InCrementSalary;
