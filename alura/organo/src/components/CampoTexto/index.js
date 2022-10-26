import './CampoTexto.css';

const CampoTexto = ({ label, placeholder }) => {
  const placeholderMod = `${placeholder}...`;
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input type="text" placeholder={placeholderMod} />
    </div>
  );
};

export default CampoTexto;
