import './App.css';
import Menu from './components/Menu';
import Guest from './components/MenuVisitante';
import axios from 'axios';
import AuthUser from './pages/AuthUser';

axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  const { getToken } = AuthUser();
  if (!getToken()) {
    return (
      <>
    <Guest />
      </>
    );
  }
  return (
    <div className="App">
      <Menu />

    </div>
  );
}

export default App;
