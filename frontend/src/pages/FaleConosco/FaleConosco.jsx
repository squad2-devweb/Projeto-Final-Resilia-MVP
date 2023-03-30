import { Container, Form, Button,Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function FaleConosco() {
  return (
    <Container style={style.container} className='mt-5 mb-5'>
        <h1 style={style.h1} >Fale Conosco</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control className="w-50 border-info" type="text" placeholder="Nos diga o seu nome..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control className="w-50 border-info" type="email" placeholder="Deixe seu email" />
          <Form.Text className="text-muted">
            Não compartilharemos seu e-mail com ngm.
          </Form.Text>
            <Link className='d-block'>Leia nossa Política de privacidade</Link>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAssunto">
          <Form.Label>Assunto:</Form.Label>
          <Form.Control className="w-50 border-info" type="text" placeholder="Sobre o que deseja respostas?" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMensagem">
          <Form.Label>Mensagem:</Form.Label>
          <Form.Control style={style.textarea}className="w-100" as='textarea' placeholder="Sobre o que deseja respostas?" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Aceito receber respostas através do Whatsapp" />
        </Form.Group>
        <Button variant="info" type="button">
          Enviar Mensagem
        </Button>
      </Form>
      <Image style={style.image}src='/assets/cartoes.png' className='rounded'></Image>
    </Container>
  );
}

export default FaleConosco;

const style={
    container:{
        height:"100%",
        position:"relative"
    },
    textarea:{
        minHeight:"100px",
        height:"200px",
        maxHeight:"350px",
        borderColor:"#ec7f6d"
    },
    h1:{
        fontWeight:"800",
        fontSize:"2.2rem"
    },
    image:{
        display:"block",
        position:"absolute",
        bottom:"50%",
        left:"55%",
        height:"300px",
        borderRadius:"125px",
        // width:"550px",
        boxShadow:"2px 2px 5px grey"
    }

}
