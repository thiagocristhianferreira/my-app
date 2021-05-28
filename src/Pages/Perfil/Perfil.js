import React, { useContext, useEffect } from 'react';

import ContextMarvel from '../../Context/ContextMarvel';
import loadingGif from '../../Images/loading-buffering.gif';
import Navbar from '../../Components/NavBar/NavBar';

const Perfil = () => {
  const { 
    loading, setLoading,
    setTitlePage,
   } = useContext(ContextMarvel);

  useEffect(() => {
    const fetchComics = async () => {
      setLoading(false);
    }
    setTitlePage('Perfil');
    fetchComics();
  }, [setLoading, setTitlePage]);

  if (loading) {
    return (
      <img
        src={ loadingGif }
        alt="Gif de Loading"
      />
    )
  }
  return (
    <section className="w-100 bg-dark">
      <Navbar />
      <form className="needs-validation" novalidate>
      <div className="form-row">
        <div className="col-md-4 mb-3">
          <label htmlFor="validationCustom01">Primeiro nome</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="Nome"
            value="Mark"
            required
          />
          <div className="valid-feedback">
            Tudo certo!
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationCustom02">Sobrenome</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            placeholder="Sobrenome"
            value="Otto"
            required
          />
          <div className="valid-feedback">
            Tudo certo!
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationCustomUsername">Usuário</label>
          <div className="input-group">
            <div className="input-group-prepend">
            </div>
            <input
              type="text"
              className="form-control"
              id="validationCustomUsername"
              placeholder="Usuário"
              aria-describedby="inputGroupPrepend"
              required
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
            className="form-control"
            id="validationCustom03"
            placeholder="Cidade"
            required
          />
          <div className="invalid-feedback">
            Por favor, informe uma cidade válida.
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="validationCustom04">Estado</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom04"
            placeholder="Estado"
            required
          />
          <div className="invalid-feedback">
            Por favor, informe um estado válido.
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="validationCustom05">CEP</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom05"
            placeholder="CEP"
            required
          />
          <div className="invalid-feedback">
            Por favor, informe um CEP válido.
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck"
            required
          />
          <label className="form-check-label" htmlFor="invalidCheck">
            Concordo com os termos e condições
          </label>
          <div className="invalid-feedback">
            Você deve concordar, antes de continuar.
          </div>
        </div>
      </div>
      <button className="btn btn-primary" type="submit">Atualizar cadastro</button>
    </form>
  </section>
  );
};

export default Perfil;
