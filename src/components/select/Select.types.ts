import { ChangeEvent } from "react";
import { TDataPrice, TDataRating } from "../../core/constants/constants.types";

export type TSelectProps = {
  name: string;
  id: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  className: string;
  data: TDataPrice[] | TDataRating[];
};