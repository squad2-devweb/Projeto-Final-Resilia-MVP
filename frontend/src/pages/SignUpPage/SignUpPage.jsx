import React,{useState,useContext} from "react"
import { AuthContext } from "../../contexts/auth"
import { Link } from "react-router-dom"
// import "./SignUpPage.css"



//Imports Bootstrap
import Container from 'react-bootstrap/Container';
import  Button  from "react-bootstrap/Button";
import Input from 'react-bootstrap/InputGroup';

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
    // <div className="cadastro">
    //   <div className="form">
    //   <div className="title">Cadastro</div>
    //     <form onSubmit={handleCadastro}>
    //       <div className="field">
    //         <label htmlFor="nome">Nome:</label>
    //         <input
    //           type="text"
    //           name="nome"
    //           id="nome"
    //           onChange={(e) => setNome(e.target.value)}
    //         />
    //       </div>
    //       <div className="field">
    //         <label htmlFor="cpf">CPF:</label>
    //         <input
    //           type="number"
    //           name="cpf"
    //           id="cpf"
    //           onChange={(e) => setCpf(e.target.value)}
    //         />
    //       </div>
    //       <div className="field">
    //         <label htmlFor="email">E-mail:</label>
    //         <input
    //           type="email"
    //           name="email"
    //           id="email"
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </div>
    //       <div className="field">
    //         <label htmlFor="password">Senha:</label>
    //         <input
    //           type="password"
    //           name="password"
    //           id="password"
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </div>
    //       <p className="signUpError">{signUpError}</p>
    //       <div className="actions">
    //         <button>Cadastrar</button>
    //       </div>
    //     <p>Já possui uma conta?<Link className="signUp" to='/login'>Sign In</Link></p>
    //     </form>
    //   </div>
    // </div>,

    <Container className="d-grid h-100 mb-4">
    <div className="d-flex  flex-row  justify-content-center align-items-center mt-5 ">
        
        <img src='/assets/bus-stop-animate.svg' className="w-50 h-50 d-none d-sm-block" />

      <form className=" border border-primary rounded text-center p-3 w-90 col-md-4 col-sm-8" onSubmit={handleCadastro}>
        <h1>Cadastro</h1>

              <div className="mt-3 mb-3">
                  <label className="form-label h4">Nome</label>
                  <input  className="form-control border border-primary"  placeholder="Digite seu nome." 
                  type="text"
                  name="nome"
                  id="nome"
                  onChange={(e) => setNome(e.target.value)}
                  required
                  />
              </div>

              <div className="mt-3 mb-3">
                  <label className="form-label h4">CPF</label>
                  <input  className="form-control border border-primary text-none"  placeholder="Digite seu CPF." 
                  type="number"
                  name="cpf"
                  id="cpf"
                  onChange={(e) => setCpf(e.target.value)}
                  required
                  />
              </div>

              <div className="mt-3 mb-3">
                  <label className="form-label h4">Email</label>
                  <input className="form-control border border-primary" placeholder="Digite seu email."    type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)} 
              required
              />
              </div>

              <div className="mt-3 mb-3">
                  <label className="form-label h4">Senha</label>
                  <input  className="form-control border border-primary"  placeholder="Digite sua senha."
                   type="password"
                   name="password"
                   id="password"
                   onChange={(e) => setPassword(e.target.value)}
                   required
                   />
              </div>
              
              <p className="signUpError">{signUpError}</p>
              <div className=" text-center">
                  <Button type="submit" className="btn btn-lg btn-primary ">Sign up</Button>
          </div>

      <div className="text-start align-self-end mt-4">
      <p>Já possui uma conta?<Link className="signUp" to='/login'>Sign In</Link></p>
    </div>
      </form>
      </div>
      </Container>
  );
};

export default SignUpPage;
