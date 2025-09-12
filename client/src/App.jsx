import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Login,
  Register,
  Dashboard,
  Home,
  Services,
  NotFound,
  AboutUs,
  ContactUs,
} from "./pages";
import { ProtectedLayout } from "./components";

function App() {
  return (
    <Routes>
      {/* RUTAS PÚBLICAS */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
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
      {/* RUTA 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
