import React, { useState } from "react";
import Weather from "./Weather"
import Symbols from "./Symbols";
import Overview from "./Overview";

const MainDisplay = () => {
    const [view, setView] = useState("Overview");
    return (
        <div className="stack">
            <div className="tab-select">
                <button onClick={() => setView("Overview")}>Overview</button>
                <button onClick={() => setView("Weather")}>
                    Current Weather at Capitol
                </button>
                <button onClick={() => setView("Symbols")}>Symbols</button>
            </div>
            {view === "Overview" && < Overview />}
            {view === "Weather" && < Weather />}
            {view === "Symbols" && < Symbols />}

        </div>
    );
};

export default MainDisplay;
