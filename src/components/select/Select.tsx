import { ChangeEvent, FC } from "react";

export type TSelectProps = {
  name:string
  id:string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  className:string
  data:any
};

const Select: FC<TSelectProps> = ({name,id,onChange,className,data}) => {
  return (
    <select
      name={name}
      id={id}
      onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(event)}
      className={className}
    >
      {data && data.map((item:any,i:number) =>
      <option value={item.value} key={i}>{item.name}</option>
      )}
    </select>
  );
};

export default Select;
