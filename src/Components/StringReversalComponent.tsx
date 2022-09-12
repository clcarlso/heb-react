import React, { useState } from 'react';
import ReactDOM from 'react-dom';
 
const StringReversalComponent=()=>
{

  
  const [stringToReverse, setStringToReverse] = useState("");

  const [returnedData, setReturnedData] = useState("");


  async function handleSubmit(e){
    e.preventDefault();
    let url = "http://localhost:8080/api/v1/reversal/"
    await fetch(url + stringToReverse).then(response => console.log(response.body));
     

  }


  function handleChange(event){
    setStringToReverse(event);
  }

  return (
    <>
    <form onSubmit = {handleSubmit}>
        <label>Enter your String: </label> 
        
        <input type="text" value={stringToReverse} onChange={e => handleChange(e.target.value)} />

        <input type="submit" value="Submit" />
      </form>

      <label>{returnedData}</label>
    </>
  );
}
 
export default StringReversalComponent;