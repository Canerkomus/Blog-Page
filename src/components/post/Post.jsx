import "./post.css";

export default function Post(props) {
  return (
    <div className="post">
      <div>
        <img
          className="postImg"
          src="https://cdn1.ntv.com.tr/gorsel/Jm20rnvNKUS12qSRYFXLbg.jpg?width=1000&mode=both&scale=both&v=1610364619175"
          alt=""
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">"Trip"</span>
          </div>
          <span className="postTitle">"Fethiye" </span>
          <hr />
          <span className="postDate">"10.05.2021 " </span>
          <p className="postDesc">
            {" "}
            "Fethiye'ye bağlı Öludeniz'de, dünyanın en güzel kumsalında denize
            girebilir, Kelebekler Vadisi ve Gemiler Adası'nı görebilir,
            Babadağ'dan yamaç paraşütü yapabilirsiniz."
          </p>
        </div>
      </div>
    </div>
  );
}
