import React from 'react';
import styles from './Botao.module.scss';

export default function Botao({ children }) {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
}
