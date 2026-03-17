import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ClientDetailsPage from "./pages/ClientDetailsPage";
import ClientsPage from "./pages/ClientsPage";
import AddMeasurementPage from "./pages/AddMeasurementPage";
import BottomNav from "./components/BottomNav";

function App() {
  const [clients, setClients] = useState(() => {
    const saved = localStorage.getItem("stitchClients");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("stitchClients", JSON.stringify(clients));
  }, [clients]);

  return (
    <div className="pb-16 bg-[#FEFBF3] min-h-screen font-sans">
      <Routes>
        <Route path="/" element={<ClientsPage clients={clients} />} />
        <Route path="/client/:id" element={<ClientDetailsPage clients={clients} />} />
        <Route path="/add-measurement" element={<AddMeasurementPage setClients={setClients} />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;