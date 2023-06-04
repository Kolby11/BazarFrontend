import * as React from 'react';
import { Listing } from '../../data/interfaces';
import ListingMenu from '../Profile/components/ListingsMenu';
import ProfileInfo from '../Profile/components/ProfileInfo';
import { ListingsDisplay } from '../shared/ListingDisplay';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Profile = () => {
  const sessionStr = localStorage.getItem("sessionStr");
  const isLoggedIn = sessionStr !== null;

  const [profileInfo, setProfileInfo] = React.useState(undefined);
  const [myListings, setMyListings] = React.useState(undefined);
  const [mySavedListings, setMySavedListings] = React.useState(undefined)

  const [selectedListings, setSelectedListings] = React.useState(undefined)
  return (
    <div>
      <Navbar />
      <div className='m-5 flex'>
        <ProfileInfo />
        <div className="m-5">
          <button className="btn btn-primary mx-3" onClick={() => setSelectedListings(myListings)}>
            Moje Inzeraty
          </button>
          <button className="btn btn-primary" onClick={() => setSelectedListings(mySavedListings)}>
            Uložené inzeráty
          </button>
        </div>
        <ListingMenu />
        <ListingsDisplay listings={selectedListings} />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
