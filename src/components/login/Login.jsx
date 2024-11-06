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
    
    alert("enviando os dados:" + username + " - " + password);
  }

  return (
    <div className="container">
      //Função para envio
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div>
          //Captação de valores onChange
          <input type="email" placeholder="Email" onChange={(e) => setUsername(e.target.value)}/>
          <FaUser className="icon" />
        </div>
        <div>
          <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
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
