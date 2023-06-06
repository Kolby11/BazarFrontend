import * as React from 'react';
import { Listing } from '../../data/interfaces';

export const ListingsDisplay = ({ listings }: { listings: Listing[] | undefined }) => {
	console.warn(listings)
	return (
		<div className="m-5">
			{listings && listings.length > 0 ? (
				<div className="row mb-4 border-bottom border-3 border-primary">
					<h6 className="col">Obrázok</h6>
					<h6 className="col-5">Informácie</h6>
					<h6 className="col">Cena</h6>
					<h6 className="col">Lokalita</h6>
				</div>
			) : (
				<p>No available listings</p>
			)}

			{listings?.map((listing: Listing) => (
				<div key={listing.id} className="row">
					<img alt="Obrazok" className="col" />
					<div className="col-5">
						<b>{listing.name}</b>
						<p>{listing.description}</p>
					</div>
					<b className="col">{listing.price}</b>
					<p className="col">{listing.locality}</p>
					<hr />
				</div>
			))}
		</div>
	);
};
