import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {
  const times = [
    'Selecione um time',
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ];

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('Ao salvar');
  };

  return (
    <section className="formulario">
      <form onSubmit={onSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto obrigatorio label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto
          obrigatorio
          label="Cargo"
          placeholder="Digite o seu cargo"
        />
        <CampoTexto label="Imagem" placeholder="Adicione a sua imagem" />
        <ListaSuspensa obrigatorio label="Time" items={times} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
