import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { Login, Register, Settings, Profile } from "./pages/user"
import Format from "./components/DynamicPageRender"
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
      <Route index element={<Format title="Dashboard" Component={Main} />} />
      <Route path="/login" element={<Format title="Login | SSE Blogs" Component={Login} />} />
      <Route path="/register" element={<Format title="Register | SSE Blogs" Component={Register} />} />
      <Route path="/profile" element={<Format title="Profile | SSE Blogs" Component={Profile} />} />
      <Route path="/setting" element={<Format title="Setting | SSE Blogs" Component={Settings} />} />
    </Routes>
  )
}

export default App
