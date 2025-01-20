import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Menupage from './pages/Menupage';
import RestaurantsPage from './pages/RestaurantsPage';

function App() {
  return (<div>
    

    <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/bestellung" element={<Menupage />} />
                    <Route path="/restaurants" element={<RestaurantsPage />} />
                </Routes>
            
    </Router>
   
    </div>
    );
}

export default App;
