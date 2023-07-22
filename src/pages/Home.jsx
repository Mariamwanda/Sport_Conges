import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import "../style.css"

function Home(){
    return(
        <>
            <Navbar />
            <section id="header" class="jumbotron text-center ">
                <h1 className="display-3">Maritime_<span>Transport</span></h1>
                <p>Vous accompagne partout en Sécurité Avec Confiance.</p>
            </section>
            <div class="container racine">
        <div id="partieGauche">
       
         <div class="ligne1">
          <div class="monBut">
          <button class="btn btn-button">  100%  Confiance</button>
          </div>
            <div class="imgL2">
            <img src="./../../src/image/livreur.webp" alt=""/>
            </div>
           
         </div>
         <div class="ligne2">
            <div class="monImg">
            <img src="./../../src/image/colis.webp" alt=""/>
            </div>
              <div class="monBut">
                <button class="btn btn-button">  100% Sécurité</button>
              </div>
         </div>
        </div>
        <div class="partieDroite">
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
   <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
   
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" align="center">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="./../../src/image/img5.webp" class="d-block" alt="..." height="150"/>
      <div class="carousel-caption d-none d-md-block">
      </div>
      <h3>Controle</h3>
      <p>
      La sécurité maritime consiste a prendre
       en compte les risques inhérents à la navigation en mer,
        et à considérer les enjeux de sûreté, c'est-à-dire la 
        protection contre les actes malicieux contre les navires.
        </p>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="./../../src/image/im8.jpeg" class="d-block" alt="..." height="150"/>
      <div class="carousel-caption d-none d-md-block">
      </div>
      <h3>Controle</h3>
      <p>
    La sécurité maritime consiste à prendre
     en compte les risques inhérents à la navigation en mer,
      et à considérer les enjeux de sûreté, c'est-à-dire la
       protection contre les actes malicieux contre les navires.
        </p>
    </div>
    <div class="carousel-item">
      <img src="./../../src/image/img4.webp" class="d-block" alt="..." height="150"/>
      <div class="carousel-caption d-none d-md-block">
      </div>
      <h3>Controle</h3>
        <p>
     La sécurité maritime consiste à prendre en compte
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