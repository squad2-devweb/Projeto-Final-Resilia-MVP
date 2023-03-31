import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const MinhaConta = () => {
  return (
    <Container className=' mt-5 mb-5'>

        <div className=' text-center mb-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" fill="currentColor" class="bi bi-person-gear" viewBox="0 0 16 16">
          <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>
        </svg>
        </div>

      <Form>
    <div className="d-flex flex-row flex-wrap justify-content-around">

    
      <div className="">
        <label for="validationServer01">Nome</label>
        <input type="text" className="form-control is-valid" placeholder="Seu nome" required />
      </div>

      <div className="">
        <label for="validationServer02">CPF</label>
        <input type="text" className="form-control is-valid" placeholder="Seu CPF" required />
      </div>

      <div className="">
        <label for="validationServer03">Idade</label>
        <input type="number" className="form-control is-valid" placeholder="Sua idade" required />
      </div>

      <div className="">
        <label for="validationServer04">Email</label>
        <input type="email" className="form-control is-valid" placeholder="Seu email" required />
      </div>
    </div>

    <div className='text-center mt-2'>
    <button className="btn btn-primary" type="submit">Atualizar informações</button>
    </div>
  </Form>
   </Container> 
  )
}

export default MinhaConta
