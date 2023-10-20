import React from 'react'


const Navcomponent = () => {
  return ( 
    <div className='v3'>
       <> <div className='nav6'> 
                <img id="id2" src={require('./images/mobile.png')}/>
                <h5 id="id1">Mobiles</h5>
            </div>
       </>
       <>
              <div className='nav6'> 
                  <img id="id2"src={require('./images/electronics.png')}/>
                  <h5 id="id1">Electronics</h5>
              </div>
      </>
      <>
          <div className='nav6'> 
              <img id="id2" src={require('./images/fashion.png')}/>
              <h5 id="id1">Fashion</h5>
          </div>
      </>
      <>
          <div className='nav6'> 
                <img  id="id2" src={require('./images/furnitures.jpg')}/>
                <h5 id="id1">Furnitures</h5>
          </div>
     </>
     <>
          <div className='nav6'> 
                <img id="id2" src={require('./images/homeappliances.png')}/>
                <h5 id="id1">HomeAppliances</h5>
          </div>
      </>
      <>                                      <div className='nav6'> 
                  <img id="id2" src={require('./images/grocery.png')}/>
                  <h5 id="id1">Grocery</h5>
            </div>
      </>
      <>
            <div className='nav6'> 
                <img id="id2" src={require('./images/twowheeler.png')}/>
                <h5 id="id1">TwoWheelers</h5>
            </div>
      </>
    </div>
  )
}

export default Navcomponent

