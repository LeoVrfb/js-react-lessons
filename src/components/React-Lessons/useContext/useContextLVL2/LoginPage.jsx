import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from './AuthContext';

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() !== '' && password.trim() !== '') {

      login(username, password);
      navigate('/dashboard');
    } else {
      setError('Veuillez entrer un nom d\'utilisateur et un mot de passe.');
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nom d'utilisateur</label>
          <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <div>{error}</div>}
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default LoginPage;
