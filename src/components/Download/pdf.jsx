import React from "react";
  
const PDF = () => {
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
        <section>
            <div className="container">
                <div className="pdf">
                    <div className="block">
                <div className="_TitleSubTitle">
                    <h1>Le dossier d'inscription à nous renvoyer</h1>
                    <h3>Téléchargez les documents en cliquant sur le bouton ci-dessous :</h3>
                </div>
                        <div className="btnContainer">
                            <button onClick={onButtonClick}>
                                Télécharger le dossier
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
  
export default PDF;