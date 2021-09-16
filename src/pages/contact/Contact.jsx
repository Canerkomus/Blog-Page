import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <form className="contactForm">
        <h1 className="contacth1">İletişim</h1>
        <span className="contactSpan">
          Sorunuz mu var?<br/> Bize buradan ulaşabilirsiniz.
        </span>
        <label>İsim</label>
        <input className="contactInput" type="text" />
        <label>Email</label>
        <input className="contactInput" type="text" />
        <label>Mesaj</label>
        <textarea className="contactMessage" placeholder="Mesajınız..." type="text">
        </textarea>
      </form>
      <button className="contactButton">Gönder</button>
    </div>
  );
}
