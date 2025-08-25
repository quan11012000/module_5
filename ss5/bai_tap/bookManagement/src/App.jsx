
import './App.css'
import StudentList from "./component/List.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Create from "./component/Create.jsx";

function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StudentList/>} />
                <Route path="/create" element={<Create/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
