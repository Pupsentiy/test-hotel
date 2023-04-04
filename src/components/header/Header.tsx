import { FC } from 'react'

import Button from '../button/Button'

import log from '../../assets/img/logout.svg'

import './Header.scss'


const Header:FC = () => {
  return (
    <header className='header'>
     <h1 className='header__title'>Simple Hotel Check</h1>
     <Button type='button' classButton='header_btn-logout'>Выйти <img src={log} alt='loggout'/></Button>
    </header>
  )
}

export default Header