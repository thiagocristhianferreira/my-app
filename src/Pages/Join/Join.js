import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import firebase from 'firebase/app';
import './style.css';

function Join() {
  const history = useHistory();
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const createUser = (email, password) => {
    return firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('Bem-vindo ' + email);
        history.push('/marvelcharacters');
      })
      .catch((error) => {
        console.log(error.code, error.message);
        alert(error.message);
      });
  }

  return (
    <section>
      <div id="cadastro">
        <form method="POST" action=""> 
          <h1>Cadastro</h1> 
           
          <p> 
            <label htmlFor="nome_cad">Seu nome</label>
            <input
              id="nome_cad"
              name="nome_cad"
              type="text"
              required
              placeholder="ex. Fulano de Tal"
            />
          </p>
           
          <p> 
            <label htmlFor="email_cad">Seu e-mail</label>
            <input
              id="email_cad"
              name="email_cad"
              required
              type="email"
              placeholder="exemplo@email.com"
              ref={emailRef}
            /> 
          </p>
           
          <p> 
            <label htmlFor="senha_cad">Sua senha</label>
            <input
              id="senha_cad"
              name="senha_cad"
              required
              type="password"
              placeholder="ex. 123456789"
              ref={passRef}
            />
          </p>

          <button
            className="join-buttom"
            type=""
            value="Cadastrar"
            onClick={ (e) => {
              e.preventDefault();
              createUser(emailRef.current.value, passRef.current.value);
            } }
          >
            Cadastrar
          </button>
           
          <p className="link">  
            Já tem conta?
            <a href="/"> Ir para Login </a>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Join;
