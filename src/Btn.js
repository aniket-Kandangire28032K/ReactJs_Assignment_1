function Btn() {
    const hi=()=>{
        alert("hi");
    }
    const bye=()=>{
        alert("bye");
    }
    return ( 
<>
<button onClick={hi}>Hi</button>
<button onClick={bye}>bye</button>
</>
     );
}

export default Btn;