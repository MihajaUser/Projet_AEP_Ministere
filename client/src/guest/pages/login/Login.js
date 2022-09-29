import React from "react"
import './Login.css';
import {Link} from 'react-router-dom'

function Login (props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Connexion</h3>
          <div className="text-center">
               Vous n'avez pas encore de compte?{" "}
              <span className="link-primary" ><Link to='/inscription'>
            Inscription</Link>
              </span>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Entrez votre email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Mot de passe"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Connexion
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Mot de passe oublié?<a href="#">Cliqué ici</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login;