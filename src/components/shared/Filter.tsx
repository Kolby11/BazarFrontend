import * as React from "react";
import { Category } from "../../data/interfaces";
import { getAllCategories } from "../../services/apiServices/categoryApi";
import { useEffect, useState } from "react";

import "./styles/filter.css";

const Filter = () => {
  const [sliderValue, setSlider] = useState<number>(0);
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [filterData, setFilterData] = useState({
    search: "",
    category: "",
    sliderValue: 0,
  });

  useEffect(() => {
    const fetchListings = async () => {
      const result = await getAllCategories();
      setCategories(result);
    };
    fetchListings();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setFilterData((prevData) => ({
      ...prevData,
      sliderValue: value,
    }));
    setSlider(value);
  };

  return (
    <div
      className="d-flex bg-primary p-2 m-2 rounded-3 grid gap-0 column-gap-3"
      style={{ justifyContent: "space-evenly", alignItems: "center" }}
    >
      <form>
        <input
          name="search"
          required
          className="input-group-text"
          type="text"
          placeholder="Search..."
          value={filterData.search}
          onChange={handleInputChange}
          style={{ width: "40%" }}
        ></input>
        <select
          name="category"
          required
          className="input-group-text"
          value={filterData.category}
          onChange={handleInputChange}
        >
          {categories != null &&
            categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
        </select>
        <div className="slider">
          <input
            name="price"
            type="range"
            min="0"
            max="1000"
            required
            value={filterData.sliderValue}
            onChange={handleSliderChange}
          ></input>
          <p id="rangeValue">{sliderValue}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Filter;
