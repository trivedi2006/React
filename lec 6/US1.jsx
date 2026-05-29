import { useState } from "react";
import img1 from "./assets/img1.jpg";
import hero from "./assets/hero.png";
function US1() {
  const [count, setCount] = useState(0);
  const inc = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const dec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1>useState count change</h1>
      <h1>user clicked {count} times</h1>
      <button onClick={inc}>inc Me</button>
      <button onClick={dec}>dec me</button>
    </>
  );
}
function US2() {
  const [style, setStyle] = useState("tomato");
  const [tc, settc] = useState("blue");
  const cl = () => {
    setStyle("cyan");
    settc("red");
  };
  return (
    <>
      <h1 style={{ backgroundColor: style, color: tc }}>Hello</h1>
      <button onClick={cl}>click me</button>
    </>
  );
}
function US3() {
  const [pic, setpic] = useState(img1);
  const c2 = () => {
    if (pic == img1) {
      setpic(hero);
    } else {
      setpic(img1);
    }
  };
  return (
    <>
      <img src={pic} height="200px" width="200px" />
      <button onClick={c2}>click me</button>
    </>
  );
}
function US4() {
  const [bt, setbt] = useState("show");
  const [txt, settxt] = useState("");

  const hc = () => {
    if (bt == "show") {
      setbt("hide");
      settxt("Welcome Student");
    } else {
      setbt("show");
      settxt("");
    }
    return (
      <>
        <button onClick={hc}>{bt}</button>
        <h1>{txt}</h1>
      </>
    );
  };
}
function US5() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");

  const hc = (e) => {
    setfname(e.target.value);
  };
  const hl = (e) => {
    setlname(e.target.value);
  };
  return (
    <>
      <input type="text" name="fname" value={fname} onChange={hc} />
      <input type="text" name="lname" value={lname} onChange={hl} />
      <h1>
        {fname} : {lname}
      </h1>
    </>
  );
}
function US6() {
  const [data, setdata] = useState({});

  const hc = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  return (
    <>
      <form onSubmit={hc}>
        FirstName : <input type="text" name="fname" />
        <br></br>
        LastName : <input type="text" name="lname" />
        <br></br>
        <input type="submit" />
      </form>
      <h1>Firstname : {data.fname}</h1>
      <h1>Lastname : {data.lname}</h1>
    </>
  );
}

// export default US1
export { US1, US2, US3, US4, US5, US6 };
