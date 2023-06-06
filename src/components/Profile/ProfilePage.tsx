import React, { useEffect, useState } from 'react';
import { Listing } from '../../data/interfaces';
import ListingMenu from '../Profile/components/ListingsMenu';
import ProfileInfo from '../Profile/components/ProfileInfo';
import { ListingsDisplay } from '../shared/ListingDisplay';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

import "./styles/profilePage.css"
import { getUserListings, getUserSavedListings } from '../../services/apiServices/listingApi';

const Profile = () => {
  const sessionStr = localStorage.getItem("sessionStr");
  const userId = Number(localStorage.getItem("userId"));
  const isLoggedIn = sessionStr !== null;

  const [myListings, setMyListings] = useState<Listing[] | undefined>(undefined);
  const [mySavedListings, setMySavedListings] = useState(undefined)
  const [selectedListings, setSelectedListings] = useState<Listing[] | undefined>(undefined)

  const fetchMyListings = async () => {
    if (!userId) {
      return
    }
    try {
      const result = await getUserListings(userId);
      console.warn(result)
      setMyListings(result);

    }
    catch (error) {
      console.error(error)
      return
    }
  };
  // const fetchMySavedListings = async () => {
  //   try {
  //     const result = await getUserSavedListings();
  //     setMyListings(result);

  //   }
  //   catch (error) {
  //     console.error(error)
  //     return
  //   }
  // };

  useEffect(() => {
    if (isLoggedIn) {
      fetchMyListings();
      // fetchMySavedListings();
    }
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
