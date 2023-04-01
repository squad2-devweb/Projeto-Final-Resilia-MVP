import { Container, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState,useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { AuthContext } from "../../contexts/auth";

function FaleConosco() {
  const [index, setIndex] = useState(0);
  const {postMensagem} = useContext(AuthContext)
  const [nome,setNome] = useState('')
  const [email,setEmail] = useState('')
  const [assunto,setAssunto] = useState('')
  const [mensagem,setMensagem] = useState('')

  const handlePost = () => {
    const mensagemSend = {nome,email,assunto,mensagem}
    if (
      !nome || !email || !assunto || !mensagem
    ){
      alert("Por favor não nos envie um formulário vazio... :(")
      return
    } else {
      postMensagem(mensagemSend)
    }
  }
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

    return (
      <>
        <Carousel style={a.bg} variant='dark' activeIndex={index} onSelect={handleSelect}>

          <Carousel.Item style={{height:"350px"}} >

            <img style={a.img}
              className="d-block w-100"
              src="/assets/carro/4.jpg"
              alt="First slide"
            />
            <Carousel.Caption style={a.textbg}>

              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{height:"350px"}}>
            <img style={a.img}
              className="d-block w-100"
              src="/assets/carro/5.jpg"
              alt="Second slide"
            />

            <Carousel.Caption style={a.textbg}>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{height:"350px"}}>
            <img style={a.img}
              className="d-block w-100"
              src="/assets/carro/6.jpg"
              alt="Third slide"
            />

            <Carousel.Caption style={a.textbg}>

              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Container style={style.container} className="mt-5 mb-5">
          <h1 style={style.h1}>Fale Conosco</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                className="w-50 border-info"
                type="text"
                placeholder="Nos diga o seu nome..."
                value={nome}
                onChange={(e)=>setNome(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="w-50 border-info"
                type="email"
                placeholder="Deixe seu email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                Não compartilharemos seu e-mail com ngm.
              </Form.Text>
              <Link className="d-block">
                Leia nossa Política de privacidade
              </Link>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAssunto">
              <Form.Label>Assunto:</Form.Label>
              <Form.Control
                className="w-50 border-info"
                type="text"
                placeholder="Sobre o que deseja respostas?"
                value={assunto}
                onChange={(e)=>setAssunto(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMensagem">
              <Form.Label>Mensagem:</Form.Label>
              <Form.Control
                style={style.textarea}
                className="w-100"
                as="textarea"
                placeholder="Sobre o que deseja respostas?"
                value={mensagem}
                onChange={(e)=>setMensagem(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Aceito receber respostas através do Whatsapp"
              />
            </Form.Group>
            <Button variant="info" type="button"
            onClick={handlePost}
            >
              Enviar Mensagem
            </Button>
          </Form>
          <Image
            style={style.image}
            src="/assets/25929.jpg"
            className="rounded"
          ></Image>
        </Container>
      </>
    );
  };

export default FaleConosco;

const style = {
  container: {
    height: "100%",
    position: "relative",
  },
  textarea: {
    minHeight: "100px",
    height: "200px",
    maxHeight: "350px",
    borderColor: "#ec7f6d",
  },
  h1: {
    fontWeight: "800",
    fontSize: "2.2rem",
  },
  image: {
    display: "block",
    position: "absolute",
    bottom: "50%",
    left: "55%",
    height: "300px",
    borderRadius: "125px",
    // width:"550px",
    boxShadow: "2px 2px 5px grey",
    objectFit: "cover",
  },
};
const a = {
  img:{
    objectFit:"contain",
  },
  bg:{
    // background:"linear-gradient(yellow,blue)"
  },
  textbg:{
    background:"#f1f1f157"

  }
}
