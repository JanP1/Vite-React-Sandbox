import { useState } from 'react';
import './App.css'
import ToDoList from './Components/ToDoList';
import { SettingsPage } from './Components/SettingsPage';

function App() {
  const [isSettings, setIsSettings] = useState(false);
  
 function settingsActivated() {
   setIsSettings(true);
 } 


  return (
    <div className='app-container'>
    {isSettings && (
      <SettingsPage visibility={isSettings}/>
    )}
    {!isSettings && (
      <>
      <div className='menu-container'>
        <div className='grid-area-1'>
          <div className='to-do-container'>
            <ToDoList/>          
            <ToDoList/>          
            <ToDoList/>
            <ToDoList/>
            <ToDoList/>          
            <ToDoList/>          
            <ToDoList/>
          </div>
        </div>
        <div className='grid-area-2'>
          <div className='first-block'>

            <div className='menu-button' onClick={() => settingsActivated()}> Settings </div>
            <div className='menu-button'> Containers </div>
            <div className='menu-button'> Notes </div>
            <div className='menu-button'> To-Do </div>
          </div>
        </div>
      </div>
    </>)}
    </div>
  )
}

export default App
