import React, { useState } from 'react';

function Display(props) {
    const [name,setName]=useState(props.name);
    const [address,setAddress]=useState(props.address);
    
    const changeName=(event)=>{
        setName(event.target.value);
    }
    const changeAddress=(event)=>{
        setAddress(event.target.value);
    }
  
  return (
    <>
      Name:<input type="text" value={name} onChange={changeName}/>
      Address:<input type="text" value={address} onChange={changeAddress}/>
    </>
  );
}

export default Display;