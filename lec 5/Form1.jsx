import { useState } from "react";

function Form1() {
  const [name, setname] = useState("");
  const [txt, settxt] = useState("");

  const hc = (e) => {
    e.preventDefault();
    alert(`Welcome ${name}`);
  };
  return (
    <>
      <form onSubmit={hc}>
        Name :{" "}
        <input
          type="text"
          name="fname"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br></br>
        <textarea
          placeholder="Enter text"
          name="t"
          onChange={(e) => {
            settxt(e.target.value);
          }}
        ></textarea><br></br>
        <select name="op">
          <option value="">Car</option>
          <option value="ford">Ford</option>
          <option value="volvo">Volvo</option>
          <option value="bmw">Bmw</option>
          
        </select>
        <input type="submit" />
      </form>
      <h1>name : {name}</h1>
      <h1>text : {txt}</h1>
    </>
  );
}
export default Form1;
