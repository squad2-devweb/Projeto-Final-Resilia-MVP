import React, { useContext,useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { Button } from "react-bootstrap";

const MinhaConta = () => {
    
  const { user,update } = useContext(AuthContext);
  const { id,nome, email, cpf, idade = 0 } = user;
    
    const [newNome,setNewNome] = useState(nome)
    const [newEmail,setNewEmail] = useState(email)
    const [newIdade,setNewIdade] = useState(idade)
    const [newCpf,setNewCpf] = useState(cpf)
    const [password,setPassword] = useState('')
console.log(id,nome, email, cpf, idade,password )
    const [botao ,setBotao] = useState(false)

    const handleUpdate = ()=>{
        console.log(id,newNome,newEmail,newIdade,newCpf)
        update(id,newNome,newEmail,newIdade,newCpf,password)
        setBotao(false)
    }

    const style = {
        flex:{
            display:"flex",
            gap:"4px",
            flexDirection:"column",
            padding:"1rem",
            margin:"1rem 3rem",
            width:"100%"

        },
        db:{
            display:"block"
        },
        cont:{
            display:"flex",
            margin:"0 auto",
            borderRadius:"24px",
            boxShadow:"4px 4px 5px lightgrey",
            width:"95%",
            height:"650px"
        }
    }
  return (
    <>
    {
        botao ? (
      <div style={style.cont} className="att border mt-4 mb-4" >
        <form style={style.flex}>
        <div className="field">
            <label style={style.db} htmlFor="nome">Nome:</label>
            <input
            className='border border-info'
            type="text"
            name='nome'
            placeholder={nome}
            value={newNome}
            onChange={(e)=> setNewNome(e.target.value)}
            />
        </div>
        <div className="field">
            <label style={style.db} htmlFor="email">Email:</label>
            <input
            className='border border-info'
            type="email"
            name='email'
            placeholder={email}
            value={newEmail} 
            onChange={(e)=> setNewEmail(e.target.value)}
            />
        </div>
        <div className="field">
            <label style={style.db} htmlFor="idade">Idade:</label>
            <input
            className='border border-info'
            type="number"
            name='idade'
            placeholder={idade}
            value={newIdade}
            onChange={(e)=> setNewIdade(e.target.value)}
            />
        </div>
        <div className="field">
            <label style={style.db} htmlFor="cpf">CPF:</label>
            <input
            className='border border-info'
            type="number"
            name='cpf'
            placeholder={cpf}
            value={newCpf} 
            onChange={(e)=> setNewCpf(e.target.value)}
            />
        </div>
        <div className="field">
            <label style={style.db} htmlFor="senha">Senha:</label>
            <input
            className='border border-info'
            type="text"
            name='senha'
            placeholder='Confirme a sua senha'
            value={password} 
            onChange={(e)=> setPassword(e.target.value)}
            />
        </div>
        <Button className='bg-success' onClick={()=>handleUpdate()}>Enviar alterações</Button>
        </form>
      </div>) : (

      <div className="conta border mt-4 mb-4" style={style.cont}>
        <div style={style.flex}>
            <h1>Informações da Conta:</h1>
        <p className='text-muted'>Nome:</p>
        <h3 className='border-bottom w-50'>{nome}</h3>
        <p className='text-muted'>Email:</p>
        <p className='border-bottom w-50'>{email}</p>
        <p className='text-muted'>Idade:</p>
        <p className='border-bottom w-50'>{idade}</p>
        <p className='text-muted'>CPF:</p>
        <p className='border-bottom w-50'>{cpf}</p>
        <Button className='bg-warning mt-2 mb-2' onClick={()=>setBotao(true)}>Alterar dados</Button>
        </div>
      </div>
      )
    }
    </>
  );
};

export default MinhaConta;

