import * as React from 'react';
import { useState } from 'react';
import { Listing } from '../../data/types';
import { deleteListing } from '../../services/listingApi';



export const ListingsDisplay = ({ listings }: { listings: Listing[] }) => {
  const [count, setCount] = useState(0);

  const deleteHandler = async (id:number) => {
    const result = await deleteListing(id);
    if (result) {
      window.alert(`Listing with id ${id} has been deleted.`)
      setCount(count + 1);
    }
  };
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
            <button onClick={()=>deleteHandler(listing.id)}>Delete</button>
            <hr />
          </div>)
            
      })}
    </div>
  );
};
