// import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { CardItem } from "../components";
import UserIcon from "../../public/icons/user.svg";
import ClientIcon from "../../public/icons/client.svg";

export default function Dashboard() {
  const { user } = useAuth();
  const loggedUser = user[0];

  const itemCards = [
    {
      position: 1,
      name: "Usuarios",
      route: "/usuarios",
      icon: UserIcon,
    },
    {
      position: 2,
      name: "Clientes",
      route: "/clientes",
      icon: ClientIcon,
    },
  ];

  return (
    <div>
      <h2 className="my-5 pb-2 text-3xl text-shadow-lg font-bold text-center border-b-4 border-sky-800">
        <span className="text-sky-700">Bienvenid@, </span>
        {loggedUser.nombres} {loggedUser.apellidos}
      </h2>

      <section className="w-full py-7 px-9 grid grid-cols-4 gap-5">
        {itemCards.map((item) => (
          <CardItem
            key={item.id}
            route={item.route}
            icon={item.icon}
            name={item.name}
          />
        ))}
      </section>
    </div>
  );
}
