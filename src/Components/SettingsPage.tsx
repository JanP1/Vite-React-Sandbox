import { useState } from 'react'
import './SettingsPage.css'

export const SettingsPage = (props) => {
  const [isSettings, setIsSettings] = useState();


  return (
    <>
    <div className='settings-wrapper'>
      <div className='settings-menu-button'>
        Main Menu

      </div>
      <div className='settings-page-title'>
        Settings Page
      </div>
    </div>
    </>
  )
}
