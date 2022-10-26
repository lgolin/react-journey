import './ListaSuspensa.css';

const ListaSuspensa = ({ label, items, obrigatorio }) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select required={obrigatorio}>
        {items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
