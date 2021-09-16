import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">HAKKIMDA</span>
        <img
          className="sidebarImg"
          src="cvfoto.jpeg"
          alt=""
        />
        <p className="sidebarp">
        Bir sabah, Caner sıkıntılı rüyalardan uyandığında, yatağında korkunç bir haşarat görür. Onun üzerinde yatıyordu. Zırh gibi bir sırt ve eğer başını biraz kaldırırsa, onunkini görebiliyordu. Kahverengi göbek, hafif kubbeli ve kemerlerle sert bölümlere ayrılmıştır.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">KATEGORİ</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Yaşam</li>
          <li className="sidebarListItem">Müzik</li>
          <li className="sidebarListItem">Tarz</li>
          <li className="sidebarListItem">Spor</li>
          <li className="sidebarListItem">Teknoloji</li>
          <li className="sidebarListItem">Sinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle"> TAKİP ET</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
