import React, { useEffect, useState } from 'react';
import { Listing, User } from '../../data/interfaces';
import ListingMenu from '../Profile/components/ListingsMenu';
import ProfileInfo from '../Profile/components/ProfileInfo';
import { ListingsDisplay } from '../shared/ListingDisplay';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { getUserData } from '../../services/apiServices/userApi';

import "./styles/profilePage.css"
const Profile = () => {
  const sessionStr = localStorage.getItem("sessionStr");
  const isLoggedIn = sessionStr !== null;

  const [myListings, setMyListings] = useState(undefined);
  const [mySavedListings, setMySavedListings] = useState(undefined)
  const [selectedListings, setSelectedListings] = useState(undefined)

  // const fetchListings = async () => {
  //   const result = await getAllListings();
  //   console.warn(result)
  //   setListings(result);
  // };

  useEffect(() => {
    //fetchListings();
  }, []);

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
