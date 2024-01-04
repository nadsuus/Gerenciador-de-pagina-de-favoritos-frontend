import React from 'react'
import styles from './Menu.module.css'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <nav>
        <ul className={styles.nav}>
          <li className={styles.tituloNav}><Link to="/">Home</Link></li>
          <li className={styles.tituloNav}><Link to='/sobrenos'>Sobre nós</Link></li>
          <li className={styles.tituloNav}><Link to="/login">Login</Link></li>
          <li className={styles.tituloNav}><Link to='/cadastro'>Cadastro</Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Menu