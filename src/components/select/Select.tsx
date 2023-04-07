import { ChangeEvent, FC } from "react";
import { TDataPrice, TDataRating } from "../../core/constants/constants.types";
import { TSelectProps } from "./Select.types";



const Select: FC<TSelectProps> = ({ name, id, onChange, className, data }) => {
  return (
    <select
      name={name}
      id={id}
      onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(event)}
      className={className}
    >
      {data &&
        data.map((item: TDataPrice | TDataRating, i: number) => (
          <option value={item.value} key={i}>
            {item.name}
          </option>
        ))}
    </select>
  );
};

export default Select;
