import React,{useState,useContext} from "react";
import {AuthContext} from "../../../contexts/auth"

const AdminSobre = () => {
    const {AdminSobrePost,sobre,AdminSobreDelete} = useContext(AuthContext)
    const [titulo,setTitulo] = useState('')
    const [texto,setTexto] = useState('')
    const handleAdminSobre = ()=>{
        console.log(`postou`)
        AdminSobrePost(titulo,texto)
    }
  return (
    <div className="p-2" style={{minHeight:"800px",maxHeight:"100%",height:"100%",fontFamily:"Maven Pro"}}>
        <h1 className="text-center mt-2 mb-3">Admin Sobre</h1>
      <div className="mb-3">
        <label htmlFor="titulo" className="form-label">
          Título
        </label>
        <input
          type="email"
          className="form-control"
          id="titulo"
          placeholder="Um Título aqui..."
          onChange={(e)=>setTitulo(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="texto" className="form-label">
          Texto
        </label>
        <textarea
        style={{minHeight:"5rem",maxHeight:"30rem",height:"8rem"}}
          className="form-control"
          id="texto"
          rows="3"
          onChange={(e)=>setTexto(e.target.value)}
        ></textarea>
        <button className="btn btn-primary mt-1"
        onClick={handleAdminSobre}>Enviar</button>
      </div>
      <p>{titulo}</p>
      <p>{texto}</p>
      <div className="getSobre container text-center">
        <div className="label row">
            <p className="col-1">ID:</p>
            <p className="col">Titulo</p>
            <p className="col">Texto</p>
            <p className="col-1">Ações</p>
        </div>
{     sobre.length?
    sobre.map((item)=>(
       <div className="item row border-top" key={item.id}>
        <p className="col-1">{item.id}</p>
        <p className="col">{item.titulo}</p>
        <p className="col">{item.texto}</p>
        <button className="col-1 btn btn-danger m-1"
        onClick={()=>{
            AdminSobreDelete(item.id)

        }}
        >Apagar</button>
       </div>
    ))
   :
    <p>Carregando dados...</p>
}

      </div>
    </div>
  );
};

export default AdminSobre;
