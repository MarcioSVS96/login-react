import {FaUser, FaLock} from 'react-icons/fa';
import {useState} from "react";
import "./Login.css";

const Login = () => {
    //Primeira variavel consulta e segunda altera o valor
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div className="container">
      <form>
        <h1>Acesse o sistema</h1>
        <div>
            <input type="email" placeholder="Email" />
            <FaUser className='icon' />
        </div>
        <div>
            <input type="password" placeholder="Senha" />
            <FaLock className='icon' />
        </div>
        <div className="recall-forget">
            <label>
                <input type="checkbox" />
                Lembra de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
        </div>
        <button>Entrar</button>
        <div className="signup-link">
            <p>Não tem uma conta? <a href="#">Registrar</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
