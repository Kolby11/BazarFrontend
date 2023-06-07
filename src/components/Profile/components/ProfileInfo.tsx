import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserData } from '../../../services/apiServices/userApi';
import { User } from '../../../data/interfaces';

const ProfileInfo = () => {

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
      <div className="flex-column justify-content-center">
        <img src={'Images/profile_blank.png'} alt="Profile Image"></img>
        <p className="text-center">{profileInfo?.username}</p>
        <Link to="/profile/settings/">Edit Profile Info</Link> <br></br>
      </div>
    </div>
  );
};

export default ProfileInfo;
