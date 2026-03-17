import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ClientDetailsPage from "./pages/ClientDetailsPage";
import ClientsPage from "./pages/ClientsPage";
import AddMeasurementPage from "./pages/AddMeasurementPage";
import BrowsePage from "./pages/BrowsePage";
import SavedPage from "./pages/SavedPage";
import ProfilePage from "./pages/ProfilePage";
import BottomNav from "./components/BottomNav";

function App() {
  const [clients, setClients] = useState(() => {
    const saved = localStorage.getItem("stitchClients");
    return saved ? JSON.parse(saved) : [];
  });

  const [savedStyles, setSavedStyles] = useState(() => {
    const saved = localStorage.getItem("stitchSavedStyles");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("stitchClients", JSON.stringify(clients));
  }, [clients]);

  useEffect(() => {
    localStorage.setItem("stitchSavedStyles", JSON.stringify(savedStyles));
  }, [savedStyles]);

  return (
    <div className="pb-16 bg-[#FEFBF3] min-h-screen font-sans">
      <Routes>
        <Route path="/" element={<ClientsPage clients={clients} />} />
        <Route path="/client/:id" element={<ClientDetailsPage clients={clients} />} />
        <Route path="/add-measurement" element={<AddMeasurementPage setClients={setClients} />} />
        <Route 
          path="/browse" 
          element={<BrowsePage savedStyles={savedStyles} setSavedStyles={setSavedStyles} />} 
        />
        <Route 
          path="/details" 
          element={<SavedPage savedStyles={savedStyles} setSavedStyles={setSavedStyles} />} 
        />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;