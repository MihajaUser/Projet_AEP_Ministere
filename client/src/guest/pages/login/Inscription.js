import React from "react"
import './Login.css';
import {Link} from 'react-router-dom'
function Inscription(){
  return(
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Inscription</h3>
          <div className="text-center">
            Avez vous déjà un compte?{" "}
            <span className="link-primary"><Link to='/login'>
              Connexion
            </Link></span>
          </div>
          <div className="form-group mt-3">
            <label>Nom</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Entrez votre nom"
            />
          </div>
          <div className="form-group mt-3">
            <label>Prénom</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Entrez votre prénom"
            />
          </div>
          <div className="form-group mt-3">
            <label>Date de naissance</label>
            <input
              type="Date"
              className="form-control mt-1"
              placeholder="Date de naissance"
            />
          </div>
          <div className="form-group mt-3">
            <label>Adresse email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Mot de passe</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Mot de passe"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Inscription
            </button>
          </div>
         {/* <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>*/}
        </div>
      </form>
    </div>

  )
}

export default Inscription;