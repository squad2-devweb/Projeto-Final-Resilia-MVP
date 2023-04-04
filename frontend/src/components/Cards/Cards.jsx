import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Cards.css";

function Cards() {
  return (
    <div className="d-flex bg-dark pt-5 pb-5 flex-row justify-content-around">
      <Card className="card w-25 align-items-center justify-content-around">
        <div>
          <Card.Img
            className="mt-3"
            style={{ height: "200px", objectFit: "contain" }}
            variant="top"
            src="./assets/cartoes.png"
          />
          <Card.Body>
            <Card.Title className="align-items-center text-light">
              RioCard Vale-Transporte
            </Card.Title>
            <Card.Text className="text-light">
              {/* <h3 className="text-light">Vale-Transporte</h3> */}
              RioCard vinculado a sua empresa para melhor praticidade.
            </Card.Text>
            <Button
              href="/cartoes"
              className="btn-dark border-top border-bottom"
              variant="primary"
            >
              Ver cartão
            </Button>
          </Card.Body>
        </div>
      </Card>
      <Card className="card w-25 align-items-center justify-content-around">
        <div>
          <Card.Img
            className="mt-3"
            style={{ height: "200px", objectFit: "contain" }}
            variant="top"
            src="./assets/cartoes2.png"
          />
          <Card.Body>
            <Card.Title className="align-items-center text-light">
              RioCard Expresso
            </Card.Title>
            <Card.Text className="text-light">
              Compre sem compromisso algum com o valor que desejar!
            </Card.Text>
            <Button
              href="/cartoes"
              className="btn-dark border-top border-bottom"
              variant="primary"
            >
              Ver cartão
            </Button>
          </Card.Body>
        </div>
      </Card>
      <Card className="card w-25 align-items-center justify-content-around">
        <div>
          <Card.Img
            className="mt-3"
            style={{ height: "200px", objectFit: "contain" }}
            variant="top"
            src="./assets/cartoes3.png"
          />
          <Card.Body>
            <Card.Title className="align-items-center text-light">
              RioCard Empresarial
            </Card.Title>
            <Card.Text className="text-light">
              Cartão corporativo para funcionários externos e comerciais.
            </Card.Text>
            <Button
              href="/cartoes"
              className="btn-dark border-top border-bottom"
              variant="primary"
            >
              Ver cartão
            </Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default Cards;
