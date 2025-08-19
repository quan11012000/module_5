import React, { useState } from "react";
import PersonList from "./component/PersonList";
import PersonDetail from "./component/PersonDetail";
import PersonAdd from "./component/PersonAdd";
import PersonUpdate from "./component/PersonUpdate";

const App = () => {
    const [view, setView] = useState("list");
    const [selected, setSelected] = useState(null);

    return (
        <div className="container mx-auto p-6">
            {view === "list" && (
                <PersonList
                    onView={(p) => {
                        setSelected(p);
                        setView("detail");
                    }}
                    onAdd={() => setView("add")}
                    onUpdate={(p) => {
                        setSelected(p);
                        setView("update");
                    }}
                />
            )}
            {view === "detail" && <PersonDetail person={selected} onBack={() => setView("list")} />}
            {view === "add" && <PersonAdd onBack={() => setView("list")} />}
            {view === "update" && <PersonUpdate person={selected} onBack={() => setView("list")} />}
        </div>
    );
};

export default App;
