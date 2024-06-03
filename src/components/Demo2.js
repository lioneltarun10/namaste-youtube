import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {
  
    const [y,setY] = useState(0);
  let x = 0;

  const ref = useRef(0);
//   console.log(ref);
/* not like => ref = 0
  ref = {current : 0} 

*/
const i = useRef(null);

useEffect(()=>{
    if(i.current) return;
    i.current = setInterval(()=>{
       console.log("Namaste React ",Math.random());
   },1000)

   return () => clearInterval(i.current)
},[])
  
    return (
    <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
       <div>
        <button onClick={()=>{
            x = x+1
            console.log(x)
        }} className='bg-green-100 p-2 m-4'>Increase x</button>
        <span className='font-bold text-xl'>Let = {x}</span>
        
       </div>
       <div>
        <button onClick={()=>{
            setY(y+1)
            console.log(y)
        }} className='bg-green-100 p-2 m-4'>Increase y</button>
        <span className='font-bold text-xl'>State = {y}</span>
        
       </div>
       <div>
        <button onClick={()=>{
            ref.current = ref.current + 1;
            console.log(ref.current);
        }} className='bg-green-100 p-2 m-4'>Increase Ref</button>
        <span className='font-bold text-xl'>Ref =  {ref.current}</span>
        
       </div>
       <button 
       onClick={()=>{
        clearInterval(i.current)
       }}
       className='bg-red-900 p-2 m-4 text-white font-bold rounded-lg '>Stop Printing</button>
    </div>
  )
}

export default Demo2