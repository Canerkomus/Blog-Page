import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Giriş</span>
      <form className="loginForm">
        <label>Kullanıcı Adı</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email..."
        />
        <label>Şifre</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="loginButton">Giriş</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          KAYIT
        </Link>
      </button>
    </div>
  );
}
