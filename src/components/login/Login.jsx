import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  //Primeira variável consulta e segunda altera o valor
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Precisa de uma função para envio de formulário
  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("teste", username, password);
    console.log("Envio");
  }

  return (
    <div className="container">
      //Função para envio
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div>
          <input type="email" placeholder="Email" />
          <FaUser className="icon" />
        </div>
        <div>
          <input type="password" placeholder="Senha" />
          <FaLock className="icon" />
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
          <p>
            Não tem uma conta? <a href="#">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
