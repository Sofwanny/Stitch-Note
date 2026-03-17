import { Routes, Route } from "react-router-dom";
import ClientDetailsPage from "./pages/ClientDetailsPage";
import ClientsPage from "./pages/ClientsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ClientsPage />} />
      <Route path="/client/:id" element={<ClientDetailsPage />} />
    </Routes>
  );
}

export default App;