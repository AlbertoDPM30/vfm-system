import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, Dashboard } from "./pages";
import { ProtectedLayout } from "./components";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* RUTAS PÚBLICAS */}
      <Route path="/login" element={<Login />} />

      {/* RUTAS PROTEGIDAS */}

      <Route
        path="/"
        element={
          <ProtectedLayout>
            <Dashboard />
          </ProtectedLayout>
        }
      />
      {/* Agrega otras rutas protegidas o públicas aquí */}
    </Routes>
  );
}

export default App;
