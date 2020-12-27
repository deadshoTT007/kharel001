import React,{useEffect,useState} from 'react';

export default function App({onChangeCount=()=>{}}){

  const[count,setCount]=useState(0);
   useEffect(()=>{
     onChangeCount(count);
   })

return(
  <>
  <div >
    <p>{count}</p>
    <button onClick={()=>setCount(count+1)}></button>
  </div>
  </>
)
}