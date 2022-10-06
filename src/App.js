import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Home } from "./pages/Home/Home";
import { Inscriptions } from "./pages/Inscriptions/Inscriptions";
import { RGA } from "./pages/RGA/RGA";
import { Seances } from "./pages/Seances/Seances";
import { Multimedia } from "./pages/Multimedia/Multimedia";
import { Contact } from "./pages/Contact/Contact";
import { MainNav } from "./components/MainNav/MainNav";
import { AuthModeContext } from "./context/AuthContext";
import "./index.scss";
import { Footer } from "./components/Footer/Footer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretRight, faCheck, faComment, faEnvelope, faLocationDot, faMagnifyingGlass, faMap, faPhone, fas, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faLinkedin, faFontAwesome, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { HorairesPage } from "./pages/Horaires/HorairesPage";
import CookieConsent from "react-cookie-consent";
import CookiesPage from "./pages/cookies/cookies";
import Login from "./pages/admin/login/Login";
import { Admin } from "./pages/admin/admin/admin";
import { AdmPages } from "./pages/admin/admNav/Pages/AdmPages";
import { AdmLinks } from "./pages/admin/admNav/Links/AdmLinks";
import { AdmMultimedia } from "./pages/admin/admNav/Multimedia/AdmMultimedia";
import { Adm_home } from "./pages/admin/admNav/Pages/Pages/Adm_home";
import { Adm_inscriptions } from "./pages/admin/admNav/Pages/Pages/Adm_inscriptions";
import { Adm_rga } from "./pages/admin/admNav/Pages/Pages/Adm_rga";
import { Adm_seances } from "./pages/admin/admNav/Pages/Pages/Adm_seances";
import { Adm_planning } from "./pages/admin/admNav/Pages/Pages/Adm_planning";
import { Adm_boutique } from "./pages/admin/admNav/Pages/Pages/Adm_boutique";
import { Adm_contact } from "./pages/admin/admNav/Pages/Pages/Adm_contact";


library.add(fas, faComment,faMagnifyingGlass,faTwitter, faFacebook, faLinkedin, faInstagram , faFontAwesome, faCheck, faXmark, faLocationDot, faCaretRight, faEnvelope, faPhone, faMap )

function App() {


  // const {currentUser} = false;
  const {currentUser} = useContext(AuthModeContext);

  const RequireAuth= ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  };

  console.log("currentUser",currentUser);

  return (
    <div className="app">
      <BrowserRouter>
      <MainNav/>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="rga" element={<RGA />} />
            <Route path="inscriptions" element={<Inscriptions />} />
            <Route path="seances" element={<Seances />} />
            <Route path="horaires" element={<HorairesPage />} />
            <Route path="multimedia" element={<Multimedia />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cookies" element={<CookiesPage/>} />
            <Route path="login" element={<Login />} />
            <Route path="admin" element={
            <RequireAuth>
              <Admin/>
            </RequireAuth>
            } />
          </Route>

          <Route path="admin" element={<Admin />}>
            
            <Route path="pages" element={<AdmPages/>}>
              <Route path="home" element={<Adm_home />} />
              <Route path="rga" element={<Adm_rga />} />
              <Route path="inscriptions" element={<Adm_inscriptions />} />
              <Route path="seances" element={<Adm_seances />} />
              <Route path="planning" element={<Adm_planning />} />
              <Route path="boutique" element={<Adm_boutique />} />
              <Route path="contact" element={<Adm_contact />} />
            </Route>

            <Route path="liens" element={<AdmLinks />} />
            <Route path="multimedia" element={< AdmMultimedia/>} />
          </Route>

            {/* <Route path="login" element={<Login />} /> */}
           

        </Routes>
      {/* <BackToTop/> */}
      <Footer/>
      </BrowserRouter>
      <CookieConsent
        location="bottom"
        buttonText="J'accepte, fermer."
        cookieName="RGPD cookies"
        style={{ background: "var(--primary)", color: "var(--secondary)" }}
        buttonStyle={{ color: "var(--primary)", background: "var(--secondary)", fontSize: "16px", height: "auto" }}
        expires={150}
        DeclineButton={{background: "var(--secondary)"}}
        >  
        Sur roazhongoalacademy.fr, nous employons des cookies destinés à améliorer votre expérience de navigation et à vous offrir un service plus personnalisé. En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de ces cookies. Vous pouvez changer votre configuration ou obtenir de plus amples informations en consultant notre <a href="/cookies">politique d'utilisation des cookies</a>.{" "}
</CookieConsent>
    </div>
  );
}

export default App;
