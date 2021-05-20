import React from "react";
import "../App.css";
export default function Menu() {
  return (
    <div className="menu" style={{ height: 48, backgroundColor: "#1D1D1F" }}>
      <div className="flex-menu">
        <img
          className="logoMenu"
          src="https://www.apple.com/ac/globalnav/6/es_419/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg"
          alt=""
        />
        <div>Mac</div>
        <div>iPad</div>
        <div>iPhone</div>
        <div>Watch</div>
        <div>TV</div>
        <div>Music</div>
        <div>Soporte</div>
        <div>Donde Comprar</div>
        <div></div>
      </div>
    </div>
  );
}
