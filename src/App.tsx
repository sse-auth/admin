import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { Login, Register, Settings, Profile } from "./pages/user"
import Format from "./components/DynamicPageRender"
import Main from "./pages/dashboard"
import { UserData } from "./pages/dashboard/users"
import Loader from "./common/Loader"
import Layout from "./layout"
import UnderMaintenance from "./pages/others/UnderMaintenance"

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
      {/* <Layout>
        <Route index element={<Format title="Dashboard" Component={Main} />} />
        <Route path="/profile" element={<Format title="Profile | SSE Blogs" Component={Profile} />} />
        <Route path="/settings" element={<Format title="Setting | SSE Blogs" Component={Settings} />} />
        <Route path="/users" element={<Format title="User | SSE Blogs" Component={UserData} />} />
        <Route path="/users/:id" element={<Format title="UserDetails | SSE Blogs" Component={UserData} />} />
        <Route path="/users/new" element={<Format title="New User | SSE Blogs" Component={UserData} />} />
      </Layout> */}
      <Route path="/" element={<UnderMaintenance hours="10" minute="11" second="01" />} />
      <Route path="/login" element={<Format title="Login | SSE Blogs" Component={Login} />} />
      <Route path="/register" element={<Format title="Register | SSE Blogs" Component={Register} />} />
    </Routes>
  )
}

export default App
