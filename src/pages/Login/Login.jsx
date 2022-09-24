import { Gi3DGlasses } from "react-icons/gi";
import { InputButton } from "../../components/Input/InputButton";
import { Modal } from "../../components/Modal/Modal";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import "./Login.css";

const Login = () => {
  const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submit", { email, password });
    login(email, password);
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form onSubmit={handleSubmit}>
            <span className="login-form-title"> Bem vindo </span>
            {/* <p>{String(authenticated)}</p> */}
            <span className="login-form-title">
              <span>
                <Gi3DGlasses />
              </span>
            </span>

            <InputButton
              type="email"
              name="Email"
              text={email}
              
              change={(e) => setEmail(e.target.value)}
            />

            <InputButton
              type="password"
              name="Password"
              text={password}
              change={(e) => setPassword(e.target.value)}
            />

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>
            <div className="text-center">
              <Modal />
            </div>
            <hr />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
