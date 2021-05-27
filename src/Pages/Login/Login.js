import { useHistory } from 'react-router-dom';
import { useContext, useRef } from 'react';
import firebase from 'firebase/app';
import './style.css'
import ContextMarvel from '../../Context/ContextMarvel';

function Login() {
  const history = useHistory();
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const { setOnOff } = useContext(ContextMarvel);

  const loginAuth = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
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
              ref={passRef}
            /> 
          </p>
           
          <p> 
            <input type="checkbox" name="manterlogado" id="manterlogado" value="" /> 
            <label htmlFor="manterlogado">Manter-me logado</label>
          </p>
          
          <button
            className="join-buttom"
            type="submit"
            value="Logar"
            onClick={(e) => {
              e.preventDefault();
              history.push('/marvelcharacters');
              loginAuth(emailRef.current.value, passRef.current.value);
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