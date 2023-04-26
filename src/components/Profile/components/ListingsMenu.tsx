import * as React from 'react';

const ListingMenu = () => {
  const [myListings, setMyListings] = React.useState(true);
  return (
    <div className="m-5">
        <button className="btn btn-primary mx-3" onClick={() => setMyListings(true)}>
          Moje Inzeraty
        </button>
        <button className="btn btn-primary" onClick={() => setMyListings(false)}>
          Uložené inzeráty
        </button>
    </div>
  );
};

export default ListingMenu;
