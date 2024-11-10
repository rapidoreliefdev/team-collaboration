import "./App.css";
import Home from "./components/Home/index";
import Aboutus from "./components/Aboutus/index";
import Career from "./components/Career/index";
import Login from "./components/Login/index";
import Register from "./components/Register/index";
import Dashboard from "./components/Dashboard/Index";
import { AuthProvider } from "./components/services/authService";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthGuard from "./components/services/authGuard";
// import HomePortuguese from './Portuguese/Home/index'
// import AboutusPortuguese from './Portuguese/Aboutus/index'
import Blogs from "./components/Blogs";
import SingleBlogPost from "./components/Blogs/SingleBlog";
import PrivacyPolicy from "./pages/privacyPolicy";
import Explore from "./pages/Explore";
import Fundraise from "./components/fundraise";
import { ModalProvider } from "./Contexts/ModalContext";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <ModalProvider>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/fundraise" element={<Fundraise />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:slug" element={<SingleBlogPost />} />
              <Route path="/career" element={<Career />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/dashboard"
                element={
                  <AuthGuard adminRequired>
                    <Dashboard />
                  </AuthGuard>
                }
              />

              {/* portugues pages  */}
              {/* <Route exact path="/homeportuguese" element={<HomePortuguese />} /> */}
              {/* <Route exact path="/aboutusportuguese" element={<AboutusPortuguese />} /> */}
            </Routes>
          </ModalProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
