import React,{useState,useContext} from "react"
import { AuthContext } from "../../contexts/auth"
import { Link } from "react-router-dom"
import "./SignUpPage.css"

const SignUpPage = () => {
    const {cadastro,signUpError} = useContext(AuthContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleCadastro = async (e) => {
    e.preventDefault()
    cadastro(email,password)

  };
  return (
    <div className="cadastro">
      <div className="form">
      <div className="title">Cadastro</div>
        <form onSubmit={handleCadastro}>
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
          <p className="signUpError">{signUpError}</p>
          <div className="actions">
            <button>Cadastrar</button>
          </div>
        <p>Já possui uma conta?<Link className="signUp" to='/login'>Sign In</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
