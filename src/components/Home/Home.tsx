import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { ListingsDisplay } from "../shared/ListingDisplay";
import Filter from "../shared/Filter";
import {
  getAllListings,
  getFilteredListings,
} from "../../services/apiServices/listingApi";
import { Listing } from "../../data/interfaces";

const Home = () => {
  const [listings, setListings] = useState<Listing[] | undefined>(undefined);

  const fetchListings = async (filterData: any) => {
    if (
      filterData.search === "" &&
      filterData.category === 0 &&
      filterData.sliderValue === 0
    ) {
      // Fetch all listings if no filters applied
      const result = await getAllListings(undefined);
      setListings(result);
    } else {
      // Fetch filtered listings based on filterData
      const result = await getFilteredListings(
        filterData.search,
        filterData.category,
        filterData.sliderValue
      );
      setListings(result);
    }
  };

  useEffect(() => {
    fetchListings({ search: "", category: 0, sliderValue: 0 });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="m-5">
        <h1>Bazoš</h1>
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
          <Filter onFilter={fetchListings} />
        </div>
        <ListingsDisplay listings={listings} />
        <Link to="addListing">
          <div className="stlacitko">
            <p className="plusko">+</p>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
