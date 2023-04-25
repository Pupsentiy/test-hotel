import * as yup from "yup";

import { EMAIL_REGEXP, PASSWORD_REGEXP } from "../constants/constants";

export const emeilSchema = yup
  .string()
  .email("Некорректный адрес электронной почты")
  .matches(EMAIL_REGEXP, "Введите адрес электронной почты")
  .required("Пожалуйста, введите электронной почты!");

export const passwordShema = yup
  .string()
  .matches(PASSWORD_REGEXP, "Пароль должен содержать 8 символов, одну цифру, только латинские буквы")
  .min(8)
  .max(64)
  .required("Введите пароль");

export const signIn = yup.object().shape({
  email: emeilSchema,
  password: passwordShema,
});
