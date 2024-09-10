import React, { useState } from 'react' ; 

const Counters = () => {


   const [count , setCount]  = useState(0) ; 

   const handleIncre =()=>{
       setCount(count + 1) ;
   }

   const handleDecre =()=>{
       setCount(count - 1) ;
   }

 

  return (
    <div>

    <button className="incre"  onClick={handleIncre}>Increment</button>
    <h2>Count : {count}</h2>
     <button className="decre" onClick={handleDecre}>Decrement</button>
    </div>
  )
}

export default Counters