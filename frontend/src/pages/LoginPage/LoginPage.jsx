import React, { useContext, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import { Link } from "react-router-dom"

import "./LoginPageStyle.css"

const LoginPage = () => {
  const {authenticated,user,login,loginError} = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    login(email,password)

  };

  return (
    <div className="login">
      {/* <p>Authenticated?:{JSON.stringify(authenticated)}</p>
      <p>Email:{JSON.stringify(user)}</p> */}
      <div className="form">
      <div className="title">Login</div>
        <form onSubmit={handleLogin}>
          <div className="field">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="loginError">{loginError}</p>
          <div className="actions">
            <button>Entrar</button>
          </div>
        <p>Não possui uma conta?<Link className='signIn' to='/cadastro'>Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
