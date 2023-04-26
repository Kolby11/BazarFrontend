import * as React from 'react';
import ProfileSettingsInfo from '../Settings/components/ProfileInfo';
import Navbar from '../shared/Navbar';

const Settings = () => {
  return (
    <div className='m-5'>
      <Navbar />
      <h1 className="text-center">Settings</h1>
      <ProfileSettingsInfo />
    </div>
  );
};
export default Settings;
