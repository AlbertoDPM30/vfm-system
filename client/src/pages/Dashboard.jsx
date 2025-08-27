// import { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-5xl font-bold">
        Bienvenido {user[0].nombres} {user[0].apellidos}
      </h1>
    </div>
  );
}
