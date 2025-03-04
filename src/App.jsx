import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails.jsx";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar"; 

function App() {
  return (
    <Router>
      {/* ✅ Agregamos la barra de navegación */}
      <Navbar />  
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:id" element={<CountryDetails />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}


export default App;
