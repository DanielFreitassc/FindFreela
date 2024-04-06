import { useContext, useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { useNavigate } from "react-router-dom"
import { privateAPi } from "../../services/privateApi"

const RequiredAuth = ({children}:{children: React.ReactNode}) => {
    const {setUser, signOut} = useContext(AuthContext)
    const [loading, setLoading] = useState<boolean>(true)
    const navigate = useNavigate()

    const validateToken = async() => {
        await privateAPi
            .get('')
            .then((res) => {
                setUser(res.data)
                localStorage.setItem("user", res.data)
            })
            .catch(() => {
                signOut()
                navigate("/login")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        if(localStorage.getItem('authToken')){
            validateToken()
        }else{
            navigate('/login')
        }
    }, [])

  return loading ? (
    <span>Carregando...</span>
  ) : (
    children
  )
}

export default RequiredAuth