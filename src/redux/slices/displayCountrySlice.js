import {createSlice} from "@reduxjs/toolkit";
import initialCountry from '../../assets/initialCountry';

export const displayCountrySlice = createSlice({
    name: "displayedCountry",
    initialState: {
        value: initialCountry,
    },
    reducers: {
        setDisplayCountry: (state, action) => {// action arg is optional foreg. in counters we just use ++ on the state value to set the new value. state is auto passed you dont pass it when u call . this 2 methods called on header.js
            state.value = action.payload;//here it will be the data from API
        },
        deleteDisplayCountry: (state) => {
            state.value = null;
        },
    },
});

// The createSlice method of “@reduxjs/toolkit” will take whatever reducers you add to the “reducers” property of its argument and turn them into an “actions”. You can then use these actions anywhere in your application to manipulate global state.
export const { setDisplayCountry, deleteDisplayCountry } =
displayCountrySlice.actions;//called when doing axios call in header.js using useDispatch()
//This function defines how to read the state of potentialCountries. You will use this function elsewhere in your react app to READ from state.*****/used as args in useSelector Hook in the components
export const selectDisplay = (state) => state.displayedCountry.value;
// The reducer from potentialCountriesSlice is created by the “createSlice” method from “@reduxjs/toolkit”.  you are going to supply this master reducer to your redux STORE.
export default displayCountrySlice.reducer;

