import React from 'react';
import Card from './Card';

import styles from '../../Galeria/Galeria.module.scss';

export default function Cards({ itens, style }) {
  return (
    <ul className={styles.galeria__cards}>
      {itens.map((item) => {
        return <Card key={item.id} item={item} style={style} />;
      })}
    </ul>
  );
}
