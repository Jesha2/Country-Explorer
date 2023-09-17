import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from "../redux/slices/potentialCountriesSlice";
import displayedCountryReducer from "../redux/slices/displayCountrySlice";
import isLoadingReducer from "../redux/slices/loadingSlice";


// configure store invoked, passing in an object as the single parameter
// Add a “reducer” property to the object, and give it the value of an empty object. (This is where we are going to supply the reducers)
export default configureStore({
    reducer: {//we are going to use this potentialCountries key in selectPotentials() in potentialCountriesSlice
        potentialCountries: potentialCountriesReducer,
        displayedCountry : displayedCountryReducer,
        isLoading: isLoadingReducer,


    },
    

});