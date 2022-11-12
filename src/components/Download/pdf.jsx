import { collection } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../firebase";

  
export default function PDF () {

    const [subscribeFiles, setSubscribeFiles] = useState([])

    useEffect(() => {
        const subscribeFilesRef = collection(db,  )
    })

    return (
        <section className=''>
            {
                subscribeFiles.length === 0 ? (
                    <p>no files</p>
                )
                : 
                (
                    subscribeFiles.map((subscribeFile, index) =>
                    <div>

                    </div>
                    )
                    // <div>div</div>
                )
            }
        </section>
    );
};
  





  
// const PDF = () => {
//     // Function will execute on click of button
//     const onButtonClick = () => {
//         // using Java Script method to get PDF file
//         fetch('Dossier_inscription__RGA 22-23.pdf').then(response => {
//             response.blob().then(blob => {
//                 // Creating new object of PDF file
//                 const fileURL = window.URL.createObjectURL(blob);
//                 // Setting various property values
//                 let alink = document.createElement('a');
//                 alink.href = fileURL;
//                 alink.download = 'Dossier_inscription__RGA 22-23.pdf';
//                 alink.click();
//             })
//         })
//     }
//     return (
//         <section className=''>
//             <div className="container">
//                 <div className="pdf ">
//                     <div className="block">
//                 <div className="_TitleSubTitle" data-aos="fade-up">
//                     <h1>Le dossier d'inscription à nous renvoyer</h1>
//                     <h3>Téléchargez les documents en cliquant sur le bouton ci-dessous :</h3>
//                 </div>
//                         <div id="linkAnchor" className="btnContainer">
//                             <button onClick={onButtonClick}>
//                                 <span>Télécharger le dossier</span>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };
  
// export default PDF;