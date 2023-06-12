import * as React from "react";
import { Listing } from "../../data/interfaces";
import { Link } from "react-router-dom";

export const ListingsDisplay = ({
  listings,
}: {
  listings: Listing[] | undefined;
}) => {
  return (
    <div className="m-5">
      <div className="row mb-4 border-bottom border-3 border-primary">
        <h6 className="col">Obrázok</h6>
        <h6 className="col-5">Informácie</h6>
        <h6 className="col">Cena</h6>
        <h6 className="col">Lokalita</h6>
      </div>
      {listings && listings.length > 0 ? (
        listings?.map((listing: Listing) => (
          <div key={listing.id} className="row">
            <img alt="Obrazok" className="col" />
            <div className="col-5">
              <b>
                <Link to={`/listingDetail/${listing.id}`}>{listing.name}</Link>
              </b>
              <p>{listing.description}</p>
            </div>
            <b className="col">{listing.price}</b>
            <p className="col">{listing.locality}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No available listings</p>
      )}
    </div>
  );
};
