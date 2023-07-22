import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function Apropos(){
    return(
        <>
         <Navbar />
            <section id="apropos" class="jumbotron text-center">
                <h1 className="display-3">Maritime_<span>Transport</span></h1>
                <p>Vous accompagne partout en Sécurité Avec Confiance.</p>
            </section>
          <section id="gallery">
          <h1 className="text-fonction">Notre Fonctionnement</h1>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-4">
                        <div class="card">
                            <img src="./../../src/image/img4.webp" alt="" class="card-img"/>
                            <div class="card-body">
                                <h2 class="card-title">Confiance</h2>
                                <p class="card-text">La Confiance est l'une des rares choses qui n'ait pas de valeur vénale,elle se mérite,elle se donne,elle se reprend trop souvent.</p>
                                <div class="icon">
                                    <i class="bi bi-minecart-loaded"></i>
                                    <i class="bi bi-minecart-loaded" style={{marginLeft:"10px"}}></i>
                                </div>
                            </div>
                        </div>
                   </div>
                <div class="col-lg-4 mb-4">
                    <div class="card">
                        <img src="./../../src/image/img5.webp" alt="" class="card-img"/>
                        <div class="card-body">
                            <h2 class="card-title">Sécurité</h2>
                            <p class="card-text">La Confiance est l'une des rares choses qui n'ait pas de valeur vénale,elle se mérite,elle se donne,elle se reprend trop souvent</p>
                            <div class="icon">
                                <i class="bi bi-minecart-loaded"></i>
                                <i class="bi bi-minecart-loaded" style={{marginLeft:"10px"}}></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <div class="card">
                        <img src="./../../src/image/im8.jpeg" alt="" class="card-img"/>
                        <div class="card-body">
                            <h2 class="card-title">Garantie</h2>
                            <p class="card-text">La Confiance est l'une des rares choses qui n'ait pas de valeur vénale,elle se mérite,elle se donne,elle se reprend trop souvent.</p>
                            <div class="icon">
                                <i class="bi bi-minecart-loaded"></i>
                                <i class="bi bi-minecart-loaded" style={{marginLeft:"10px"}}></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                        <div class="card">
                            <img src="./../../src/image/img4.webp" alt="" class="card-img"/>
                            <div class="card-body">
                                <h2 class="card-title">Confiance</h2>
                                <p class="card-text">La Confiance est l'une des rares choses qui n'ait pas de valeur vénale,elle se mérite,elle se donne,elle se reprend trop souvent.</p>
                                <div class="icon">
                                    <i class="bi bi-minecart-loaded"></i>
                                    <i class="bi bi-minecart-loaded" style={{marginLeft:"10px"}}></i>
                                </div>
                            </div>
                        </div>
                   </div>
                <div class="col-lg-4 mb-4">
                    <div class="card">
                        <img src="./../../src/image/img5.webp" alt="" class="card-img"/>
                        <div class="card-body">
                            <h2 class="card-title">Sécurité</h2>
                            <p class="card-text">La Confiance est l'une des rares choses qui n'ait pas de valeur vénale,elle se mérite,elle se donne,elle se reprend trop souvent</p>
                            <div class="icon">
                                <i class="bi bi-minecart-loaded"></i>
                                <i class="bi bi-minecart-loaded" style={{marginLeft:"10px"}}></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <div class="card">
                        <img src="./../../src/image/im8.jpeg" alt="" class="card-img"/>
                        <div class="card-body">
                            <h2 class="card-title">Garantie</h2>
                            <p class="card-text">La Confiance est l'une des rares choses qui n'ait pas de valeur vénale,elle se mérite,elle se donne,elle se reprend trop souvent.</p>
                            <div class="icon">
                                <i class="bi bi-minecart-loaded"></i>
                                <i class="bi bi-minecart-loaded" style={{marginLeft:"10px"}}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </section>
         <Footer/>
        </>
    )

}

export default Apropos;