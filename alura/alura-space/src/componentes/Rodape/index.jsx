import styles from './Rodape.module.scss';

import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a href="/">
          <img src={facebook} alt="" />
        </a>
        <img src={twitter} alt="" />
        <a href="/"></a>
        <img src={instagram} alt="" />
        <a href="/"></a>
      </div>
      <p>Desenvolvido por Laís Golin</p>
    </footer>
  );
}
