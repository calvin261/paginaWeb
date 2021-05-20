import React from "react";

function ContentImageFlex({url, title, description, description2, url2, imglogo, color="black"}) {
  return (
    <div>
      <div className="flex">
        <div className="container-w50">
          <img
            className="app_main_image"
            src={url}
            alt=""
          />
          <div className="lefted">
            <p
              style={{
                fontSize: 36,
                color: color,
                fontWeight: 600,
                fontFamily:
                  'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                margin: 0,
                letterSpacing: -0.005,
                lineHeight: 1.47059,
              }}
            >
                {title}
            </p>
            <p
              style={{
                fontSize: 25,
                fontWeight: 400,
                color: color,
                fontFamily:
                  'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                margin: 0,
                marginTop: 6,
                letterSpacing: 0.004,
                lineHeight: 1.47059,
              }}
            >
              {description}
            </p>
            <div className="cta-links" style={{ marginTop: 16 }}>
              <a href="https://www.apple.com/la/">Más información > </a>
            </div>
          </div>
        </div>
        <div className="container-w50">
          <img
            className="app_main_image"
            src={url2}
            alt=""
          />
          <div className="righted">
            <img
              src={imglogo}
              alt=""
            />

            <p
              style={{
                fontSize: 28,
                fontWeight: 400,
                color: color,
                fontFamily:
                  'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                margin: 0,
                marginTop: 6,
                letterSpacing: 0.004,
                lineHeight: 1.47059,
              }}
            >
              {description2}
            </p>

            <div className="cta-links" style={{ marginTop: 16 }}>
              <a href="https://www.apple.com/la/">Más información > </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentImageFlex;
