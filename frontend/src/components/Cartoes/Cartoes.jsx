import React, { useState } from "react";
import "./Cartoes.css";
import { Form } from "react-bootstrap";

const Cartoes = ({
  cartoes,
  onDeleteCartao,
  onNewCartao,
  onDeleteAcc,
  notFoundRepo,
}) => {
  const [cartaoNumero, setCartaoNumero] = useState("");
  const [cartaoTipo, setCartaoTipo] = useState("");
  const expressCard = { nome: "express", src: "/assets/cartoes2.png" };
  const valeCard = { nome: "Vale-Transporte", src: "/assets/cartoes.png" };
  const empresarialCard = { nome: "Empresarial", src: "/assets/cartoes3.png" };
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
                    {cartao.tipo === "Express" ? (
                      <img src={expressCard.src} />
                    ) : (
                      console.log("haha")
                    )}
                    {cartao.tipo === "Vale-Transporte" ? (
                      <img src={valeCard.src} />
                    ) : (
                      console.log("haha")
                    )}
                    {cartao.tipo === "Empresarial" ? (
                      <img src={empresarialCard.src} />
                    ) : (
                      console.log("haha")
                    )}
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
        <Form>
          <div className="radio">
            <Form.Check
              name="radio"
              label="Vale-Transporte"
              type="radio"
              value="Vale-Transporte"
              onChange={(e) => setCartaoTipo(e.target.value)}
            />
          </div>
          <div className="radio">
            <Form.Check
              name="radio"
              label="Express"
              type="radio"
              value="Express"
              onChange={(e) => setCartaoTipo(e.target.value)}
            />
          </div>
          <div className="radio">
            <Form.Check
              name="radio"
              label="Empresarial"
              type="radio"
              value="Empresarial"
              onChange={(e) => setCartaoTipo(e.target.value)}
            />
          </div>
        </Form>
        {console.log(cartaoTipo)}
        <button onClick={() => onNewCartao(cartaoNumero, cartaoTipo)}>
          Adcionar Cartão
        </button>
      </div>
    </div>
  );
};

export default Cartoes;
