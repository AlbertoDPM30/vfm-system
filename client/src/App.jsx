import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, Register, Dashboard, Home } from "./pages";
import { ProtectedLayout } from "./components";

function App() {
  return (
    <Routes>
      {/* RUTAS PÚBLICAS */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />

      {/* RUTAS PROTEGIDAS */}

      <Route
        path="/dashboard"
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
