import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import ModalWindow from "../../components/modalWindow/ModalWindow";

import { fetchHotels } from "../../store/reducers/hotelReducer";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { signIn } from "../../core/helpers/validation.helpers";

import "./SignIn.scss";

// import { fetchHotelData } from "../api";

export interface ISignInForm {
  email: string;
  password: string;
}

const SignIn = () => {
const dispath = useAppDispatch()
const hotel = useAppSelector(state => state.hotelReducer)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignInForm>({ resolver: yupResolver(signIn), mode: "onSubmit" });

  const submit: SubmitHandler<ISignInForm> = (data) => {
    console.log({ data });
    reset();
  } 
  //5dbd9e7fd87a39c193b06b33565d9126
  // const fetchHotelsFromApi = async () => {
  //   // const req = await fetch('http://engine.hotellook.com/api/v2/lookup.json?token=5dbd9e7fd87a39c193b06b33565d9126&query=moscow&lang=ru&lookFor=hotel&limit=10')
  //   const req = await fetch('http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2023-04-04&checkOut=2023-04-12&limit=10')
  //   const data = await req.json()
  //   return setDa(data)
  // }
  
  // useEffect(() => {
  
  //   fetchHotelsFromApi()
  // }, [])
  

  return (
    <div className="signin">
      <div className="signin-filter">
        <ModalWindow>
          <h1 className="signin-title" >Simple Hotel Check</h1>
          <form onSubmit={handleSubmit(submit)}>
            <Input
              htmlFor="Логин"
              type="Email"
              error={errors.email?.message}
              onChange={() => {}}
              value=""
              register={{ ...register("email") }}
              placeholder="Введите почту"
              classInput="signIn__input-auth"
              classLabel="signIn__input-label"
              
            />
            <Input
              htmlFor="Пароль"
              type="password"
              error={errors.password?.message}
              onChange={() => {}}
              value=""
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

export default SignIn





