import './CampoTexto.css';

const CampoTexto = (props) => {
  const placeholderMod = `${props.placeholder}...`;

  // let inputChange = 'Guilherme';

  function onInputChange(e) {
    props.aoAlterado(e.target.value);
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={onInputChange}
        required={props.obrigatorio}
        type="text"
        placeholder={placeholderMod}
      />
    </div>
  );
};

export default CampoTexto;
