import { useHistory } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import axios from 'axios';
import './style.css'
import ContextMarvel from '../../Context/ContextMarvel';
import { AuthContext } from '../../auth/Authcontext';

function Login() {
  const history = useHistory();
  const emailRef = useRef(null);
  const passRef = useRef(null);
  
  const { setOnOff } = useContext(ContextMarvel);
  const { setUser } = useContext(AuthContext);
  const [isNotValid, setIsNotValid] = useState(true);
  const [token, setToken] = useState('');

  const handleSubmit = () => {
    const user = {
      email: emailRef.current.value,
      pass: passRef.current.value
    };

    axios.post('https://marvelapp-dev-back.herokuapp.com/', user)
      .then(response => {
        setUser(true);
        setOnOff('on');
        setToken(response.data.token);
        console.log(response.data);
        localStorage.setItem('token', JSON.stringify({ token: response.data.token }));
      });
  }

  const validation = () => {
    const reGex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const PASSWORD_LENGTH = 5;
    if (emailRef.current === null) return true;
    if ((passRef.current.value.length > PASSWORD_LENGTH) && (reGex.test(emailRef.current.value))) {
      return setIsNotValid(false);
    }
    return setIsNotValid(true);
  };

  return (
    <section>
      <div id="login">
        <form> 
          <h1>Login</h1> 
          <p> 
            <label htmlFor="email_login">Seu e-mail</label>
            <input
              id="email_login"
              name="email_login"
              required
              type="text"
              placeholder="exemplo@email.com"
              ref={emailRef}
              onChange={ () => validation() }
              data-testid="email-input"
            />
          </p>

          <p> 
            <label htmlFor="senha_login">Sua senha</label>
            <input
              id="senha_login"
              name="senha_login"
              required
              type="password"
              placeholder="ex. 123456789"
              onChange={ () => validation() }
              ref={passRef}
              data-testid="password-input"
            /> 
          </p>

          <p> 
            <input type="checkbox" name="manterlogado" id="manterlogado" value="" /> 
            <label htmlFor="manterlogado">Manter-me logado</label>
          </p>
          
          <button
            className="join-buttom"
            id={ isNotValid ? 'gray' : 'blue' }
            type="submit"
            value="Logar"
            disabled={ isNotValid }
            onClick={() => {
              handleSubmit();
              history.push('/marvelcharacters');
              alert('Bem-vindo ' + emailRef.current.value);
            } }
          >
            Logar
          </button>
          
          <p className="link">
            Ainda não tem conta?
            <a href="/join">Cadastre-se</a>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login;