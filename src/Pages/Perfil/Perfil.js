import React, { useContext, useEffect, useState } from 'react';

import ContextMarvel from '../../Context/ContextMarvel';
import loadingGif from '../../Images/loading-buffering.gif';
import Navbar from '../../Components/NavBar/NavBar';
import { AuthContext } from '../../auth/Authcontext';
import { authConfig } from '../../auth/config';

const Perfil = () => {
  const { 
    loading, setLoading,
    setTitlePage,
    setOnOff,
  } = useContext(ContextMarvel);

  const { user, setUser } = useContext(AuthContext);

  const [userNameDB, setUserNameDB] = useState('');
  const [userLastNameDB, setUserLastNameDB] = useState('');
  const [stateDB, setStateDB] = useState('');
  const [cityDB, setSetCityDB] = useState('');
  const [cepDB, setCepDB] = useState('');
  const [cellPhoneDB, setCellPhoneDB] = useState(0);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setTitlePage('Perfil');
    setLoading(false);
    verifyToken();
    const fetchUserData = async () => {
      const { token } = await JSON.parse(localStorage.getItem('token'));
      const response = await fetch(`${process.env.REACT_APP_FETCH}userinfos`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      });

    const res = await response.json();
    return setUserData(res);
    }
    fetchUserData();
  }, [setLoading, setTitlePage]);

  const verifyToken = async () => {
    const { token } = await JSON.parse(localStorage.getItem('token'));

    const response = await fetch(`${process.env.REACT_APP_FETCH}verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    });
    const res = await response.json();
    
    return res;
  }

  if (loading) {
    return (
      <img
        src={ loadingGif }
        alt="Gif de Loading"
      />
    )
  }

  const updateUserData = async () => {
    const { token } = await JSON.parse(localStorage.getItem('token'));
    const response = await fetch(`${process.env.REACT_APP_FETCH}userinfos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: {
        firstName: userNameDB,
        lastName: userLastNameDB,
        phone: cellPhoneDB,
        city: cityDB,
        state: stateDB,
        CEP: cepDB,
      }
    });
    return response;
  }

  return (
    <section className="w-100 bg-dark">
      <Navbar />
      <h1>{ user.email }</h1>
      <form className="needs-validation" noValidate>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom01">Primeiro nome</label>
            <input
              type="text"
              placeholder={ Object.keys(userData).length > 0 ? userData.firstName : 'Loading...' }
              required
              onChange={ (e) => setUserNameDB(e.target.value) }
            />
            <div className="valid-feedback">
              Tudo certo!
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom02">Sobrenome</label>
            <input
              type="text"
              placeholder={ Object.keys(userData).length > 0 ? userData.lastName : 'Loading...' }
              required
              onChange={ (e) => setUserLastNameDB(e.target.value) }
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustomUsername">Usuário</label>
            <div className="input-group">
              <div className="input-group-prepend">
              </div>
              <input
                type="text"
                required
                value={ userData.email }
                readOnly
              />
              <div className="invalid-feedback">
                Por favor, escolha um nome de usuário.
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCellNumber">Telefone</label>
            <div className="input-group">
              <div className="input-group-prepend">
              </div>
              <input
                type="number"
                placeholder={ userData.phone }
                onChange={ (e) => setCellPhoneDB(e.target.value) }
              />
              <div className="invalid-feedback">
                Por favor, escolha um nome de usuário.
              </div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">Cidade</label>
            <input
              type="text"
              placeholder={ Object.keys(userData).length > 0 ? userData.city : 'Loading...' }
              required
              onChange={ (e) => setSetCityDB(e.target.value) }
            />
            <div className="invalid-feedback">
              Por favor, informe uma cidade válida.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom04">Estado</label>
            <input
              type="text"
              placeholder={ Object.keys(userData).length > 0 ? userData.state : 'Loading...' }
              required
              onChange={ (e) => setStateDB(e.target.value) }
            />
            <div className="invalid-feedback">
              Por favor, informe um estado válido.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom05">CEP</label>
            <input
              type="text"
              placeholder={ Object.keys(userData).length > 0 ? userData.CEP : 'Loading...' }
              onChange={ (e) => setCepDB(e.target.value) }
            />
            <div className="invalid-feedback">
              Por favor, informe um CEP válido.
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={ () => updateUserData() }
        >
          Atualizar cadastro
        </button>
      </form>
    </section>
  );
};

export default Perfil;
