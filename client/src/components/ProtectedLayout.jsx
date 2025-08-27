import { ProtectedRoute } from "../ProtectedRoute";
import { Header } from "./Header";

export default function ProtectedLayout({ children }) {
  return (
    <ProtectedRoute>
      <Header />
      {children}
    </ProtectedRoute>
  );
}
