import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/Button";

import log from "../../assets/img/logout.svg";
import { routesConfig } from "../../routes/routesConfig";

import "./Header.scss";

const Header: FC = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate(routesConfig.login.path);
    localStorage.clear();
    window.location.reload();
  };

  return (
    <header className="header">
      <h1 className="header__title">Simple Hotel Check</h1>
      <Button
        type="button"
        classButton="header_btn-logout"
        onClick={() => logout()}
      >
        Выйти <img src={log} alt="loggout" />
      </Button>
    </header>
  );
};

export default Header;
