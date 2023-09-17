import { useState } from "react";
import propTypes from "prop-types";

import pomodoro from "../assets/imgs/pomodoro.svg";
import movick from "../assets/imgs/movick.svg";
import india from "../assets/imgs/india.svg";
import gatinhos from "../assets/imgs/gatinhos.svg";
import carrinho from "../assets/imgs/carrinho.svg";

import AppContext from "./AppContext";

function Provider({ children }) {
  const projects = [
    {
      id: 1,
      nameProject: "Pomodoro Timer",
      imgProject: pomodoro,
      link: "https://ma-vick.github.io/pomodoro-timer/",
      tecnologias: ["HTML", "CSS", "JS"],
      description:
        'Projeto de timer para gerenciamento de tempo que utiliza "A Técnica Pomodoro". O projeto foi desenvolvido com as tecnologias HTML, CSS e JS. De uso simples, onde temos uma aba para marcar o tempo de foco e a segunda aba para o tempo de pausa.',
    },
    {
      id: 2,
      nameProject: "Movick",
      imgProject: movick,
      link: "https://movick.netlify.app/",
      tecnologias: ["ReactJS"],
      description:
        "Projeto de site com informações de filmes que estão em cartaz no momento, onde você pode ler a sinopse, acessar o trailer e adicionar a sua lista o filme desejado.",
    },
    {
      id: 3,
      nameProject: "India - CEI FAIR",
      imgProject: india,
      link: "https://india-ceifair.netlify.app/",
      tecnologias: ["ReactJS"],
      description:
        "Projeto desenvolvido para um evento de culminância do curso de idiomas disponibilizado pelo Estado do Espírito Santo, o site é completamente em inglês, contém informações sobre do que se trata o CEI, o CEI Fair, e muitas outras informações sobre a apresentação feita no evento. Este projeto foi desenvolvido com ReactJS e muito amor.",
    },
    {
      id: 4,
      nameProject: "Gatinhos coloridos",
      imgProject: gatinhos,
      link: "https://ma-vick.github.io/cats-change-color/",
      tecnologias: ["HTML", "CSS", "JS"],
      description:
        "Projeto criado para me divertir aprendendo, achei fofo e pude aprender sobre a manipulação do DOM com JS.",
    },
    {
      id: 5,
      nameProject: "Carrinho de compras",
      imgProject: carrinho,
      link: "https://shopping-cart-mavick.netlify.app/",
      tecnologias: ["ReactJS"],
      description:
        'Projeto desenvolvido a partir de um tutorial do canal "Manual do Dev", um carrinho de compras simples, onde consumindo a API do Mercado Livre você pode fazer buscas sobre produtos, também é possível adicionar itens ao seu carrinho. Minhas implementações no projeto foram a opção de remover todos os itens de uma vez do carrinho, apresentar a busca no main e agrupar itens do carrinho.',
    },
    {
      id: 6,
      nameProject: "",
      imgProject: "",
      link: "",
      tecnologias: [],
    },
  ];
  const [sidebar, setSidebar] = useState(false);

  const value = { projects, sidebar, setSidebar };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
