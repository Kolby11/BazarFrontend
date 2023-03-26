import React, { useEffect, useState } from 'react';
//types
import { Listing } from '../../data/types';
//services
import { getAllListings } from '../../services/listingApi';

//components
import Filter from '../shared/Filter';
import { ListingsDisplay } from '../shared/ListingDisplay';
import Navbar from '../shared/Navbar';

const Home = () => {
  const [listings, setListings] = useState<Listing[]|null>(null);

  useEffect(() => {
    const fetchListings = async () => {
      const result = await getAllListings();
      setListings(result);
    };
    fetchListings();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Bazoš</h1>
      <p>Icon buttons:</p>
      <button className="btn">
        <i className="fa fa-home"></i>
      </button>
      <button className="btn">
        <i className="fa fa-bars"></i>
      </button>
      <button className="btn">
        <i className="fa fa-trash"></i>
      </button>
      <button className="btn">
        <i className="fa fa-close"></i>
      </button>
      <button className="btn">
        <i className="fa fa-folder"></i>
      </button>
      <div className="topnav">
        <Filter />
      </div>
      {listings!=null && (
  <ListingsDisplay listings={listings} />
)}

    </div>
  );
};

export default Home;
