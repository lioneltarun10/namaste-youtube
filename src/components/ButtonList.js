import React from 'react'
import Button from './Button'

const ButtonList = () => {
  
  const list = ["All","Gaming","Songs","Live","Cricket","Soccer","Valentines","Cooking","Data Structures"]
  
  return (
    <div className='flex'>
      {
         list.map((btn) => <Button key={btn} name={btn}/>)
      }
      
        
    </div>
  )
}

export default ButtonList