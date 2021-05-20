import React from 'react'
import Menu from './menu'

const ContentImage = ({url,titulo,description,description2,color="black"}) => {
    return (
        <div>
            <div className="container">
          <Menu />
          <img
            className="app_main_image"
            src={url}
            alt=""
          />
          <div className="centered">
            <p
              style={{
                fontSize: 56,
                fontWeight: 600,
                color : color,
                fontFamily:
                  'SF-Pro-Text ,"Helvetica Neue","Helvetica","Arial",sans-serif',
                margin: 0,
                letterSpacing: -0.005,
                lineHeight: 1.47059,
              }}
            >
             {titulo}
            </p>
            <p
              style={{
                fontSize: 25,
                fontWeight: 400,
                color : color,
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
             {description2}
            </p>
            <div className="cta-links" style={{ marginTop: 16 }}>
              <a href="https://www.apple.com/la/">Más información > </a>
            </div>
          </div>
        </div>
        </div>
    )
}

export default ContentImage
