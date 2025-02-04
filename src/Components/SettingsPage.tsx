import './SettingsPage.css'
import { useVisibilityStore } from '../Stores/store';

export const SettingsPage = () => {

  const { toggleSettings } = useVisibilityStore();

  return (
    <>
    <div className='settings-wrapper'>
      <div className='settings-menu-button' onClick={() => toggleSettings()}>
        Main Menu

      </div>
      <div className='settings-page-title'>
        Settings Page
      </div>
    </div>
    </>
  )
}
