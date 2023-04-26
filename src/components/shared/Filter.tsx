import * as React from 'react';
import { Category } from '../../data/types';
import { getAllCategories } from '../../services/categoryApi';
import { useEffect, useState } from 'react';

const Filter = () => {
  const [sliderValue, setSlider] = useState<number>(0);
  const [categories, setCategories] = useState<Category[]|null>(null);

  useEffect(() => {const fetchListings = async () => {
    const result = await getAllCategories();
    setCategories(result);
  };
    fetchListings();
  }, []);
  return (
    <div className="d-flex justify-content-start bg-primary p-2 m-2 rounded-3 grid gap-0 column-gap-3">
      <input
        className="input-group-text"
        type="text"
        placeholder="Search.."
      ></input>
      <select className="input-group-text" name="category" id="category">
        {categories!=null && (categories.map((item) => 
          {
            return <option>{item.name}</option>;
          })
        )}
      </select>
      <div className="slider">
        <input
          type="range"
          min="0"
          max="1000"
          onChange={(e) => setSlider(Number(e.target.value))}
        ></input>
        <p id="rangeValue">{sliderValue}</p>
      </div>
    </div>
  );
};
export default Filter;
