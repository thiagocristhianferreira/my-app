import { useHistory } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';

import ContextMarvel from '../../Context/ContextMarvel';
import { AuthContext } from '../../auth/Authcontext';
import './style.css'

function Login() {
  const history = useHistory();
  const emailRef = useRef(null);
  const passRef = useRef(null);
  
  const { setOnOff } = useContext(ContextMarvel);
  const { setUser } = useContext(AuthContext);
  const [isNotValid, setIsNotValid] = useState(true);

  const handleSubmit = async () => {
    const user = JSON.stringify({
      email: emailRef.current.value,
      pass: passRef.current.value
    });
    const response = await fetch('https://marvelapp-dev-back.herokuapp.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: user
    });
    const res = await response.json();
    setUser(true);
    setOnOff('on');
    return localStorage.setItem('token', JSON.stringify({ token: res.token }));
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