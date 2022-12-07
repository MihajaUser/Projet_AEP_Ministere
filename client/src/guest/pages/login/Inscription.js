//update
import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router';
import AuthService from '../../../service/Auth.service';

function Inscription() {

  const [incorrecte, setincorrecte] = useState(false);
  //formulaire
  const [email, setmail] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function submiSignup() {
    let data = { email, username, password };
    // console.log(data);
    if (email == '' || username == '' || password == '') {
      setError('remplire tout les champs!')
    }
    else {
      AuthService.signup(data)
        .then(rep => {
          console.log('======>>>', rep.data);
          let storage = {
            id: rep.data.id,
            email: rep.data.email,
            // roles: rep.data.roles,
            accessToken: rep.data.accessToken,
          }
          // localStorage.setItem('users', JSON.stringify(storage));
          navigate('/login');
        })
        .catch(err => {
          //connnection reussie mais user non reconnue
          if (err.response.data.message) {
            setError(err.response.data.message);
          }
          // connection perdu
          else {
            console.log('XXXXXXXXXXXXXXXX', err);
          }
        })
    }
  }


  return (
    <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Ajout membre</h3>
          {/* <div className="text-center">
            Avez vous déjà un compte?{" "}
            <span className="link-primary"><Link to='/login'>
              Connexion
            </Link></span>
          </div> */}
          <div className="form-group mt-3">
            <label>Nom</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Entrez votre nom"
              onChange={(value) => setusername(value.target.value)}
            />
          </div>
          {/* <div className="form-group mt-3">
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
          </div>*/}
          <div className="form-group mt-3">
            <label>Adresse email</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(value) => setmail(value.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Mot de passe</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Mot de passe"
              onChange={(value) => setpassword(value.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" onClick={submiSignup} className="btn btn-primary">
              Inscription
            </button>
          </div>
          {/* <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>*/}
        </div>
      </div>
    </div>

  )
}

export default Inscription;