import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
    return (
        <div className="d-flex flex-row justify-content-around">
            <Card className="mt-5 align-items-center justify-content-around">
                <div>
                    <Card.Img className="mt-3" style={{ height: "200px", objectFit: "contain" }} variant="top" src="./assets/cartoes.png" />
                    <Card.Body>
                        <Card.Title className="align-items-center">RioCard Vale-Transporte</Card.Title>
                        <Card.Text>
                            RioCard vinculado a sua empresa para melhor praticidade.
                        </Card.Text>
                        <Button href="/cartoes" className='bg-success' variant="primary">Ver cartão</Button>
                    </Card.Body>
                </div>
            </Card>
            <Card className="mt-5 align-items-center justify-content-around">
                <div>
                    <Card.Img className="mt-3"style={{ height: "200px", objectFit: "contain" }} variant="top" src="./assets/cartoes2.png" />
                    <Card.Body>
                        <Card.Title className="align-items-center">RioCard Expresso</Card.Title>
                        <Card.Text>
                        Compre sem compromisso algum com o valor que desejar!
                        </Card.Text>
                        <Button href="/cartoes" className='bg-success' variant="primary">Ver cartão</Button>
                    </Card.Body>
                </div>
            </Card>
            <Card className="mt-5 align-items-center justify-content-around">
                <div>
                    <Card.Img className="mt-3"style={{ height: "200px", objectFit: "contain" }} variant="top" src="./assets/cartoes3.png" />
                    <Card.Body>
                        <Card.Title className="align-items-center">RioCard Empresarial</Card.Title>
                        <Card.Text>
                        O Riocard Mais Empresarial é um cartão corporativo destinado idealmente para mensageiros, funcionários externos e equipes comerciais.
                        </Card.Text>
                        <Button href="/cartoes"className='bg-success' variant="primary">Ver cartão</Button>
                    </Card.Body>
                </div>
            </Card >
        </div>

    );


}


export default Cards;

// const style = {
//     display:"flex",
//     margin:"0 auto"
// }