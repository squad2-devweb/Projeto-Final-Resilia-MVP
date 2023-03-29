import React, { useState } from "react";
import "./Cartoes.css";

const Cartoes = ({
  cartoes,
  onDeleteCartao,
  onNewCartao,
  onDeleteAcc,
  notFoundRepo,
}) => {
  const [cartaoNumero, setCartaoNumero] = useState("");
  const [cartaoTipo, setCartaoTipo] = useState("");
  return (
    <div className="main-cartoes">
      <div className="cartoes">
        <h2 className="title"></h2>
        {!cartoes.length ? (
          <p className="nocard">
            Não há Cartões que correspondam a este usuário.
          </p>
        ) : (
          <ul className="list">
            {cartoes.map((cartao) => (
              <li className="item" key={cartao.id}>
                <div className="info">
                  <div className="owner">{cartao.numero}</div>
                  <div className="name">{cartao.tipo}</div>
                  <div className="img">
                    <img src={"/assets/cartoes2.png"} />
                  </div>
                </div>
                <button
              className="deleteBtn"
              onClick={() => onDeleteCartao(cartao.id)}
            >
              Excluir Cartão
            </button>
              </li>
            ))}
          </ul>
        )}
      </div>
        <div className="new">
            <div className="field">
              <label htmlFor="numero">Insira um novo número de cartão </label>
              <input
                type="number"
                name="numero"
                className="new-cartao"
                placeholder="Número disponível no verso do Cartão"
                value={cartaoNumero}
                onChange={(e) => setCartaoNumero(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="tipo">Modalidade:</label>
              <input
                type="text"
                name="tipo"
                className="new-cartao"
                placeholder={`Ex: "Vale-Transporte"`}
                value={cartaoTipo}
                onChange={(e) => setCartaoTipo(e.target.value)}
              />
            </div>
            <button onClick={() => onNewCartao(cartaoNumero, cartaoTipo)}>
              Adcionar Cartão
            </button>
        </div>


      {/* 
      <div className="deleteAcc">
        <button className="deleteAccBtn" onClick={onDeleteAcc}>
          Exclua esta Conta
        </button>
      </div> */}
    </div>
  );
};

export default Cartoes;
