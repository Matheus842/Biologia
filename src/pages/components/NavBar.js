import { BubblyLink } from "react-bubbly-transitions";
import { FaBrain, FaHome } from 'react-icons/fa';
import { IoIosBody } from 'react-icons/io'
import style from "./NavBar.module.scss";

function NavBar() {
  return (
    <nav
      className={style.nav + " animate-in"}
      style={{ animationDalay: "800ms" }}
    >
      <BubblyLink
        colorStart="linear-gradient(180deg, rgba(4,46,0,1) 0%, rgba(1,227,0,1) 100%)"
        to="/"
      >
        <FaHome />
        <p>Início</p>
      </BubblyLink>
      <BubblyLink
        colorStart="linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
        to="mental"
      >
        <FaBrain />
        <p>Saúde Mental</p>
      </BubblyLink>
      <BubblyLink
        colorStart="linear-gradient(180deg, rgba(195,34,34,1) 0%, rgba(253,187,45,1) 100%)"
        to="corporal"
      >
        <IoIosBody />
        <p>Saúde Corporal</p>
      </BubblyLink>
    </nav>
  );
}
export default NavBar;
