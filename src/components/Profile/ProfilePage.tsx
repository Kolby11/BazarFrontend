import * as React from 'react';
import { Listing } from '../../data/types';
import ListingMenu from '../Profile/components/ListingsMenu';
import ProfileInfo from '../Profile/components/ProfileInfo';
import { ListingsDisplay } from '../shared/ListingDisplay';
import Navbar from '../shared/Navbar';

const Profile = () => {
  let listings: Listing[] = [];
  return (
    <div className='m-5 flex'>
      <Navbar />
      <ProfileInfo />
      <ListingMenu />
      <ListingsDisplay listings={listings} />
    </div>
  );
};

export default Profile;
