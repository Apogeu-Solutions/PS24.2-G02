// auth.routes.tsx
import {Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import { Cadastro } from "../pages/Cadastro/Cadastro";

const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
};

export default AuthRoutes;
