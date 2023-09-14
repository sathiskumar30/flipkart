import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import Cartitem from './Cartitem'




const Cartflip = ({datas,removecart}) => {

  const [numCart,setnumCart] = useState(0)
  useEffect(function(){
    let tem=0;
    datas.map(item=>item.Checked&&tem++)
    setnumCart(tem)
  },[removecart])
  

  return (
    <div className="cartpage">
      {numCart?<><h3> Your Cart Items</h3>
            <div className="header">
                    
              
                  <div className="cross">
                     <FaTimes/>
                 </div>
                 {datas.map(data => data.Checked&&(
                 <Cartitem 
                        id={data.id}
                        image={data.image}
                        name={data.name}
                        price={data.price}
                        removecart={removecart}/>
                 ))}
             </div>
               <div className="checout_button">
               <button type='sumbit'>
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