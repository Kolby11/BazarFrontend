import * as React from 'react';
import ProfileSettingsInfo from '../Settings/components/ProfileInfo';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Settings = () => {
	return (
		<div>
			<Navbar />
			<div className='m-5'>
				<h1 className="text-center">Settings</h1>
				<ProfileSettingsInfo />
			</div>
			<Footer />
		</div>
	);
};
export default Settings;
