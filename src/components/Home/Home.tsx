import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Filter from '../shared/Filter';
import { ListingsDisplay } from '../shared/ListingDisplay';
import Navbar from '../shared/Navbar';

const Home = () => {
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
      <ListingsDisplay listings={[]} listingsAmount={0} isOwner={false} />
    </div>
  );
};

export default Home;
