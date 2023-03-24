import * as React from 'react';

let kategorie: string[] = [
  'Zvieratá',
  'Deti',
  'Práca',
  'Auto',
  'Motocykle',
  'Stroje',
  'Záhrada',
  'Mobily',
  'PC',
];

const Filter = () => {
  const [sliderValue, setSlider] = React.useState<number>(0);
  return (
    <div className="d-flex justify-content-start bg-primary p-2 m-2 rounded-3 grid gap-0 column-gap-3">
      <input
        className="input-group-text"
        type="text"
        placeholder="Search.."
      ></input>
      <select className="input-group-text" name="category" id="category">
        {kategorie.map((item) => {
          return <option>{item}</option>;
        })}
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
