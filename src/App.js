import "./App.css";
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
  Outlet,
  useParams,
} from "react-router-dom";
/**
 * BrowserRouter 是更常用的路由器，可以提供更乾淨的 URL，
 * 但它需要正確設置伺服器以處理所有路由請求。
 *
 * HashRouter 則不依賴於伺服器設定，
 * 更適合於靜態網站或在不可修改伺服器設定的情況下使用。
 * */

const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <Logout />
    </>
  );
};

const Login = () => {
  return (
    <>
      <p>這是登入頁面</p>
    </>
  );
};

const Register = () => {
  return <p>這是註冊頁面</p>;
};

const Logout = () => {
  let navigate = useNavigate();
  function logOut() {
    navigate("/login");
  }

  return (
    <>
      <button onClick={logOut}>登出</button>
    </>
  );
};

const Post = () => {
  return (
    <>
      <h1>POST 頁面 wwww</h1>
      <Outlet />
    </>
  );
};

const PostId = () => {
  // 從 "/post/:postId" 取得
  let { postId } = useParams();

  return (
    <>
      <p>POST ID: {postId}</p>
    </>
  );
};

function App() {
  return (
    <div className="container">
      {/*  使用 URL 的哈希（hash）部分，將路徑添加到 URL 的結尾，例如 /#/login */}
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route
            path="/"
            element={
              <main style={{ padding: "1rem" }}>
                <p>這是首頁</p>
              </main>
            }
          ></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/post" element={<Post />}>
            <Route path="/post/:postId" element={<PostId />}></Route>
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>PAGE 404</p>
                <h1>NOT FOUND</h1>
              </main>
            }
          />
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
