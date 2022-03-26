import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'


export default function Header (props) {
  const {cartCountItems}=props
  console.log("....",cartCountItems);
  return (
    <>
    <header className='row block center'>
      <div>
    <a href='#/'>
      <h1>Shopping Cart</h1>
    </a>
      </div>
      <div>
      
      </div>

      <div>
      
        <a href='#/cart'>
  
  {''}

{cartCountItems?(
  
  <button  color="primary" >
        <FontAwesomeIcon icon={faCartArrowDown} />
        
        {cartCountItems}
      </button>
 
  
  )
  :
  <button  color="primary" >
        <FontAwesomeIcon icon={faCartArrowDown} />
        
        0
      </button>
 
}

</a>
     </div>
     
     
    </header>
    </>
    
  )
}


{/* <button className='badge'>
    {cartCountItems}
  </button> */}
  // <button className='badge'>0</button>