import { FC } from "react"

import Button from "../button/Button"
import Input from "../input/Input"

import './Search.scss'


const Search:FC = () => {
  return (
    <div className="home-search-container">
        <Input htmlFor='Локация' type='text' onChange={() => {}} value=''classInput='home__location-input' classLabel='home__input-label'/>
        <Input htmlFor='Дата заселения' type='date' onChange={() => {}} value='' classInput='home__datepicker-input' classLabel='home__input-label'/>
        <Input htmlFor='Количество дней' type='text' onChange={() => {}} value=''  classInput='home__amountOfDays-input' classLabel='home__input-label'/>
        <Button type='submit' classButton='home__btn-search'>Найти</Button>
      </div>
  )
}

export default Search