import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import ModalWindow from "../../components/modalWindow/ModalWindow";

import { useAppDispatch } from "../../hooks/hooks";

import { signIn } from "../../core/helpers/validation.helpers";

import "./SignIn.scss";
import { loginAction } from "../../store/reducers/auth/signInReducer";
import { useNavigate } from "react-router-dom";
import { routesConfig } from "../../routes/routesConfig";

export interface ISignInForm {
  email: string;
  password: string;
}

const SignIn = () => {
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignInForm>({ resolver: yupResolver(signIn), mode: "onSubmit" });

  const submit: SubmitHandler<ISignInForm> = (data) => {
    dispath(loginAction(data.email));
    reset();
    navigate(routesConfig.home.path);
  };
  return (
    <div className="signin">
      <div className="signin-filter">
        <ModalWindow>
          <h1 className="signin-title">Simple Hotel Check</h1>
          <form onSubmit={handleSubmit(submit)}>
            <Input
              htmlFor="Логин"
              type="Email"
              error={errors.email?.message}
              register={{ ...register("email") }}
              placeholder="Введите почту"
              classInput="signIn__input-auth"
              classLabel="signIn__input-label"
            />
            <Input
              htmlFor="Пароль"
              type="password"
              error={errors.password?.message}
              register={{ ...register("password") }}
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
