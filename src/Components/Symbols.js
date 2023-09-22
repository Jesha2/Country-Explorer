import React from 'react';
import {useSelector} from "react-redux";
import {selectDisplay } from "../redux/slices/displayCountrySlice"

const Symbols = () => {
  const currentDisplay = useSelector(selectDisplay); 
  return (
    <div className='symbols'>
      <div className='stack'>
        <h2>Flag of {currentDisplay.name.official}: </h2>
      {currentDisplay.flags
        ?(<img src= {currentDisplay.flags.png} alt="Flag" />)
        :"No data Found"
      }
      </div>
      <div className='stack'>
        <h2>Court of Arms of {currentDisplay.name.official}: </h2>
      {currentDisplay.coatOfArms
        ?(<img src= {currentDisplay.coatOfArms.png} alt="coatOfArms" />)
        :"No data Found"
      }
      </div>
    </div>
  )
}

export default Symbols
