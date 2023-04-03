import React,{useState,useEffect,useContext} from "react"
import { Link} from 'react-router-dom'
// import "./MainPageStyle.css";
import NavBar from "../../components/NavBar"
import Search from "../../components/Search"
// import Repositories from "../../components/Repositories"
// import { getRepositories,CreateRepository,destroyRepository } from "../../services/api"
import { AuthContext } from "../../contexts/auth"
import { Carousel } from "react-bootstrap"
import Cards from "../../components/Cards/Cards"


// const user?.id = '641b117faa456b11b5a1bafb'

const MainPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
const a = {
  img:{
    objectFit:"contain",
    height:"450px",
    width:"100%"
  },
  bg:{
    background:"linear-gradient(yellow,blue)"
  }
}
    return (
      <>
        <Carousel variant='dark' activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img style={a.img}
              className="d-block w-100"
              src="/assets/carro/4.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p>Ande com conforto e segurança.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={a.img}
              className="d-block w-100"
              src="/assets/novas/women.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p>Viagem rápida e tranquila.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={a.img}
              className="d-block w-100"
              src="/assets/novas/3605.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p>Wi-Fi 6g liberado!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Cards />
  </>
    );


  };

export default MainPage;

// const {user,logout,deleteAcc} = useContext(AuthContext)
// const [repositories,setRepositories] = useState([])
// const [loading,setLoading] = useState(false)
// const [loadingError,setLoadingError] =  useState(false)

// const loadData = async (query = '') => {
//   try {
//     const response = await getRepositories(user?.id,query)
//     setRepositories(response.data)
//     setLoading(false)
//   } catch (err) {
//     console.error(err)
//     setLoadingError(true)
//   }
// }
// useEffect(()=>{
//   (async () => await loadData())()
// },[])
// const handleSearch = async (query)=>{
//   loadData(query)
//  } 


// const handleNewRepo = async (url)=>{
//   console.log('new Repo Created',url)
//   try {
//     await CreateRepository(user?.id,url)
//     await loadData()
//   } catch (err) {
//     console.error(err)
//     setLoadingError(true)
//   }
// }
// const handleDeleteRepo = async(repository)=> {
//   console.log('deleteRepo')
//   await destroyRepository( user?.id,repository._id)
//   await loadData()
// }
// const handleDeleteAcc = async()=> {
// console.log('handleDeleteAcc')
// deleteAcc()
// }
// if(loadingError){
//   <div className="loading">
//     Erro ao carregar os dados de repositório.<Link to='/'>Voltar</Link>
//   </div>
// }
// if(loading){
//   return(
//     <div className="loading">
//       Carregando...
//     </div>
//   )
// }
// return (
  // <div className="main">
  //   {/* <NavBar onLogout={()=>logout()}/> */}
  //   <Search onSearch={handleSearch} />
  //   <Repositories 
  //   repositories={repositories}
  //   onDeleteRepo={handleDeleteRepo}  
  //   onNewRepo={handleNewRepo}
  //   onDeleteAcc={handleDeleteAcc}
  //   />
  // </div>
// );