import React from 'react'
import { Helmet } from 'react-helmet-async';
import SEO from '../../seo/SEO';


export default function CookiesPage() {
    return (


        <div class="container Center" role="main">
            <SEO
            title="Les cookies de la Roazhon Goal Academy"
            description="Bienvenue à la Roazhon Goal Academy. Nous proposons des entraînements spécifiques de gardiens de but au travers de séances techniques et ludiques pour les 10 - 13 ans à proximité de Rennes !"
            name="Bienvenue à la Roazhon Goal Academy"
            type="accueil"
            />

        <Helmet>
            <title>Les cookies de la Roazhon Goal Academy</title>
            <meta
            title="Les cookies de la Roazhon Goal Academy" 
            name='Roazhon Goal Academy Contact' 
            content='La Roazhon Goal Academy a une page cookies.'
            />
            <meta name='keywords' content='Cookies, Football, Academy, Roazhon Goal Academy, Le Rheu, Rennes, Gardiens de but, spécifiques, jeunes, formation' />
        </Helmet>
            <h2 class="element-invisible">Cookies</h2>         

        <div class="panel-pane pane-news-social-single">
            <div class="panel-pane pane-entity-field pane-node-body">
                <div class="field field--name-body field--type-text-with-summary field--label-hidden">
                    <div class="field__items">
                        <div class="field__item even">
                            <p><strong>Qu’est- ce qu’un cookie ? </strong>
                            Un cookie est un simple fichier texte envoyé à votre navigateur. Il&nbsp;nous permet pas de vous identifier,&nbsp;en revanche, il enregistre des informations relatives à votre&nbsp;navigation sur notre site.</p>
                        </div>

                        <div class="field__item even">
                            <p>Nous vous informons que vous pouvez vous opposer à l'enregistrement de cookies en configurant votre navigateur de la manière suivante</p>

                            <p>
                                <strong>Sous Microsoft Internet Explorer</strong>
                                <ol>
                                    <li>Choisissez le menu "Outils », puis "Options Internet"</li>
                                    <li>Cliquez sur l’onglet "Confidentialité"</li>
                                    <li>Sélectionnez le niveau souhaité à l’aide du curseur</li>
                                </ol>
                            </p>

                            <p><strong>Sous Mozilla Firefox</strong>
                            <ol>
                                <li>Choisissez le menu « Outils » puis « Options »</li>
                                <li>Cliquez sur l’onglet « Vie privée »</li>
                                <li>Dans la liste déroulante « Règles de conservation » sélectionnez le niveau souhaité</li>
                                
                            </ol>
                        </p>

                            <p><strong>Sous Google Chrome</strong>
                            <ol>
                                <li>Cliquez sur l’icône permettant d’afficher le menu des paramètres</li>
                                <li>Cliquez sur « Options »</li>
                                <li>Dans la zone "Historique", sélectionnez "utiliser les paramètres personnalisés pour l’historique"</li>
                                <li>Choisissez le niveau souhaité</li>
                            </ol>
                        </p>

                            <p><strong>Sous Safari</strong>
                            <ol>
                                <li>Cliquez dans le menu « Safari »</li>
                                <li>Cliquez sur « Préférences »</li>
                                <li>Dans l’onglet « Sécurité » sélectionnez le niveau souhaité</li>
                                <li></li>
                            </ol>
                         </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}
