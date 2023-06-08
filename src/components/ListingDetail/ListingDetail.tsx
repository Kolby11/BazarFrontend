import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { getListing } from "../../services/apiServices/listingApi";
import { Listing } from "../../data/interfaces";

import "./styles/listingDetail.css"
const ListingDetail = () => {
	const { id } = useParams();
	const [listing, setListing] = useState<Listing | undefined>(undefined);

	useEffect(() => {
		const fetchListing = async () => {
			try {
				const data = await getListing(Number(id));
				setListing(data);
			} catch (error) {
				console.error(error);
				setListing(undefined);
			}
		};
		fetchListing();
	}, [id]);

	if (!listing) {
		return <div>Loading...</div>;
	}

	// Render the listing details
	return (
		<div>
			<Navbar />
			<div className="detailWrapper">
				<div className="detailWindow">
					<div>
						<img src="" alt={listing.name + " obrazok"}></img>
					</div>
					<div className="detailInfo">
						<h2>{listing.name}</h2>
						<p>{listing.description}</p>
						<div>
							<p>Pozretia: {listing.watch_count}</p>
							<p>Cena: <strong>{listing.price}</strong></p>
							<p>Lokalita: {listing.locality}</p>
						</div>

					</div>

				</div>

			</div>
			<Footer />
		</div>
	);
};

export default ListingDetail;
