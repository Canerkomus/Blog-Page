import "./settings.css";
import Sidebar from "../../src/components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Hesabını Güncelle</span>
          <span className="settingsDeleteTitle">Hesabını Sil</span>
        </div>
        <form className="settingsForm">
          <label>Profil Fotoğrafı</label>
          <div className="settingsPP">
            <img
              src="https://images.unsplash.com/photo-1416138645715-930585fe4ce2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>

            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Kullanıcı Adı</label>
          <input type="text" placeholder="Caner" />
          <label>Email</label>
          <input type="email" placeholder="caner@gmail.com" />
          <label>Şifre</label>
          <input type="password" />
          <button className="settingsSubmit">Güncelle</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
