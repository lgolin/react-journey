import React from 'react';

import open from './open.png';
import favorito from './favorito.png';

export default function Cards({ itens, styles }) {
  return (
    <ul className={styles.galeria__cards}>
      {itens.map((item) => {
        return (
          <li key={item.id} className={styles.galeria__card}>
            <img
              src={item.imagem}
              alt={item.titulo}
              className={styles.galeria__imagem}
            />
            <div>
              <p className={styles.galeria__descricao}>{item.titulo}</p>

              <span>
                <img src={favorito} alt="ícone de coração de curtir" />
                <img src={open} alt="ícone de abrir modal" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
