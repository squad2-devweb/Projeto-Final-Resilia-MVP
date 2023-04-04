import React from "react"
import "./Footer.css"


const Footer = () => {
 
  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4>Notícias</h4>
              <p>
                Quer ficar por dentro das novidades? Vincule seu melhor e-mail e fique por dentro das nossas ofertas e promoções!
              </p>
            </div>
            <div className="col-lg-6">
              <form>
                <input type="email" name="email" placeholder="Digite seu email..."/>
                <input type="submit" value="Vincular" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Links úteis</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Sobre nós</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Serviços</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Termos de serviços</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Política de privacidade</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Nossos serviços</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Web Designer</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Desenvolvedor Web</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Gestor de produtos</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#"> Design Gráfico</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contate-nos</h4>
              <p> R. Dona Isabel, 700 </p>
              <p> Rio de Janeiro, RJ 21032060</p>
              <p> Brasil </p>
              <p>
                <strong>Celular:</strong> +21 1112233455
              </p>
              <p>
                <strong>Email:</strong>info@exemplo.com
              </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-info">
              <h3>SOBRE NÓS</h3>
              <p>
                Somos uma empresa focada em prestar o melhor serviço de transporte do Brasil, prezando pela segurança e conforto dos nossos passageiros.
              </p>
              <div className="social-links mt-3">
                <a href="https://twitter.com/riocardmais?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="https://www.facebook.com/riocardmais/?locale=pt_BR" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://www.instagram.com/riocardmais/" className="instagram">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/riocardmais/?originalSubdomain=br" className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>LzDev</span>
          </strong>
          . Todos os direitos reservados
        </div>
        <div className="credits">
          Designed by <a href="https://www.linkedin.com/in/lucas-oliveira-b95415219/">LzDev</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;