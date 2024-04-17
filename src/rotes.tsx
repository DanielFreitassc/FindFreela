import { BrowserRouter, Route, Routes } from "react-router-dom"
import RequiredAuth from "./context/Auth/RequiredAuth"
import Header from "./components/Header"
import { AuthProvider } from "./context/Auth/AuthProvider"
import Login from "./screen/Login"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import Register from "./screen/Register"

const AppRoutes = () => {
  return (
    <AuthProvider>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
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
        </ThemeProvider>
    </AuthProvider>
  )
}

export default AppRoutes