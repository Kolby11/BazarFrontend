import { useEffect, useRef } from 'react';
import { User } from '../../../data/interfaces';
import { getUserData } from '../../../services/apiServices/userApi';

import "../styles/profileInfo.css"

const ProfileSettingsInfo = () => {
  const profileInfoRef = useRef<User | null>(null);
  const isLoggedIn = !!localStorage.getItem("sessionStr");

  const fetchProfileInfo = async () => {
    const userId = localStorage["userId"];
    if (isLoggedIn && userId) {
      const result = await getUserData(userId);
      if (result) {
        profileInfoRef.current = result;
      } else {
        console.log("User data not found");
      }
    }
  };

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (profileInfoRef.current) {
      profileInfoRef.current = {
        ...profileInfoRef.current,
        username: e.target.value
      };
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (profileInfoRef.current) {
      profileInfoRef.current = {
        ...profileInfoRef.current,
        phone_number: e.target.value
      };
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (profileInfoRef.current) {
      profileInfoRef.current = {
        ...profileInfoRef.current,
        email: e.target.value
      };
    }
  };

  const saveChanges = () => {
    // Perform save logic here
    console.log(profileInfoRef.current);
  };

  if (!isLoggedIn) {
    return <div>User not logged in.</div>;
  }

  return (
    <div className="d-flex justify-content-center">
      <div>
        <div className="changeProfileImg">
          <img src={'Images/profile_blank.png'} alt="Profilová fotka" />
          <button className="btn btn-primary">Zmeniť profilovú fotku</button>
        </div>
        <form className="flex-column">
          <div>
            <label className="form-label">Zmeniť meno</label>
            <input
              className="input-group-text"
              value={profileInfoRef.current?.username || ''}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label className="form-label">Zmeniť telefónne číslo</label>
            <input
              className="input-group-text"
              value={profileInfoRef.current?.phone_number || ''}
              onChange={handlePhoneNumberChange}
            />
          </div>
          <div>
            <label className="form-label">Zmeniť email</label>
            <input
              className="input-group-text"
              value={profileInfoRef.current?.email || ''}
              onChange={handleEmailChange}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={saveChanges}>
            Uložiť zmeny
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettingsInfo;
