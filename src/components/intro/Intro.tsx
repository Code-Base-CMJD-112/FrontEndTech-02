import { useState } from "react";

export const Intro = () => {
  const [ value,setValue] = useState(0);  

//   let count  = 0  
  const valueUp = ()=>{
    setValue( value + 1);

  }
  const valueDown = ()=>{
    setValue( value - 1);
   
}
  return (
    <>
      <p>{value}</p>

      <button id="btn-inc" onClick={valueUp}> + </button>
      <button id="btn-dc" onClick={valueDown}> - </button>
    </>
  );
};
