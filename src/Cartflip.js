import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import Cartitem from './Cartitem'




const Cartflip = ({datas,removecart}) => {

  const [numCart,setnumCart] = useState(0)
  useEffect(
    function(){
        let tem=0;
        datas.map(item=>item.Checked&&tem++)
        setnumCart(tem)
  },[removecart])
  

  return (
    <div className="cartpage">
      {numCart?<>
             <div className="">
                 <h3> Your Cart Items</h3>
                
               </div>
            <div className="header">
                  
                 {datas.map(data => data.Checked&&(
                 <Cartitem 
                        id={data.id}
                        image={data.image}
                        name={data.name}
                        price={data.price}
                        removecart={removecart}/>
                 ))}
             </div>
               <div className="">
                      <button type='sumbit' className='checout_button'>
                        Checkout
                      </button>
                </div>
              </>:<>
                  <h2>Cart is empty</h2>
              </>

      
    }
        
    </div>
    
  )
}

export default Cartflip