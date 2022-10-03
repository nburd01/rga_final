import { useState, useEffect, useRef } from "react";
  
const PDF = () => {

    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry)  => {
    //     console.log("entry", entry)
    //     if (entry.isIntersecting){
    //       entry.target.classList.add('show');
    //       } else {
    //         entry.target.classList.remove('show');
    //       }
    //     });
    //   });
    
    //   const hiddenElements = document.querySelectorAll('.hidden'); 
    //   hiddenElements.forEach((el) => observer.observe(el));


    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Dossier_inscription__RGA 22-23.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Dossier_inscription__RGA 22-23.pdf';
                alink.click();
            })
        })
    }
    return (
        <section className=''>
            <div className="container">
                <div className="pdf ">
                    <div className="block">
                <div className="_TitleSubTitle" data-aos="fade-up">
                    <h1>Le dossier d'inscription à nous renvoyer</h1>
                    <h3>Téléchargez les documents en cliquant sur le bouton ci-dessous :</h3>
                </div>
                        <div className="btnContainer">
                            <button onClick={onButtonClick}>
                                <span>Télécharger le dossier</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
  
export default PDF;