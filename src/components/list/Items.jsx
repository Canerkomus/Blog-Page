{
  /*const Places = [
  {
    postImg:
      "https://images.unsplash.com/photo-1583060758892-fe46d6e73ee5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    postCat: "Trip",
    postTitle: "Çanakkale",
    postDate: " 21.01.2021 ",
    postDesc:
      "Çanakkale, binyıllar boyunca farklı toplumların egemenliğinde kalmış, gerek mimarisinde gerek yaşamda onlardan izler taşımaktadır. 1970'li yıllardan itibaren yapılmaya başlayan ticari yatırımlarla ildeki geleneksel toplum yapısı yerini hızla modernize kente bırakmıştır. Ticari yatırımlarla ulaşım kolaylaşmış ve şehrin görünümünün değişmesi böylece başlamıştır. Bugün Çanakkale Türkiye'nin en modern çevrelerindendir. Geniş kaldırımları, temiz caddeleri, bakımlı binaları ile örnek bir şehirdir. Henüz altyapısı tam oturmamışsa da kültürel anlamda Çanakkale ili Türkiye'de önde gelen çevrelerdendir. ",
  },
  {
    postImg:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
    postCat: "Trip",
    postTitle: "İstanbul",
    postDate: " 30.01.2021 ",
    postDesc:
      "İstanbul, Türkiye'de Marmara Bölgesi'nde yer alan şehir ve Türkiye Cumhuriyeti Devletinin 81 ilinden biridir. Ülkenin nüfus bakımından en çok göç alan ve en kalabalık ilidir. Ekonomik, tarihi ve sosyo-kültürel açıdan önde gelen şehirlerden biridir. Şehir, iktisadi büyüklük açısından dünyada 34. sırada yer alır.",
  },
  {
    postImg:
      "https://images.unsplash.com/photo-1582380625189-423697e32b92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
    postCat: "Trip",
    postTitle: "İzmir",
    postDate: " 05.02.2021",
    postDesc:
      "Efes, Anadolu'nun batı kıyısında, bugünkü İzmir ilinin Selçuk ilçesinin üç kilometre güneybatısındaki İyonya kıyısında ve sonraları önemli bir Roma kenti olan antik bir Yunan kentiydi. Kuruluşu Cilalı Taş Devri MÖ 6000 yıllarına dayanır. ",
  },
  {
    postImg:
      "https://images.unsplash.com/photo-1587810427695-d4670dbf1d36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    postCat: "Trip",
    postTitle: "Ankara",
    postDate: "10.02.2021",
    postDesc:
      "Anıtkabir, Türkiye'nin başkenti Ankara'nın Çankaya ilçesinde yer alan Mustafa Kemal Atatürk'ün anıt mezarını içeren komplekstir. Emin Onat ile Orhan Arda'nın tasarımı olan yapı kompleksinin 1944'te başlanan inşası 1953'te tamamlanmıştır.",
  },
  {
    postImg:
      "https://cdn1.ntv.com.tr/gorsel/pAx1_ARvDUuhC0XtmPr7MQ.jpg?width=1000&mode=both&scale=both&v=1610364619175",
    postCat: "Trip",
    postTitle: "Adıyaman",
    postDate: "15.02.2021 ",
    postDesc:
      "Adıyaman'ın Kahta ilçesinde bulunan ve içinde Kommagene Krallığı'nın antik kentini barındıran milli park içerisinde, aslan ve kartal heykellerinin arasında 7 metreye varan dev heykeller bulunuyor. Bölge, tarih meraklıları için ideal.",
  },
  {
    postImg:
      "https://cdn1.ntv.com.tr/gorsel/Iov0W1K_RUGHW5W8M63VuA.jpg?width=1000&mode=both&scale=both&v=1610364619175",
    postCat: "Trip",
    postTitle: "Amasya",
    postDate: " 30.03.2021",
    postDesc:
      "Karadeniz Bölgesi'nin Orta Karadeniz bölümünde iç kısımda yer alan Amasya da sizi şaşırtacak şeyler olabilir. Şehrin merkezinden geçen Yeşilırmak'ın kenarında sıralanan ve geleneksel Osmanlı evinin bütün özelliklerini bünyesinde taşıyan Amasya evleri bu şehri görmek için iyi bir neden",
  },
  {
    postImg:
      "https://cdn1.ntv.com.tr/gorsel/fCG39XCI_k6uH8wPdTvvIw.jpg?width=1000&mode=both&scale=both&v=1610364619175",
    postCat: "Trip",
    postTitle: "Bursa",
    postDate: " 01.04.2021",
    postDesc:
      "Bursa'ya 34 km uzaklıktaki Uluabat Gölü, yapısı itibariyle değişik türden yüzbinlerce su kuşuna beslenme ve barınma olanağı sağlıyor. Su içinde yaşayan canlılar için de zengin bir yapıya sahip gölde 21 çeşit balık bulunuyor.",
  },
  {
    postImg:
      "https://cdn1.ntv.com.tr/gorsel/Jm20rnvNKUS12qSRYFXLbg.jpg?width=1000&mode=both&scale=both&v=1610364619175",
    postCat: "Trip",
    postTitle: "Fethiye",
    postDate: "10.05.2021 ",
    postDesc:
      "Fethiye'ye bağlı Öludeniz'de, dünyanın en güzel kumsalında denize girebilir, Kelebekler Vadisi ve Gemiler Adası'nı görebilir, Babadağ'dan yamaç paraşütü yapabilirsiniz.",
  },
]; 

export default Items;*/
}

const Places = () => {
  const data = [
    {
      postImg:
        "https://images.unsplash.com/photo-1583060758892-fe46d6e73ee5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    { postCat: "Trip" },
    { postTitle: "Çanakkale" },
    { postDate: " 21.01.2021 " },
    {
      postDesc:
        "Çanakkale, binyıllar boyunca farklı toplumların egemenliğinde kalmış, gerek mimarisinde gerek yaşamda onlardan izler taşımaktadır. 1970'li yıllardan itibaren yapılmaya başlayan ticari yatırımlarla ildeki geleneksel toplum yapısı yerini hızla modernize kente bırakmıştır. Ticari yatırımlarla ulaşım kolaylaşmış ve şehrin görünümünün değişmesi böylece başlamıştır. Bugün Çanakkale Türkiye'nin en modern çevrelerindendir. Geniş kaldırımları, temiz caddeleri, bakımlı binaları ile örnek bir şehirdir. Henüz altyapısı tam oturmamışsa da kültürel anlamda Çanakkale ili Türkiye'de önde gelen çevrelerdendir. ",
    },
  ];
};
