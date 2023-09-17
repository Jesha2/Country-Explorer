import "./App.css";
import Header from "./Components/Header";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import {selectDisplay} from "./redux/slices/displayCountrySlice"
import { useSelector } from "react-redux";
import MainDisplay from "./Components/MainDisplay";
import LoadingModal from "./Components/LoadingModal";
import { selectLoading } from "./redux/slices/loadingSlice";

function App() {
    // use the useSelector hook to read from the store You can use the useDispatch hook to write to the store
    // let potentials = useSelector(selectPotentials);
    // console.log("PotentialArrayList ", potentials);
    let currentDisplay = useSelector(selectDisplay);
    console.log("CurrentDisplay  ",currentDisplay  );
    let isLoading = useSelector(selectLoading);
    //console.log("DisplayBoth",currentDisplay , potentials );
    return (
        <div className="App font-link">
             {isLoading && <LoadingModal />}
            <Header />
            {currentDisplay ? <MainDisplay/> : <OptionDisplay />}
        </div>
    );
}
export default App;



