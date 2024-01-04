import React, { useEffect, useState } from "react";
import styles from "./Conteudo.module.css";
import axios from "axios";

const Conteudo = () => {
  let [nome, setNome] = useState("");
  let [url, setUrl] = useState("");
  let [importante, setImportante] = useState(false);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3030/favoritao")
      .then((response) => {
        setFavoritos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });

  // Criar novo favorito
  const handleSubmit = (e) => {
    // e.preventDefault(); PEDIR PARA DAMASCENO EXPLICAR O PORQUE FUNCIONA SEM

    const newFavorito = { nome, url, importante };
    axios.post('http://127.0.0.1:3030/favoritao', newFavorito)
      .then(response => {
        alert(`Novo favorito criado`);
        setNome('')
      })
      .catch(error => {
        window.alert("Digite o nome e a url")
      });
  };

  //Deletar favorito 
  const handleDelete = (favoritoId) => {
    axios.delete(`http://127.0.0.1:3030/favoritao/${favoritoId}`)
      .then(() => {
        setFavoritos(favoritos.filter(favorito => favorito.id !== favoritoId));
        alert(`O favorito foi deletado com sucesso`);
      })
      .catch(error => {
        console.error('Error deleting the post:', error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.criarFav}>
        <h1>Crie Um Novo Favorito</h1>

        <form className={styles.formulario}>
          <label>Nome do Site</label>
          <br />
          <input
            name="nome_site"
            onChange={(evento) => {
              setNome(evento.target.value);
            }}
          ></input>
          <br />

          <label>URL</label>
          <br />
          <input
            type="url"
            name="url"
            onChange={(evento) => {
              setUrl(evento.target.value);
            }}
          ></input>
          <br />

          <input
            type="checkbox"
            name="checkbox"
            onChange={() => setImportante(!importante)}
          ></input>
          <label htmlFor="checkbox">Importante</label>
          <br />

          <input
            type="button"
            value="Salvar"
            onClick={() => handleSubmit()}
          />
        </form>

        <ul className={styles.lista}>
          {favoritos[0] !== undefined &&
            favoritos.map((favorito) => (
              <div key={favorito.id}>
                <li className={styles.listaFavoritos} style={favorito.importante ? { color: "red" } : {}}>
                  {" "}
                  <a href={favorito.url} target="_blank" rel="noreferrer" style={favorito.importante ? { color: "red" } : {}} >{favorito.nome} </a>
                  {favorito.importante ? " importante" : ""}{" "}

                  <input
                    className={styles.botaoApagar}
                    type="button"
                    value="Deletar"
                    onClick={() => handleDelete(favorito.id)}
                  />
                </li>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Conteudo;
