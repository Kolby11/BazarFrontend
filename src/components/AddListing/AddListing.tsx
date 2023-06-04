import * as React from 'react';
import { useEffect, useState } from 'react';
import { getAllCategories } from '../../services/apiServices/categoryApi';
import { Category, Listing } from '../../data/interfaces';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';


const AddListing = () => {
  const [listingBody, setListingBody] = useState<Listing | null>(null)
  const [categories, setCategories] = useState<Category[] | null>(null)

  useEffect(() => {
    const fetchListings = async () => {
      const result = await getAllCategories();
      setCategories(result);
    };
    fetchListings();
  }, []);

  const submitListning = () => {

  }
  return (
    <div>
      <Navbar />
      <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col-6 row justify-content-md-center">
            <div className="input-group mb-3 pt-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Zadajte názov inzerátu:</span>
              <input type="text" className="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
              <textarea className="form-control" aria-label="With textarea"
                placeholder="Zadaje popisok ku vašmu inzerátu"></textarea>
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text">Vyberte kategoriu</label>
              <select className="form-select" id="inputGroupSelect01">
                {categories != null && (categories.map((item) => {
                  return <option>{item.name}</option>;
                })
                )}
              </select>
            </div>
            <div className="input-group mb-3">
              <input type="file" className="form-control" id="inputGroupFile01" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">€</span>
              <span className="input-group-text">0.00</span>
              <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
            </div>
            <div>
              <input className="btn btn-primary col-3 mb-5" type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default AddListing;