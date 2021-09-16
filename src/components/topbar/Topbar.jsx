import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              ANASAYFA
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/aboutus">
              HAKKIMDA
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              İLETİŞİM
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              HİKAYE
            </Link>
          </li>
          <li className="topListItem">{user && "ÇIKIŞ"} </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                GİRİŞ
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                KAYIT OL
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"> </i>
      </div>
    </div>
  );
}
