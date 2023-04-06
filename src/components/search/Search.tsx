import { ChangeEvent, FC, useState } from "react";

import Button from "../button/Button";
import Input from "../input/Input";

import "./Search.scss";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchHotelsRequestAction } from "../../store/reducers/hotels/hotelReducer";
import { currentDate } from "../../core/helpers/dateFormat.helpers";

const Search: FC = () => {
  const dispath = useAppDispatch();
  const [location, setLocation] = useState<string>("Москва");
  const [amountOfDays, setAmountOfDays] = useState<string>("1");
  const [date, setDate] = useState<string>(currentDate);

  const getLocation = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const getCheckInDate = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const getDays = (event: ChangeEvent<HTMLInputElement>) => {
    setAmountOfDays(event.target.value);
  };

  const submit = (e: any) => {
    e.preventDefault();
    dispath(fetchHotelsRequestAction(date, location, amountOfDays));
  };
//добавить debonce
  return (
    <div className="home-search-container">
      <form onSubmit={(e) => submit(e)}>
        <Input
          htmlFor="Локация"
          type="text"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            getLocation(event)
          }
          value={location}
          classInput="home__location-input"
          classLabel="home__input-label"
        />
        <Input
          htmlFor="Дата заселения"
          type="date"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            getCheckInDate(event)
          }
          value={date}
          classInput="home__datepicker-input"
          classLabel="home__input-label"
        />
        <Input
          htmlFor="Количество дней"
          type="number"
          onChange={(event: ChangeEvent<HTMLInputElement>) => getDays(event)}
          value={amountOfDays}
          classInput="home__amountOfDays-input"
          classLabel="home__input-label"
        />
        <Button type="submit" classButton="home__btn-search">
          Найти
        </Button>
      </form>
    </div>
  );
};

export default Search;
