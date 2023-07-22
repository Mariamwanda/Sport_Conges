
import './connexion.css'

function Connexion (){

  return(
    <>
      <div class="container">
        <div class="form">
            <a class="singup">Connexion</a>
            <div class="inputBox">
                <input type="text" required="required"/>
                <span class="user">Email</span>
            </div>
            <div class="inputBox">
                <input type="password" required="required"/>
                <span>Mot de passe</span>
            </div>
            <p class="mb-5 pb-lg-2">Aveiez-Vous un compte? <a href="http://localhost:4000/Inscription?"
              >Créer un.</a>
            </p>

            <button class="enter">Connexion</button>

        </div>
    </div>


  </>
  )

}

export default Connexion;