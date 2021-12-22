import React, { useState } from 'react'
import PopUp from './PopUp';
import "./App.css"

const App = () => {
  const[isOpen,setIsOpen]=useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
     <div>
       <h1>open bottom sheet click below</h1>
     </div>
     <div>
     <button onClick={togglePopUp}>click me</button>
     </div>
     {
                <div className="pop_up1">
                  {isOpen && (
                    <PopUp
                      content={
                        <div className='pop_up2'>
                          <ol>
                            <li>javascript</li>
                            <li>html</li>
                            <li>css</li>
                            <li>bootstrap</li>
                            <li>materialui</li>
                          </ol>
                        </div>
                      }/>)}
                      </div>
}
    </div>
  )
}

export default App
