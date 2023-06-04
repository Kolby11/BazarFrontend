import React, { useEffect, useState } from 'react';
//types
import { Listing } from '../../data/interfaces';
//services
import { getAllListings } from '../../services/apiServices/listingApi';

//components
import Filter from '../shared/Filter';
import { ListingsDisplay } from '../shared/ListingDisplay';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Home = () => {
	const [listings, setListings] = useState<Listing[] | undefined>(undefined);

	const fetchListings = async () => {
		const result = await getAllListings();
		console.warn(result)
		setListings(result);
	};

	useEffect(() => {
		fetchListings();
	}, []);

	return (
		<div>
			<Navbar />
			<div className='m-5'>
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
					<Filter />
				</div>
				<ListingsDisplay listings={listings} />
				<div className="stlacitko">
					<p className="plusko">+</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
