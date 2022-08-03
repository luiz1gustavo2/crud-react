import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Menu from './components/Menu';

import ViewStudent from './pages/ViewStudent';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';

import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  return (
    <div className="App">
        <BrowserRouter>

          <Menu />

          <Routes>
            <Route path="/students" element={<ViewStudent />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/edit-student/:id" element={<EditStudent />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
