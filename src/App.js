import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
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
import { Admin } from "./pages/admin/admin/Admin";
import { AdmInscriptions } from "./pages/admin/Pages/Pages/Inscriptions/AdmInscriptions";
import { AdmRga } from "./pages/admin/Pages/Pages/RGA/AdmRga";
import { AdmSeances } from "./pages/admin/Pages/Pages/Seances/AdmSeances";
import { AdmPlanning } from "./pages/admin/Pages/Pages/Planning/AdmPlanning";
import { AdmBoutique } from "./pages/admin/Pages/Pages/Boutique/AdmBoutique";
import { HelmetProvider } from 'react-helmet-async';
import { AdmContacts } from "./pages/admin/Pages/Pages/Contact/AdmBoutique";
import { AdmBlog } from "./pages/admin/Pages/Pages/Blog/AdmBlog";
import BlogArticle from "./components/Blog/Article";


library.add(fas, faComment,faMagnifyingGlass,faTwitter, faFacebook, faLinkedin, faInstagram , faFontAwesome, faCheck, faXmark, faLocationDot, faCaretRight, faEnvelope, faPhone, faMap )

function App() {

  const {currentUser} = useContext(AuthModeContext);
  const RequireAuth= ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  };
  const helmetContext = {};

  console.log("currentUser",currentUser);

  return (
    <HelmetProvider context={helmetContext}>
    <div className="app">
      <BrowserRouter>
        <title>Roazhon Goal Academy</title>
        <meta 
        name='Roazhon Goal Academy' 
        content='La Roazhon Goal Academy propose des entraînements spécifiques de gardiens de but au travers de séances techniques et ludiques pour les 10 - 13 ans à proximité de Rennes !'
        />
        <meta name='keywords' content='Football, Academy, Roazhon Goal Academy, Le Rheu, Rennes, Gardiens de but, spécifiques, jeunes, formation' />

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
            <Route path="blog/:id" element={<BlogArticle/>} />
            <Route path="/*" element={<Home />} /> 
            <Route path="admin" element={
            <RequireAuth>
              <Admin/>
            </RequireAuth>
            } />
          </Route>

          <Route path="admin" element={<Admin />}>
              <Route path="blog" element={<AdmBlog />} />
              <Route path="rga" element={<AdmRga />} />
              <Route path="inscriptions" element={<AdmInscriptions />} />
              <Route path="seances" element={<AdmSeances />} />
              <Route path="planning" element={<AdmPlanning />} />
              <Route path="boutique" element={<AdmBoutique/>} />
              <Route path="contact" element={<AdmContacts/>} />
          </Route>

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
    </HelmetProvider>
  );
}

export default App;
