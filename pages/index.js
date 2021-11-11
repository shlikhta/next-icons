import React, {useState} from "react";
import { OutlineIcons } from "../src/components/OutlineIcons";
import { SolidIcons } from "../src/components/SolidIcons";
import { ChromePicker  } from 'react-color'

export default function Home() {
  const [lineWidth, setLineWidth] = useState(1);
  const [searchStr, setSearchStr] = useState('');
  const [color, setColor] = useState("#000000");
  // const [color, setColor] = useState("#FFA500");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color) => {
    setColor(color.hex);
  }

  return (
    <div className="app">
      <div className="header">
        <div className="search">
          <input className='search__input' type="text" onChange={(e) => {setSearchStr(e.target.value)}} value={searchStr}/>
        </div>
        <div className="range">

          <input className='range__input' type="range" id="stroke-width" name="stroke-width"
                 min="0" max="3" step={0.25} value={lineWidth} onChange={(e) => {setLineWidth(e.target.value)}}/>
          <div className='range__value'>{lineWidth}</div>
          <style>
            {`
           .next-icon {
          stroke-width: ${lineWidth};
          color: ${color};
        }`}
          </style>
        </div>
        <div>
          <div className="swatch" style={{backgroundColor: color}} onClick={handleClick}/>
          { displayColorPicker ? <div className='popover' >
            <div className='cover' onClick={ handleClose }/>
            <ChromePicker  color={ color } onChange={ handleChange } />
          </div> : null }
        </div>
      </div>

      <div className="icons-container">
        <OutlineIcons searchStr={searchStr}/>
        <SolidIcons searchStr={searchStr}/>
      </div>
    </div>
  );
}
