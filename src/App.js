import "./App.css";
import "./assets/imagenes/facebook.png";

import ContentImage from "./components/contentImage";
import ContentImageFlex from "./components/contentImageFlex";
import ContentImageFlex2 from "./components/contentImagenFlex2";
import Footer from "./components/footer";


//hola esto es un comentario
/*
Comentario multilinea
*/

function App() {


  const saludarConNombre = (nombre) => {
    alert(`hola ${nombre}`);
  };

  //https://picsum.photos/200/300
  return (
    <>
      <div className="App">
        <ContentImage
          url="https://www.apple.com/la/home/images/heroes/iphone-12-purple/hero_iphone_12_purple__eybnx2ju5mky_mediumtall.jpg"
          titulo="iPhone 12"
          description="Morado. Soñado"
          description2=""
        ></ContentImage>
        <ContentImage
          url="https://www.apple.com/v/home/z/images/heroes/ipad-pro/hero_ipad_pro__gl982dtu49im_mediumtall.jpg"
          titulo="  iPad Pro"
          description="  Con los superpoderes del chip M1 de Apple"
          description2="  Consulta la disponibilidad más adelante"
          color="white"
        ></ContentImage>
        <ContentImage
          url="https://www.apple.com/la/home/images/heroes/imac/hero_imac_avail__zbofyl96mzmm_mediumtall.jpg"
          titulo="iMac"
          description=" Dile hola."
          description2=" Consulta la disponibilidad más adelante"
        ></ContentImage>
        <ContentImageFlex
          url="https://www.apple.com/v/home/z/images/promos/iphone-12-pro/iphone_12_pro_us__e5oyysg4k0ya_large.jpg"
          title="iPhone 12 Pro"
          description="Pierde la constumbre de perder las cosas."
          description2="Un futuro más saludable en tu muñeca."
          url2="https://www.apple.com/la/home/images/promos/watch-series-6/promo_watch_series_6_lte__f8lrasjnry2y_medium.jpg"
          imglogo="https://www.apple.com/v/home/z/images/logos/watch-series-6/promo_logo_watch_series_6__gdadxakat1iu_medium.png"
          color="white"
        ></ContentImageFlex>
        <ContentImageFlex
          url="https://www.apple.com/v/home/z/images/promos/airtag/promo_airtag__e6b73a64nno2_medium.jpg"
          title=" AirTag"
          description="Pierde la constumbre de perder las cosas."
          description2="Un futuro más saludable en tu muñeca."
          url2="https://www.apple.com/v/home/z/images/promos/arcade-wonderbox/promo_arcade_wonderbox__emq7ob1vhtw2_medium.jpg"
          imglogo="https://www.apple.com/v/home/z/images/logos/arcade/logo__dcojfwkzna2q_medium.png"
        ></ContentImageFlex>
         <ContentImageFlex2
          url="https://www.apple.com/la/home/images/promos/apple-one/tile__cauwwcyyn9hy_large.jpg"
          title="One"
          description="Disfruta cuatro servicios de Apple en uno. Y aprovecha más por menos"
          description2="Obten un año de Apple TV+ gratis al comprar un dispotivo Apple."
          url2="https://www.apple.com/la/home/images/promos/tv-plus-device-offer/tile_greyhound__e35b5brgkmi6_large.jpg"
          imglogo="https://www.apple.com/v/home/z/images/logos/arcade/logo__dcojfwkzna2q_medium.png"
        ></ContentImageFlex2>

        <Footer />
      </div>
    </>
  );
}

export default App;
