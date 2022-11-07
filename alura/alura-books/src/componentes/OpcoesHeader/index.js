import styled from 'styled-components';

const Opcao = styled.li`
  min-width: 120px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  text-transform: uppercase;
`;

const Opcoes = styled.ul`
  display: flex;
`;

const textoOpcoes = ['Categorias', 'Favoritos', 'Minha Estatante'];

function OpcoesHeader() {
  return (
    <Opcao>
      {textoOpcoes.map((texto) => (
        <Opcoes>
          <p>{texto}</p>
        </Opcoes>
      ))}
    </Opcao>
  );
}

export default OpcoesHeader;
