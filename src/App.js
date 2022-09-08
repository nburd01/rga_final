import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { Home } from "./pages/Home/Home";
import { Inscriptions } from "./pages/Inscriptions/Inscriptions";
import { RGA } from "./pages/RGA/RGA";
import { Seances } from "./pages/Seances/Seances";
import { Multimedia } from "./pages/Multimedia/Multimedia";
import { Contact } from "./pages/Contact/Contact";
import { MainNav } from "./components/MainNav/MainNav";
import AdminHome from "./adminPages/home/adminHome";
import { AuthModeContext } from "./context/AuthContext";
import "./index.scss";
import { Footer } from "./components/Footer/Footer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faLinkedin, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFacebook, faLinkedin, faFontAwesome)

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthModeContext);

  const RequireAuth= ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  };

  console.log("currentUser",currentUser);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <MainNav/>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="rga" element={<RGA />} />
            <Route path="inscriptions" element={<Inscriptions />} />
            <Route path="seances" element={<Seances />} />
            <Route path="multimedia" element={<Multimedia />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="admin" element={
            <RequireAuth>
              <AdminHome/>
            </RequireAuth>
            } />
          </Route>

            {/* <Route path="login" element={<Login />} /> */}
           

        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
