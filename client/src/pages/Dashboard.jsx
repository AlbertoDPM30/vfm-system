import { Users } from "../api/Users";

export default function dashboard() {
  const { getUsers } = Users;
  return (
    <div>
      <h1 className="text-5xl font-bold">Bienvenido </h1>
    </div>
  );
}
