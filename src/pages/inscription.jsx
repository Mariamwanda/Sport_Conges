import './connexion.css'
import { useNavigate } from 'react-router-dom';

function Inscription(){
    

  return(
    <>
      <div class="container">
        <div class="form" onSubmit={EnvoyerRequete}>
            <a class="singup">Inscription</a>
            <div class="inputBox">
                <input type="text" required="required"/>
                <span class="user">Nom</span>
            </div>
            <div class="inputBox">
                <input type="text" required="required"/>
                <span class="user">Prenom</span>
            </div>
            <div class="inputBox">
                <input type="email" required="required"/>
                <span>Email</span>
            </div>
            <div class="inputBox">
                <input type="number" required="required"/>
                <span>Contact</span>
            </div>
            <button class="enter">S'inscris</button>
        </div>
    </div>
  </>
  )

}

export default Inscription;