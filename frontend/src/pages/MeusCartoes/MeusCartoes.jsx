import React,{useState,useEffect,useContext} from "react"
import { Link} from 'react-router-dom'
import "./MeusCartoes.css"
import Cartoes from "../../components/Cartoes/Cartoes"
import { getCartoes,CreateCartao,destroyCartao } from "../../services/api"
import { AuthContext } from "../../contexts/auth"

const MeusCartoes = () => {
  
    const {user,logout,deleteAcc} = useContext(AuthContext)
  const [cartoes,setCartoes] = useState([])
  const [loading,setLoading] = useState(false)
  const [loadingError,setLoadingError] =  useState(false)

  const loadData = async (query = '') => {
    try {
      const response = await getCartoes(user?.id,query)
      setCartoes(response.data)
      setLoading(false)
      console.log(typeof response.data)
    } catch (err) {
      console.error(err)
      setLoadingError(true)
    }
  }
  useEffect(()=>{
    (async () => await loadData())()
  },[])

  const handleNewCartao = async (cartaoNumero,cartaoTipo)=>{
    console.log('new card Created')
    try {
      await CreateCartao(user?.id,cartaoNumero,cartaoTipo)
      await loadData()
    } catch (err) {
      console.error(err)
      setLoadingError(true)
    }
  }
  const handleDeleteCartao = async(id)=> {
    console.log('deleteRepo')
    await destroyCartao( user?.id,id)
    await loadData()
  }

  if(loadingError){
    <div className="loading">
      Erro ao carregar os dados de repositório.<Link to='/'>Voltar</Link>
    </div>
  }
  if(loading){
    return(
      <div className="loading">
        Carregando...
      </div>
    )
  }
  return (
    <div className="main">
      <Cartoes 
      cartoes={cartoes}
      onDeleteCartao={handleDeleteCartao}  
      onNewCartao={handleNewCartao}
      />
    </div>
  );
};

export default MeusCartoes