import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import "./Contact.css";

export default function Contact() {
  return (
    <main className="container container-contact">
      <h1>Onde me encontrar?</h1>
      <p>Estou presente nas seguintes redes:</p>
      <ul className="social-medias-list">
        <a href="https://github.com/ma-vick" target="_blank">
          <li className="social-media">
            <BsGithub />
            <p className="nickname">ma-vick</p>
          </li>
        </a>
        <a href="https://twitter.com/i_mavick" target="_blank">
          <li className="social-media">
            <BsTwitter />
            <p className="nickname">i_mavick</p>
          </li>
        </a>
        <a href="https://www.instagram.com/starlight_vick/" target="_blank">
          <li className="social-media">
            <BsInstagram />
            <p className="nickname">starlight_vick</p>
          </li>
        </a>
      </ul>
    </main>
  );
}
