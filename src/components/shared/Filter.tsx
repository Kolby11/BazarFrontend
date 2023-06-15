import React, { useEffect, useState } from "react";
import { Category } from "../../data/interfaces";
import { getAllCategories } from "../../services/apiServices/categoryApi";

const Filter = ({ onFilter }: { onFilter: (filterData: any) => void }) => {
  const [sliderValue, setSlider] = useState<number>(0);
  const [categories, setCategories] = useState<Category[] | undefined>(
    undefined
  );
  const [filterData, setFilterData] = useState({
    search: "",
    category: 0,
    sliderValue: 0,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getAllCategories();
      setCategories(result);
    };
    fetchCategories();
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

  const submitFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFilter(filterData); // Pass the filterData to the parent component
  };

  return (
    <div
      className="d-flex bg-primary p-2 m-2 rounded-3 grid gap-0 column-gap-3"
      style={{ justifyContent: "space-evenly", alignItems: "center" }}
    >
      <form onSubmit={submitFilter}>
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
            name="sliderValue"
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
