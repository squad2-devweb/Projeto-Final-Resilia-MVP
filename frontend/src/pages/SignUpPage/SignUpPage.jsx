import React,{useState,useContext} from "react"
import { AuthContext } from "../../contexts/auth"
import { Link } from "react-router-dom"
import "./SignUpPage.css"

const SignUpPage = () => {
    const {cadastro,signUpError} = useContext(AuthContext)
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleCadastro = async (e) => {
    e.preventDefault()
    cadastro(nome,cpf,email,password)

  };
  return (
    <div className="cadastro">
      <div className="form">
      <div className="title">Cadastro</div>
        <form onSubmit={handleCadastro}>
          <div className="field">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              name="nome"
              id="nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="cpf">CPF:</label>
            <input
              type="number"
              name="cpf"
              id="cpf"
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
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
