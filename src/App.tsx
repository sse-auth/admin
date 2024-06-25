import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { Login, Register, Settings, Profile } from "./pages/user"
import Main from "./pages/dashboard"
import Loader from "./common/Loader"

function App() {
  const [loading, setLoading] = React.useState<boolean>(true)
  const { pathname } = useLocation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/setting" element={<Settings />} />
    </Routes>
  )
}

export default App
