import './connexion.css'
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Inscription(){
    
  return(
    <>
      <div className="container">
        <div className="form">
            <a className="singup">Inscription</a>
            <div className="inputBox">
                <input type="text" required="required"/>
                <span className="user">Nom</span>
            </div>
            <div className="inputBox">
                <input type="text" required="required"/>
                <span className="user">Prenom</span>
            </div>
            <div className="inputBox">
                <input type="email" required="required"/>
                <span>Email</span>
            </div>
            <div className="inputBox">
                <input type="number" required="required"/>
                <span>Contact</span>
            </div>
            <button className="enter">S'inscris</button>
        </div>
    </div>
  </>
  )

}

export default Inscription;