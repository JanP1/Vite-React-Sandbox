import { useState } from 'react';
import './App.css'

function App() {
  const [isSettings, setIsSettings] = useState(false);
  
 function settingsActivated() {
   setIsSettings(true);
 } 


  return (
    <div className='app-container'>
    {!isSettings && (
      <>
      <div className='grid-area-1'>
        <div className='to-do-container'>

        </div>
      </div>
      <div className='grid-area-2'>
        <div className='first-block'>

          <div className='panel-first' onClick={() => settingsActivated()}> Settings </div>
          <div className='panel-first'> Containers </div>
          <div className='panel-first'> Notes </div>
          <div className='panel-first'> To-Do </div>
        </div>
      </div>
    </>)}
    </div>
  )
}

export default App
