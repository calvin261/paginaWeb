import "./App.css";
import "./assets/imagenes/facebook.png";
import Contenedores from "./components/Contenedores";
import Menu from "./components/menu";

//hola esto es un comentario
/*
Comentario multilinea
*/

function App() {
  const saludo = "Hola Mundo!";

  const saludarConNombre = (nombre) => {
    alert(`hola ${nombre}`);
  };

  //https://picsum.photos/200/300
  return (
    <>
      <div className="App">
        <div className="container">
          <Menu />
          <img
            className="app_main_image"
            src="https://www.apple.com/la/home/images/heroes/iphone-12-purple/hero_iphone_12_purple__eybnx2ju5mky_mediumtall.jpg"
            alt=""
          />
          <div className="centered">
            <p
              style={{
                fontSize: 56,
                fontWeight: 600,
                fontFamily:
                  'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                margin: 0,
                letterSpacing: -0.005,
                lineHeight: 1.47059,
              }}
            >
              iPhone 12
            </p>
            <p
              style={{
                fontSize: 28,
                fontWeight: 400,
                fontFamily:
                  'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                margin: 0,
                marginTop: 6,
                letterSpacing: 0.004,
                lineHeight: 1.47059,
              }}
            >
              Morado. Soñado
            </p>
            <p
              style={{
                color: "#86868b",
                fontSize: 17,
                fontWeight: 400,
                fontFamily:
                  'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                margin: 0,
                marginTop: 8,
                letterSpacing: -0.022,
                lineHeight: 1.47059,
              }}
            >
              Muy pronto disponible en morado
            </p>
            <div className="cta-links" style={{ marginTop: 16 }}>
              <a href="https://www.apple.com/la/">Más información > </a>
            </div>
          </div>
        </div>
        <div className="container">
          <img
            className="app_main_image"
            src="https://www.apple.com/v/home/z/images/heroes/ipad-pro/hero_ipad_pro__gl982dtu49im_mediumtall.jpg"
            alt=""
          />
          <div className="centered">
            <p
              style={{
                fontSize: 56,
                color: "white",
                fontWeight: 600,
                fontFamily:
                  'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                margin: 0,
                letterSpacing: -0.005,
                lineHeight: 1.47059,
              }}
            >
              iPad Pro
            </p>
            <p
              style={{
                fontSize: 28,
                fontWeight: 400,
                fontFamily:
                  'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                margin: 0,
                marginTop: 6,
                letterSpacing: 0.004,
                lineHeight: 1.47059,
              }}
            >
              Con los superpoderes del chip M1 de Apple
            </p>
            <p
              style={{
                color: "#86868b",
                fontSize: 17,
                fontWeight: 400,
                fontFamily:
                  'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                margin: 0,
                marginTop: 8,
                letterSpacing: -0.022,
                lineHeight: 1.47059,
              }}
            >
              Consulta la disponibilidad más adelante
            </p>
            <div className="cta-links" style={{ marginTop: 16 }}>
              <a href="https://www.apple.com/la/">Más información > </a>
            </div>
          </div>
        </div>
        <div className="container">
          <img
            className="app_main_image"
            src="https://www.apple.com/la/home/images/heroes/imac/hero_imac_avail__zbofyl96mzmm_mediumtall.jpg"
            alt=""
          />
          <div className="centered">
            <p
              style={{
                fontSize: 56,
                color: "white",
                fontWeight: 600,
                fontFamily:
                  'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                margin: 0,
                letterSpacing: -0.005,
                lineHeight: 1.47059,
              }}
            >
              iMac
            </p>
            <p
              style={{
                fontSize: 28,
                fontWeight: 400,
                fontFamily:
                  'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                margin: 0,
                marginTop: 6,
                letterSpacing: 0.004,
                lineHeight: 1.47059,
              }}
            >
              Dile hola.
            </p>
            <p
              style={{
                color: "#86868b",
                fontSize: 17,
                fontWeight: 400,
                fontFamily:
                  'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                margin: 0,
                marginTop: 8,
                letterSpacing: -0.022,
                lineHeight: 1.47059,
              }}
            >
              Consulta la disponibilidad más adelante
            </p>
            <div className="cta-links" style={{ marginTop: 16 }}>
              <a href="https://www.apple.com/la/">Más información > </a>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="container-w50">
            <img
              className="app_main_image"
              src="https://www.apple.com/v/home/z/images/promos/iphone-12-pro/iphone_12_pro_us__e5oyysg4k0ya_large.jpg"
              alt=""
            />
            <div className="lefted">
              <p
                style={{
                  fontSize: 56,
                  color: "white",
                  fontWeight: 600,
                  fontFamily:
                    'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                  margin: 0,
                  letterSpacing: -0.005,
                  lineHeight: 1.47059,
                }}
              >
                iPhone 12 Pro
              </p>
              <p
                style={{
                  fontSize: 28,
                  fontWeight: 400,
                  color: "white",
                  fontFamily:
                    'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                  margin: 0,
                  marginTop: 6,
                  letterSpacing: 0.004,
                  lineHeight: 1.47059,
                }}
              >
                Un salto al siguiente nivel.
              </p>
              <div className="cta-links" style={{ marginTop: 16 }}>
                <a href="https://www.apple.com/la/">Más información > </a>
              </div>
            </div>
          </div>
          <div className="container-w50">
            <img
              className="app_main_image"
              src="https://www.apple.com/la/home/images/promos/watch-series-6/promo_watch_series_6_lte__f8lrasjnry2y_medium.jpg"
              alt=""
            />
            <div className="righted">
              <img
                src="https://www.apple.com/v/home/z/images/logos/watch-series-6/promo_logo_watch_series_6__gdadxakat1iu_medium.png"
                alt=""
              />

              <p
                style={{
                  fontSize: 28,
                  fontWeight: 400,
                  color: "white",
                  fontFamily:
                    'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                  margin: 0,
                  marginTop: 6,
                  letterSpacing: 0.004,
                  lineHeight: 1.47059,
                }}
              >
                Un futuro más saludable en tu muñeca.
              </p>

              <div className="cta-links" style={{ marginTop: 16 }}>
                <a href="https://www.apple.com/la/">Más información > </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="container-w50">
            <img
              className="app_main_image"
              src="https://www.apple.com/v/home/z/images/promos/airtag/promo_airtag__e6b73a64nno2_medium.jpg"
              alt=""
            />
            <div className="lefted-v">
              <p
                style={{
                  fontSize: 56,
                  color: "black",
                  fontWeight: 600,
                  fontFamily:
                    'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                  margin: 0,
                  letterSpacing: -0.005,
                  lineHeight: 1.47059,
                }}
              >
                AirTag
              </p>
              <p
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                  fontFamily:
                    'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                  margin: 0,
                  marginTop: 6,
                  letterSpacing: 0.004,
                  lineHeight: 1.47059,
                }}
              >
                Pierde la constumbre de perder las cosas.
              </p>
              <p
                style={{
                  color: "#86868b",
                  fontSize: 17,
                  fontWeight: 400,
                  fontFamily:
                    'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                  margin: 0,
                  marginTop: 8,
                  letterSpacing: -0.022,
                  lineHeight: 1.47059,
                }}
              >
                Consulta la disponibilidad más adelante
              </p>
              <div className="cta-links" style={{ marginTop: 16 }}>
                <a href="https://www.apple.com/la/">Más información > </a>
              </div>
            </div>
          </div>
          <div className="container-w50">
            <img
              className="app_main_image"
              src="https://www.apple.com/v/home/z/images/promos/arcade-wonderbox/promo_arcade_wonderbox__emq7ob1vhtw2_medium.jpg"
              alt=""
            />
            <div className="righted-v">
              <img
                src="https://www.apple.com/v/home/z/images/logos/arcade/logo__dcojfwkzna2q_medium.png"
                alt=""
              />

              <p
                style={{
                  fontSize: 28,
                  fontWeight: 400,
                  fontFamily:
                    'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                  margin: 0,
                  marginTop: 6,
                  letterSpacing: 0.004,
                  lineHeight: 1.47059,
                }}
              >
                Wonderbox: Crea Aventuras.
              </p>

              <div className="cta-links" style={{ marginTop: 16 }}>
                <a href="https://www.apple.com/la/">Más información > </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="container-w50">
            <img
             
              src="https://www.apple.com/la/home/images/promos/apple-one/tile__cauwwcyyn9hy_large.jpg"
              alt=""
            />
            <div className="lefted-v">
              <p
                style={{
                  fontSize: 56,
                  color: "black",
                  fontWeight: 600,
                  fontFamily:
                    'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                  margin: 0,
                  letterSpacing: -0.005,
                  lineHeight: 1.47059,
                }}
              >
                AirTag
              </p>
              <p
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                  fontFamily:
                    'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                  margin: 0,
                  marginTop: 6,
                  letterSpacing: 0.004,
                  lineHeight: 1.47059,
                }}
              >
                Pierde la constumbre de perder las cosas.
              </p>
              <p
                style={{
                  color: "#86868b",
                  fontSize: 17,
                  fontWeight: 400,
                  fontFamily:
                    'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                  margin: 0,
                  marginTop: 8,
                  letterSpacing: -0.022,
                  lineHeight: 1.47059,
                }}
              >
                Consulta la disponibilidad más adelante
              </p>
              <div className="cta-links" style={{ marginTop: 16 }}>
                <a href="https://www.apple.com/la/">Más información > </a>
              </div>
            </div>
          </div>
          <div className="container-w50">
            <img
             
              src="https://www.apple.com/la/home/images/promos/tv-plus-device-offer/tile_greyhound__e35b5brgkmi6_medium.jpg"
              alt=""
            />
            <div className="righted-v">
              <img
                src="https://www.apple.com/v/home/z/images/logos/arcade/logo__dcojfwkzna2q_medium.png"
                alt=""
              />

              <p
                style={{
                  fontSize: 28,
                  fontWeight: 400,
                  fontFamily:
                    'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                  margin: 0,
                  marginTop: 6,
                  letterSpacing: 0.004,
                  lineHeight: 1.47059,
                }}
              >
                Wonderbox: Crea Aventuras.
              </p>

              <div className="cta-links" style={{ marginTop: 16 }}>
                <a href="https://www.apple.com/la/">Más información > </a>
              </div>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="flexBox">
          <Contenedores />

          <Contenedores />

          <Contenedores />

          <Contenedores />
        </div>
      </div>
    </>
  );
}

export default App;
