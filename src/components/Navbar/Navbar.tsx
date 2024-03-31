import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as HeartSolid } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <header className="header">
      <NavLink className={"header-logo"} to={"/"}>
        Restaurant
      </NavLink>
      <NavLink className={"header-favorites"} to={"favorites"}>
        <FontAwesomeIcon className="favorite-btn__icon" icon={HeartSolid} />
      </NavLink>
    </header>
  );
}
