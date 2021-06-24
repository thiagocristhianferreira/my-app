import React, { useRef } from 'react';
import { useHistory } from 'react-router';

import './style.css';

function Join() {
  const history = useHistory();
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const createUser = (email, pass) => {
    const user = JSON.stringify({
      email,
      pass
    })

    return (
      fetch('http://localhost:3001/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: user,
      })
        .then(response => response.json())
        .then(res => {
          console.log(res);
          return alert(res.message);
        })
    )
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
              history.push('/');
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