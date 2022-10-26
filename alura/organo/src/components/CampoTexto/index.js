import './CampoTexto.css';

const CampoTexto = ({ label, placeholder, obrigatorio }) => {
  const placeholderMod = `${placeholder}...`;
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input required={obrigatorio} type="text" placeholder={placeholderMod} />
    </div>
  );
};

export default CampoTexto;
