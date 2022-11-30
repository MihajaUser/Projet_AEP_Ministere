//update
import React, { useState } from 'react'
import './Login.css';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { AuthService } from './Auth.service.js';
import { Alert , Form} from 'react-bootstrap';

function Login(props) {
  ///formulaire  setusername manova ilay user ary ambany
  const [username, setusername] = useState('');

  const [email,setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();


  function submitSignin() {
    //tableau d'objet
    let data = { username, password ,email};
    if (email == '' || password == '') {
      setError('remplire tout les champs!');
    }
    else {
      AuthService.signin(data)
        .then(rep => {
          console.log('======>>>', rep.data);
          let storage = {
            id: rep.data.id,
            username: rep.data.username,
            email: rep.data.email,
            roles: rep.data.roles,
            accessToken: rep.data.accessToken,
          }
          localStorage.setItem('users', JSON.stringify(storage));
          navigate('/admin');
        })
        .catch(err => {//pas encore de controle du server perdue

          console.log('sdddddddddddddddd', err);


        })
    }
  }
  return (
    <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Connexion</h3>
          <div className="text-center">
            Vous n'avez pas encore de compte?{" "}
            <span className="link-primary" ><Link to='/inscription'>
              Inscription</Link>
            </span>
          </div>
          <div className="form-group mt-3">
            <label>nom </label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Entrez votre email" onChange={(value) => setemail(value.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Mot de passe" onChange={(value) => setpassword(value.target.value)}
            />
          </div>
          <Form.Group>
            <Form.Label>Utilisation</Form.Label>
              <Form.Select aria-label="Default select example" size="md-6" >
                <option>Choisissez</option>
                <option value="1">Ingenieur</option>
                <option value="2">Dirigeant</option>
              </Form.Select>
              </Form.Group>
          {error &&
            <Alert className='my-input' key='danger' variant='danger'>
              {error}
            </Alert>
          }
          <br />
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary" onClick={submitSignin}>
              Connexion
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Mot de passe oublié?<a href="#">Cliqué ici</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login;