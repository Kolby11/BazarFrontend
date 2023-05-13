import * as React from 'react';
import { useState } from 'react';
import { Listing } from '../../data/interfaces';

export const ListingsDisplay = ({ listings }: { listings: Listing[] }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="m-5">
      <div className="row mb-4 border-bottom border-3 border-primary">
        <h6 className="col">Obrázok</h6>
        <h6 className="col-5">Informácie</h6>
        <h6 className="col">Cena</h6>
        <h6 className="col">Lokalita</h6>
      </div>
      {listings.map((listing: Listing) => {
        return(
          <div key={listing.id} className="row">
            <img alt="Obrazok" className="col" />
            <div className="col-5">
              <b>{listing.name}</b>
              <p>{listing.description}</p>
            </div>
            <b className="col">{listing.price}</b>
            <p className="col">{listing.locality}</p>
            <hr />
          </div>)
            
      })}
    </div>
  );
};
