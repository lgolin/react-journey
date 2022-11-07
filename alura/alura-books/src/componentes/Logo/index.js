import './logo.css';
import logo from '../../imagens/logo.svg';

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo da alura books" className="logo-img" />
      <p>
        <strong>Alura</strong> Books
      </p>
    </div>
  );
};

export default Logo;
