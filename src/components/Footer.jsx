import React from "react";
import Button from "react-bootstrap/Button";
import { themeColor, styles, url, Images } from "../utilis/constant";
import { FaApple, FaGooglePlay } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <div
        className="row"
        style={{
          backgroundColor: "#F5F7FA",
          height: "600px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div>
            <h5>Download Paytm App to Pay from anywhere</h5>
          </div>
          <div>
            <a target="_blank" rel="noopener noreferrer" href={url.appstore}>
              <img src={Images.AppStore} />
            </a>
          </div>
          <div>
            <a target="_blank" rel="noopener noreferrer" href={url.playstore}>
              <img src={Images.PlayStore} />
            </a>
          </div>
          <div>
            <a
              style={{
                textDecoration: "none",
                color: "#00baf2",
                cursor: "pointer",
              }}
              href={url.twitter}
            >
              <img src={Images.Twitter} />
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#00baf2",
                cursor: "pointer",
              }}
              href={url.Instagram}
            >
              <img src={Images.Instagram} />
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#00baf2",
                cursor: "pointer",
              }}
              href={url.faceBook}
            >
              <img src={Images.faceBook} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
