import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import DetailsPage from './components/detailPage/DetailsPage';
import MainPage from './components/mainPage/MainPage';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
             <Route path="/" element={<MainPage/>} />
              <Route path="/movieDetails/:movieId" element={<DetailsPage/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />

        </Routes>
     </Router>
    </div>
  );
}

export default App;
