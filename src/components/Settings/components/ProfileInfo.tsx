import { useEffect, useState } from 'react';
import { User } from '../../../data/interfaces';
import { getUserData } from '../../../services/apiServices/userApi';

import "../styles/profileInfo.css"

const ProfileSettingsInfo = () => {
  const [profileInfo, setProfileInfo] = useState<User | undefined>(undefined);

  const fetchProfileInfo = async () => {
    const userId = localStorage["userId"]
    if (userId) {
      const result = await getUserData(userId)
      setProfileInfo(result)
      return
    }
    else {
      return;
    }
  }

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div>
        <div className="changeProfileImg">
          <img src={'Images/profile_blank.png'} alt="Profilová fotka"></img>
          <button className="btn btn-primary">Zmeniť profilovú fotku</button>
        </div>
        <form className="flex-column">
          <div>
            <label className="form-label">Zmeniť meno</label>
            <input className="input-group-text" value={profileInfo?.username} />
          </div>
          <div>
            <label className="form-label">Zmeniť telefónne číslo</label>
            <input className="input-group-text" value={profileInfo?.phone_number} />
          </div>
          <div>
            <label className="form-label">Zmeniť email</label>
            <input className="input-group-text" value={profileInfo?.email} />
          </div>
          <button type="button" className="btn btn-primary">Uložiť zmeny</button>
        </form>
      </div >
    </div >
  );
};

export default ProfileSettingsInfo;
