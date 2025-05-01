import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import CreatePortfolio from "./pages/CreatePortfolio";
import PortfolioPage from "./pages/PortfolioPage";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();

  // Hide Navbar only on portfolio pages like /username
  const isPortfolioPage = /^\/[^/]+$/.test(location.pathname);

  return (
    <>
      {!isPortfolioPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePortfolio />} />
        <Route path="/:username" element={<PortfolioPage />} />
      </Routes>
    </>
  );
}

export default App;
