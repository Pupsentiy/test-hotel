import * as yup from "yup";

import { EMAIL_REGEXP, PASSWORD_REGEXP } from "../constants/constants";

export const emeilSchema = yup
  .string()
  .email()
  .matches(EMAIL_REGEXP, "Введите адрес электронной почты")
  .required("Please Enter Your Email!");

  export const passwordShema = yup
  .string()
  // .typeError("must be a string")
  .matches(PASSWORD_REGEXP, "Должна быть хотя бы одна буква и одна цифра")
  .min(8)
  .max(64)
  .required("Введите пароль");

  export const signIn = yup.object().shape({
    email: emeilSchema,
    password: passwordShema,
  });
