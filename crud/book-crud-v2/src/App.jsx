import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./component/BookList";
import AddBook from "./component/AddBook";
import EditBook from "./component/EditBook";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/add" element={<AddBook />} />
                <Route path="/edit/:id" element={<EditBook />} />
            </Routes>
        </Router>
    );
}

export default App;
