import Navbar from "./../components/Navbar"
import Footer from "./../components/footer"
function Contact(){
    return(
        <>  
            <Navbar />
            <section id="Contact" class="jumbotron text-center ">
                <h1 className="display-3">Maritime_Transport</h1>
                <p>Vous accompagne partout en Sécurité Avec Confiance.</p>
            </section>
            <h1 class="localisation text-center ">Pour plus de <span>Renseignement</span></h1>
            <div class="container comment">
                <div class="text">
                    <p>dfghjklmzertyuiofghj</p>
                </div>
              
                <div class="container card-comment">
                    <div class="form-outline mb-4">
                        <input type="email" id="form4Example2" class="form-control" />
                        <label class="form-label" for="form4Example2">Email address</label>
                    </div>
                    <div class="form-outline mb-4">
                        <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                        <label class="form-label" for="form4Example3">Message</label>
                    </div>
                    <button type="submit" class="btn btn btn-primary mb-4">
                       Send
                    </button>
                </div>
             </div>
            <Footer/>
        </>
    )
}
export default Contact