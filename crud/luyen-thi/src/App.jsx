
import './App.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Create from "./component/Create.jsx";
import List from "./component/List.jsx";
import Edit from "./component/Edit.jsx";
import Detail from "./component/Detail.jsx";



function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/create" element={<Create/>} />
                <Route path="/edit/:id" element={<Edit/>} />
                <Route path="/detail/:id" element={<Detail/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
