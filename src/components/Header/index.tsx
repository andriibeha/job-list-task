import { FC } from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={s.header}>
      <ul className={s.header__list}>
        <Link className={s.header__item} to={"/"}>
          Logo
        </Link>
        <Link className={s.header__item} to={"/"}>
          Home
        </Link>
      </ul>
    </header>
  );
};

export default Header;
