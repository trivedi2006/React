import { useState } from "react";
import img1 from "./assets/img1.jpg"
import hero from "./assets/hero.png"
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
    const cl = () => {
      setStyle("cyan");
    };
    return (
      <>
        <h1 style={{ backgroundColor: style }}>Hello</h1>
        <button onClick={cl}>click me</button>
      </>
    );
  }
  function US3() {
    const [pic, setpic] = useState(img1);
    const c2 = () => {
        if (pic== img1)
        {
            setpic(hero);
        }
        else
        {
            setpic(img1)
        }
      
    };
    return (
      <>
        <img src={pic} height='200px' width='200px'/>
        <button onClick={c2}>click me</button>
        
      </>
    );
  }
  



// export default US1
export  {US1,US2,US3};
