import React from 'react'
import './Front.css'
import './Second.jsx'
import { useNavigate } from 'react-router-dom'




const Front = ({handleClick}) => {

   
  const navigate =useNavigate();
  
   function handleNavigate(){
       handleClick();
       setTimeout(()=>{
        navigate("/Second")
       },3000);
   }

  return (
    <div>
      <button onClick={handleNavigate}  className='btn3'>
          ♥ 🗡𝓒𝓤𝓣🗡 ♥
       </button>
     
      <button className='btn1'>𝓙𝓾𝓼𝓽 175,320 𝓱𝓸𝓾𝓻𝓼, 10,519,200 𝓶𝓲𝓷𝓾𝓽𝓮𝓼, 𝓪𝓷𝓭 631,152,000 𝓼𝓮𝓬𝓸𝓷𝓭𝓼 𝓯𝓲𝓵𝓵𝓮𝓭 𝔀𝓲𝓽𝓱 𝓶𝓮𝓶𝓸𝓻𝓲𝓮𝓼.</button>
      <img src='./unnamed.png' className='image'></img>
      <button className='btn2'></button>
      
        
    </div>
  )
}

export default Front