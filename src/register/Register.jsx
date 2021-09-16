import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Kayıt Ol</span>
      <form className="registerForm">
        <label>Kullanıcı adı</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Kullanıcı adı giriniz..."
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Mail adresi giriniz..."
        />
        <label>Şifre</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Şifernizi giriniz..."
        />
        <button className="registerButton">Kaydol</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          GİRİŞ
        </Link>
      </button>
    </div>
  );
}
