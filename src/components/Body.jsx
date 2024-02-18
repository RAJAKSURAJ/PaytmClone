import React from "react";
import paytmicon from "../Assets/paytmicon.avif";
import bodyimage from "../Assets/bodyimage.avif";
import Button from "react-bootstrap/Button";
import { themeColor, styles, url, Images } from "../utilis/constant";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Body() {
  return (
    <div className="mt-4">
      <div className="row">
        <div className="col">
          <img width="88px" src={paytmicon} alt="image" />
          <h1>India's Most-loved Payments App</h1>
          <div className="body-text2">
            Recharge & pay bills, book flights & movie tickets, open a savings
            account, invest in stocks & mutual funds, and do a lot more.
          </div>
          <div>
            <Button
              style={{
                backgroundColor: styles.black,
                hover: styles.white,
                borderRadius: "50px",
                height: "44px",
              }}
            >
              Dowload Paytm App
              <FaApple
                style={{ cursor: "pointer", marginLeft: "10px" }}
                size={20}
                onClick={() => window.open(url.appstore, "_blank")}
              />
              <FaGooglePlay
                style={{ cursor: "pointer", marginLeft: "10px" }}
                size={20}
                onClick={() => window.open(url.playstore, "_blank")}
              />
            </Button>
          </div>
        </div>
        <div className="col">
          <img width="528px" src={bodyimage} alt="bodyimage" />
        </div>
      </div>
      <div style={{ backgroundColor: themeColor.primary, height: "355px" }}>
        <div className="text-white bodytext">
          <h1>Recharge & Pay Bills on Paytm.</h1>
        </div>

        <div
          className="row  text-white"
          style={{ backgroundColor: themeColor.primary }}
        >
          <div
            className="col bodycard"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="img" src={Images.rechargeMobile} />
            <div className="text-white">Recharge Prepaid Mobile {">"}</div>
          </div>
          <div
            className="col bodycard"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="img" src={Images.ElectricityBill} />
            <div>Pay Electricity Bill {">"}</div>
          </div>
          <div
            className="col bodycard"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="img" src={Images.DthConn} />
            <div>Recharge DTH Connection {">"}</div>
          </div>
          <div
            className="col bodycard"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="img" src={Images.GasCylinder} />
            <div>Book Gas Cylinder {">"}</div>
          </div>
          <div
            className="col bodycard"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="img" src={Images.broadbandBill} />
            <div>Pay Broaband & Landline Bill {">"}</div>
          </div>
          <div
            className="col bodycard"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="img" src={Images.EductaionFess} />
            <div>Pay Education Fee {">"}</div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: themeColor.secondary, height: "355px" }}>
        <div className="text-white bodytext">
          <h1>Book & Buy on Paytm.</h1>
        </div>
        <div
          className="row text-white"
          style={{ backgroundColor: themeColor.secondary }}
        >
          <div
            className="col bodycard2"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="img" src={Images.MoviesTicket} />
            <div>Movies Tickets {">"}</div>
          </div>
          <div
            className="col bodycard2"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="img" src={Images.Flight} />
            <div>Flight Tickets {">"}</div>
          </div>
          <div
            className="col bodycard2"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="img" src={Images.Bus} />
            <div>Bus Tickets {">"}</div>
          </div>
          <div
            className="col bodycard2"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="img" src={Images.Train} />
            <div>Train Tickets {">"}</div>
          </div>
          <div
            className="col bodycard2"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="img" src={Images.Insurance} />
            <div>Buy Insurance {">"}</div>
          </div>
          <div
            className="col bodycard2"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="img" src={Images.Flight} />
            <div>International Flights {">"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
