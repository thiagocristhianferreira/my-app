import { useHistory } from 'react-router-dom';
import { useContext, useRef } from 'react';
import './style.css'
import ContextMarvel from '../../Context/ContextMarvel';
import { authConfig } from '../../auth/config';
import { useState } from 'react';

function Login() {
  const history = useHistory();
  const emailRef = useRef(null);
  const passRef = useRef(null);
  
  const { setOnOff } = useContext(ContextMarvel);

  const [isNotValid, setIsNotValid] = useState(true);

  const validation = () => {
    const reGex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const PASSWORD_LENGTH = 5;
    if (emailRef.current === null) return true;
    if ((passRef.current.value.length > PASSWORD_LENGTH) && (reGex.test(emailRef.current.value))) {
      return setIsNotValid(false);
    }
    return setIsNotValid(true);
  };

  const loginAuth = (email, password) => {
    authConfig.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      setOnOff('on');
    })
    .catch((error) => {
      console.log(error.code, error.message);
      return alert(error.message);
    });
  }

  return (
    <section>
      <div id="login">
        <form method="post" action=""> 
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
            onClick={(e) => {
              e.preventDefault();
              loginAuth(emailRef.current.value, passRef.current.value);
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