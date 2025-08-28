import { useState } from "react";
import { ProtectedRoute } from "../ProtectedRoute";
import { Header } from "./Header";
import { AsideMenu } from "./AsideMenu";

export default function ProtectedLayout({ children }) {
  const [showMenu, setShowMenu] = useState(true);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <ProtectedRoute>
      <Header onToggleShowMenu={toggleShowMenu} />
      <AsideMenu display={showMenu ? "hidden" : "block"} />
      {children}
    </ProtectedRoute>
  );
}
