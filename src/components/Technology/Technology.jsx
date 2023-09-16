import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { SiJavascript } from "react-icons/si";

import "./Technology.css";

export default function Technology({ name }) {
  let icon;
  let iconColor;

  switch (name) {
    case "HTML":
      icon = <IoLogoHtml5 />;
      iconColor = 'orange';
      break;
    case "CSS":
      icon = <IoLogoCss3 />;
      iconColor = 'blue';
      break;
    case "JS":
      icon = <SiJavascript />;
      iconColor = 'yellow';
      break;
    case "ReactJS":
      icon = <GrReactjs />;
      iconColor = 'skyblue';
      break;
    default:
      icon = null;
      iconColor = 'grey';
      break;
  }

  return <span className="icon-tech" style={{ color: iconColor }}>{icon}</span>;
}
