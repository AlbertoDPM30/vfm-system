import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Loading } from "../components";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState("hidden");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading("block");
      if (username == "" || password == "") {
        return setIsLoading("hidden");
      }
      await login({ username, password });
      navigate("/");
    } catch (error) {
      setIsLoading("hidden");
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 justify-center items-center p-5 border-2 rounded-3xl border-slate-400"
      >
        <h1 className="font-bold mb-3">VFM SYSTEM</h1>
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
        <button type="submit">Iniciar Sesión</button>

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

export default LoginPage;
