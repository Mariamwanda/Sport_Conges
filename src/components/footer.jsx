

function Footer(){

    return (
        <>    <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Objectifs</h3>
                        <ul>
                            <li><a href="/#">Services</a></li>
                            <li><a href="/#">Accompagnement</a></li>
                            <li><a href="/#">Quarantie</a></li>
                            <li><a href="/#">impeccable</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Services</h3>
                        <p>« Si vous souhaitez connaître l'âge 
                            du monde, regardez la surface de la mer dans 
                            la tempête. » « Il ne faut pas lier un navire à
                            une seule ancre, ni une vie à un seul espoir.»
                            «Si les pétroliers transportaient de l'eau de mer,
                            on s'en foutrait qu'ils fassent naufrage.»
                        </p>
                    </div>
                    <div class="col-sm-6 col-md-3 item bulletin">
                        <h3>Bulletin</h3>
                        <p href="/#" style={{fontSize : "20px"}}>Entrez votre mail?</p> <br />
                       <div class="col d-flex">
                            <input type="text" placeholder="ecrit..." /> <button className="btn-outline">Envoyer</button>
                       </div>
                    </div>
                   
                    <div className="col item social"><a href="#"><i class="bi bi-facebook"></i></a><a href="#"><i class="bi bi-twitter"></i></a><a href="#"><i class="bi bi-snapchat"></i></a><a href="#"><i class="bi bi-instagram"></i></a></div>
                    
                </div>
                
                  
                <p class="copyright">Maritime_Transport © 2023</p>
            </div>
        </footer>
    </div>
        </>
    )
    
}

export default Footer;