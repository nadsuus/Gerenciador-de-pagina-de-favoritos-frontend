import React from "react";
import styles from "./Cabecalho.module.css"
import Menu from "../Menu";

export default function Cabecalho(props) {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={props.logo} alt="Logo"/>
      <p className={styles.titulo}>{props.titulo}</p>
      <Menu/>
    </div>
  );
}