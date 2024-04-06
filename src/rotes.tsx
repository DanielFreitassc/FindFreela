import { BrowserRouter, Route, Routes } from "react-router-dom"
import RequiredAuth from "./context/Auth/RequiredAuth"
import Header from "./components/Header"
import { AuthProvider } from "./context/Auth/AuthProvider"
import Login from "./screen/Login"

const AppRoutes = () => {
  return (
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route 
                    path="/"
                    element={
                        <>
                            <RequiredAuth>
                                <Header />
                            </RequiredAuth>
                        </>
                    }
                >
                    
                </Route>
            </Routes>
        </BrowserRouter>
    </AuthProvider>
  )
}

export default AppRoutes