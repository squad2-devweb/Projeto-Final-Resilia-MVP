import React, { createContext,useState,useEffect } from "react"
import { API,createSession,createUser,deleteUser,updateUser } from "../services/api"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const [loginError,setLoginError] = useState('')
    const [signUpError,setSignUpError] = useState('')
    useEffect(()=>{
        const user = localStorage.getItem('user')
        const token = localStorage.getItem('token')
        
        if(user && token){
            setUser(JSON.parse(user))
            API.defaults.headers.Authorization = `Bearer ${token}`
        }
        setLoading(false)
    },[])
    const cadastro = async (nome,cpf,email,password) => {
      try {
        if(!email && !password){
          return setSignUpError('Email inválido')
        }
        const response = await createUser(nome,cpf,email,password)
        console.log(response)
        login(email,password)
        setSignUpError('')
        // navigate('/')
      } catch (err) {
        console.error(err)
        return setSignUpError('Usuário já cadastrado')
      }
    }

    const login = async (email,password) => {
        try {
            const response = await createSession(email,password)
            localStorage.setItem('user',JSON.stringify(response.data.user))
            localStorage.setItem('token',response.data.token)
            API.defaults.headers.Authorization = `Bearer ${response.data.token}`
            setUser(response.data.user)
            setLoginError('')
            navigate('/')
        } catch (err) {
            console.error(err)
            setLoginError('Usuário ou senha Inválido, tente novamente ou contate o suporte')
        }
        
    }
    const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        API.defaults.headers.Authorization = null
        setUser(null)
        navigate('/login')
    }
    
    const deleteAcc = async () => {
      try {
        const userId = user.id
        await deleteUser(userId)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        API.defaults.headers.Authorization = null
        setUser(null)
        navigate('/cadastro')
      } catch (err) {
        console.log(err)
      }
    }
    const update = async(userId,nome,email,idade,cpf,password) => {
      console.log(userId,nome,email,idade,cpf)
      await updateUser(userId,nome,email,idade,cpf,password)
    }

  return (
    <AuthContext.Provider
      value={{
        authenticated:!!user,//Boolean(user)
        user,
        loading,
        cadastro,
        signUpError,
        login,
        loginError,
        logout,
        deleteAcc,
        update
      }}>
      {children}
    </AuthContext.Provider>
  );
};
