import * as React from "react";
import { useEffect, useState, ChangeEvent } from "react";
import { getAllCategories } from "../../services/apiServices/categoryApi";
import { Category, Listing } from "../../data/interfaces";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { createListing } from "../../services/apiServices/listingApi";

const AddListing = () => {
  const [img, setImg] = useState<File | undefined>(undefined);
  const [categories, setCategories] = useState<Category[] | undefined>(
    undefined
  );
  const [listingBody, setListingBody] = useState<Listing>({
    id: 0,
    name: "",
    category_id: 0,
    price: 0,
    locality: "",
    description: "",
    watch_count: 0,
  });

  useEffect(() => {
    const fetchListings = async () => {
      const result = await getAllCategories();
      if (!result) return;
      setCategories(result);
    };
    fetchListings();
  }, []);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevents the default form submission behavior
    try {
      console.log(listingBody);
      if (listingBody === undefined) return;
      const response = await createListing(listingBody, img);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setListingBody((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setListingBody((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFile = (e: any) => {
    setImg(e.target.files[0]);
  };

  return (
    <div>
      <Navbar />
      <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col-6 row justify-content-md-center">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="input-group mb-3 pt-3">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Zadajte názov inzerátu:
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-3">
                <textarea
                  className="form-control"
                  name="description"
                  required
                  aria-label="With textarea"
                  placeholder="Zadaje popisok ku vašmu inzerátu"
                  onChange={(e) => handleInputChange(e)}
                ></textarea>
              </div>
              <div className="input-group mb-3">
                <label className="input-group-text">Vyberte kategoriu</label>
                <select
                  className="form-select"
                  name="category_id"
                  id="inputGroupSelect01"
                  required
                  onChange={(e) => handleSelectChange(e)}
                >
                  {categories != null &&
                    categories.map((item) => {
                      return <option key={item.id}>{item.name}</option>;
                    })}
                </select>
              </div>
              <div className="input-group mb-3">
                <input
                  type="file"
                  name="image"
                  required
                  className="form-control"
                  id="inputGroupFile01"
                  onChange={(e) => handleFile(e)}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">€</span>
                <span className="input-group-text">0.00</span>
                <input
                  type="text"
                  name="price"
                  required
                  className="form-control"
                  aria-label="Dollar amount (with dot and two decimal places)"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div>
                <input
                  className="btn btn-primary col-3 mb-5"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddListing;
