import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users } from "../api/Users";
import { Loading } from "../components";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [edad, setEdad] = useState("");
  const [ci, setCI] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState("hidden");
  const { addUser } = Users();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading("block");
      if (
        nombres == "" ||
        apellidos == "" ||
        edad == "" ||
        ci == "" ||
        username == "" ||
        password == ""
      ) {
        return setIsLoading("hidden");
      }
      const dataUsuario = {
        id_rol: 2,
        nombres: nombres,
        apellidos: apellidos,
        edad: edad,
        ci: ci,
        username: username,
        password: password,
      };
      await addUser({ dataUsuario });
      navigate("/login");
    } catch (error) {
      setIsLoading("hidden");
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center my-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 justify-center items-center p-5 border-2 rounded-3xl border-slate-400"
      >
        <h1 className="font-bold mb-2">VFM SYSTEM</h1>
        <h3 className="text-2xl font-semibold mb-3">Registrate</h3>
        <div className="flex gap-5">
          <input
            className="p-2.5 border-2 border-slate-500 rounded-2xl"
            type="text"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            placeholder="Nombres"
            required
          />
          <input
            className="p-2.5 border-2 border-slate-500 rounded-2xl"
            type="text"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            placeholder="Apellidos"
            required
          />
        </div>
        <div className="flex gap-5">
          <input
            className="p-2.5 border-2 border-slate-500 rounded-2xl"
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            placeholder="Edad"
            required
          />
          <input
            className="p-2.5 border-2 border-slate-500 rounded-2xl"
            type="text"
            value={ci}
            onChange={(e) => setCI(e.target.value)}
            placeholder="Cedula"
            required
          />
        </div>
        <div className="flex gap-5">
          <input
            className="p-2.5 border-2 border-slate-500 rounded-2xl"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            className="p-2.5 border-2 border-slate-500 rounded-2xl"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Registrarse</button>

        <a className="mb-2" href="/login">
          ¿Ya tienes una cuenta?
        </a>
        <a href="/">Volver al inicio</a>

        <div
          className={`bg-red-400 text-gray-950 font-semibold border-2 border-red-900 rounded-2xl px-2.5 py-2 ${
            errorMessage == "" ? "hidden" : "block"
          }`}
        >
          {errorMessage}
        </div>

        <div className={isLoading}>
          <Loading />
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
