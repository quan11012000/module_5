
import './App.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Create from "./component/Create.jsx";
import BookList from "./component/List.jsx";
import Edit from "./component/Edit.jsx";


function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/create" element={<Create/>} />
                <Route path="/edit/:id" element={<Edit/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
