import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import "./style.css"

function Home(){
    return(
        <>
            <Navbar />
            <section id="header" className="jumbotron text-center ">
                <h1 className="display-3">Sport</h1>
                <p>Vous accompagne partout en Sécurité Avec Confiance.</p>
            </section>
            <div className="container racine">
        <div id="partieGauche">
       
         <div className="ligne1">
          <div className="monBut">
          <button className="btn btn-button">  100%  Confiance</button>
          </div>
            <div className="imgL2">
            <img src="./../../src/images/homme.jpeg" alt=""/>
            </div>
           
         </div>
         <div className="ligne2">
            <div className="monImg">
            <img src="./../../src/images/jeune.jpeg" alt=""/>
            </div>
              <div className="monBut">
                <button className="btn btn-button">  100% Sécurité</button>
              </div>
         </div>
        </div>
        <div className="partieDroite">
          <a href="#">A Propos</a>
          <p>Pas de Décisions Rapides Mais de Bonnes Décisions  Rapides.</p>
          <a href="#">Nos buts</a>
          <p style={{color: "rgb(145, 142, 142)"}}>être l'un des meilleurs avec des clients partout dans le monde.</p>
          <a href="#">Notre Vision</a>
          <p style={{color: "rgb(145, 142, 142)"}}>Donner un accès facile aux services bancaires
          au financement n'importe où et partout.</p>
        </div>
     </div>
      <div className="container trait">
        <div className="orange"></div>
        <div className="noir"></div>
      </div>
   <div className="container">
   <h1 className="text-fonction">Notre Fonctionnement</h1>
   <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
   
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" align="center">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="./../../src/images/joueurs.jpeg" className="d-block" alt="..." height="150"/>
      <div className="carousel-caption d-none d-md-block">
      </div>
      <h3>Controle</h3>
      <p>
      La sécurité Sportif consiste a prendre
       en compte les risques inhérents à la navigation en mer,
        et à considérer les enjeux de sûreté, c'est-à-dire la 
        protection contre les actes malicieux contre les navires.
        </p>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="./../../src/images/im8.jpeg" className="d-block" alt="..." height="150"/>
      <div className="carousel-caption d-none d-md-block">
      </div>
      <h3>Controle</h3>
      <p>
    La sécurité Sportif consiste à prendre
     en compte les risques inhérents à la navigation en mer,
      et à considérer les enjeux de sûreté, c'est-à-dire la
       protection contre les actes malicieux contre les navires.
        </p>
    </div>
    <div className="carousel-item">
      <img src="./../../src/image/img4.webp" className="d-block" alt="..." height="150"/>
      <div className="carousel-caption d-none d-md-block">
      </div>
      <h3>Controle</h3>
        <p>
     La sécurité Sportif maritime consiste à prendre en compte
    les risques inhérents à la navigation en mer, et à considérer
    les enjeux de sûreté, c'est-à-dire la protection contre les
     actes malicieux contre les navires.
        </p>
    </div>
  </div>
   </div>
 
</div>
<Footer/>
</>
    )
}
export default Home;