import styles from './Galeria.module.scss';

import Tags from '../Tags';

import fotos from './fotos.json';
import Cards from './Cards';

export default function Galeria() {
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela Galeria</h2>
      <Tags />
      <Cards itens={fotos} styles={styles} />
    </section>
  );
}
