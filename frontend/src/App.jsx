import "./App.css";
import AppRoutes from "./Rotas/AppRoutes";
import React, { useContext } from "react";
import { AuthContext, AuthProvider } from "./contexts/auth";

function App() {
  return (
      <AppRoutes />
  );
}

export default App;
