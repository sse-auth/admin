import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Login, Register, Settings, Profile } from './pages/user';
import { FormatL, Format } from './components/DynamicPageRender';
import Main from './pages/dashboard';
import { UserData } from './pages/dashboard/users';
import Loader from './common/Loader';
import { CommingSoon, Error } from './pages/others';

function App() {
  const [loading, setLoading] = React.useState<boolean>(true);
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route index element={<FormatL title="Dashboard" Component={Main} />} />
      <Route
        path="/profile"
        element={<FormatL title="Profile | SSE Blogs" Component={Profile} />}
      />
      <Route
        path="/settings"
        element={<FormatL title="Setting | SSE Blogs" Component={Settings} />}
      />
      <Route
        path="/users"
        element={<FormatL title="User | SSE Blogs" Component={UserData} />}
      />
      <Route
        path="/users/:id"
        element={
          <FormatL title="UserDetails | SSE Blogs" Component={UserData} />
        }
      />
      <Route
        path="/users/new"
        element={<FormatL title="New User | SSE Blogs" Component={UserData} />}
      />
      {/* <Route path="/" element={<CommingSoon hours="10" minute="11" second="01" />} /> */}
      <Route
        path="/login"
        element={<Format title="Login | SSE Blogs" Component={Login} />}
      />
      <Route
        path="/register"
        element={<Format title="Register | SSE Blogs" Component={Register} />}
      />
      <Route
        path="/*"
        element={<Format title="404 | SSE Blogs" Component={Error} />}
      />
    </Routes>
  );
}

export default App;
