
import './App.css'
import StudentList from "./component/List.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StudentList/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
