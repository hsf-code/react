import * as React from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet, NavLink,
} from "react-router-dom";
import { fakeAuthProvider } from "./auth";

export default function AuthTest() {
  return (
      <AuthProvider>
        <h1>Auth Example</h1>
       <RouteProvider></RouteProvider>
      </AuthProvider>
  );
}

// 路由提供者
function RouteProvider(){
  return(
      <Routes>
        {/* 属性：  element（勾芡组件）path（匹配路径） */}
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
              path="/protected"
              element={
                <RequireAuth>
                  <ProtectedPage />
                </RequireAuth>
              }
          />
        </Route>
      </Routes>
  )
}

function Layout() {
  return (
      <>
        <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
        >
          <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/">Public Page</NavLink> |{" "}
          <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/protected">protected</NavLink> |{" "}
        </nav>

        {/* Outlet 路由的出口（包括二级或者三级） */}
        <Outlet />
        {/* 登陆状态 */}
        <AuthStatus />
      </>
  );
}

// 创建一个共享的上下文
let AuthContext = React.createContext(null);

// 登录状态的提供者
function AuthProvider({ children }) {
  console.log('传递的组件', children)
  // state的hook，不会随着函数执行完状态就初始化，会保存状态
  let [user, setUser] = React.useState(null);

  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  // 你在一个组件中，<>插入的元素h1会默认变成其组件的props.children</>，因为在jsx语法中，组件就是一个对象
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 获取认证的上下文
function useAuth() {
  return React.useContext(AuthContext);
}

// 认证的状态
function AuthStatus() {
  let auth = useAuth();
  // 编程式导航
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }
  return (
      <p>
        Welcome {auth.user}!{" "}
        <button
            onClick={() => {
              auth.signout(() => navigate("/"));
            }}
        >
          Sign out
        </button>
      </p>
  );
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }

  return (
      <div>
        <p>You must log in to view the page at {from}</p>

        <form onSubmit={handleSubmit}>
          <label>
            Username: <input name="username" type="text" />
          </label>{" "}
          <button type="submit">Login</button>
        </form>
      </div>
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}
