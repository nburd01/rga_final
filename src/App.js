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
import { faCaretRight, faCheck, faEnvelope, faLocationDot, faMap, faPhone, fas, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faLinkedin, faFontAwesome, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { HorairesPage } from "./pages/Horaires/HorairesPage";
import { BackToTop } from "./components/BackToTop/BackToTop";
import { useRef } from 'react';

library.add(fas, faTwitter, faFacebook, faLinkedin, faInstagram , faFontAwesome, faCheck, faXmark, faLocationDot, faCaretRight, faEnvelope, faPhone, faMap )

function App() {


  const {currentUser} = useContext(AuthModeContext);

  const RequireAuth= ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  };

  console.log("currentUser",currentUser);


  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry)  =>{
  //   console.log("entry", entry)
  //   if (entry.isIntersecting){
  //     entry.target.classList.add('show');
  //     } else {
  //       entry.target.classList.remove('show');
  //     }
  //   });
  // });

  // const hiddenElements = document.querySelectorAll('.hidden'); 
  // hiddenElements.forEach((el) => observer.observe(el));






//   const myRef = useRef();
//   useEffect(() =>  {
// console.log("myRef",myRef.current)
//   }, [])

  
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
            {/* <Route path="login" element={<Login />} /> */}
            {/* <Route path="admin" element={
            <RequireAuth>
              <AdminHome/>
            </RequireAuth>
            } /> */}
          </Route>

            {/* <Route path="login" element={<Login />} /> */}
           

        </Routes>
      {/* <BackToTop/> */}
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
