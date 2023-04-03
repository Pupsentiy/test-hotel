import Button from "../components/button/Button";
import Input from "../components/input/Input";
import ModalWindow from "../components/modalWindow/ModalWindow";

import "./SignIn.scss";

const SignIn = () => {
  return (
    <div className="signin">
      <div className="signin-filter">
        <ModalWindow>
          <h1 className="signin-title">Simple Hotel Check</h1>
          <form action="">
            <Input
              htmlFor="Логин"
              type="Email"
              error=""
              placeholder="Введите почту"
              classInput="signIn__input-auth"
              classLabel="signIn__input-label"
            />
            <Input
              htmlFor="Пароль"
              type="password"
              error=""
              placeholder="Введите пароль"
              classInput="signIn__input-auth"
              classLabel="signIn__input-label"
            />
            <Button type="submit" classButton="signIn__button-submit">
              Войти
            </Button>
          </form>
        </ModalWindow>
      </div>
    </div>
  );
};

export default SignIn;
