import React from "react";
import paytmicon from "../Assets/paytmicon.avif";
import bodyimage from "../Assets/bodyimage.avif";
import bodyimage2 from "../Assets/bodyimage2.webp";
import Button from "react-bootstrap/Button";
import { themeColor, styles, url, Images } from "../utilis/constant";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Body() {
  return (
    <div className="mt-4">
      <div className="row">
        <div className="col p-5">
          <img
            width="88px"
            style={{ display: "flex", alignItems: "center" }}
            src={paytmicon}
            alt="image"
          />
          <h1 className="mt-3">India's Most-loved Payments App</h1>
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
                display: "flex",
                alignItems: "center",
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
      <div style={{ backgroundColor: themeColor.primary, height: "370px" }}>
        <div className="text-white bodytext">
          <h1>Recharge & Pay Bills on Paytm.</h1>
        </div>

        <div
          className="row  text-white"
          style={{ backgroundColor: themeColor.primary }}
        >
          <div
            className="col-2 bodycard"
            style={{
              flexDirection: "column",
              alignItems: "center",
              padding: "0px 50px",
            }}
          >
            <img className="img" src={Images.rechargeMobile} />
            <div className="text-white">Recharge Prepaid Mobile {">"}</div>
          </div>
          <div
            className="col bodycard"
            style={{
              flexDirection: "column",
              alignItems: "center",
              padding: "0px 50px",
            }}
          >
            <img className="img" src={Images.ElectricityBill} />
            <div>Pay Electricity Bill {">"}</div>
          </div>
          <div
            className="col bodycard"
            style={{
              flexDirection: "column",
              alignItems: "center",
              padding: "0px 50px",
            }}
          >
            <img className="img" src={Images.DthConn} />
            <div>Recharge DTH Connection {">"}</div>
          </div>
          <div
            className="col bodycard"
            style={{
              flexDirection: "column",
              alignItems: "center",
              padding: "0px 50px",
            }}
          >
            <img className="img" src={Images.GasCylinder} />
            <div>Book Gas Cylinder {">"}</div>
          </div>
          <div
            className="col bodycard"
            style={{
              flexDirection: "column",
              alignItems: "center",
              padding: "0px 50px",
            }}
          >
            <img className="img" src={Images.broadbandBill} />
            <div>Pay Broaband & Landline Bill {">"}</div>
          </div>
          <div
            className="col bodycard"
            style={{
              flexDirection: "column",
              alignItems: "center",
              padding: "0px 50px",
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
      <div
        style={{
          backgroundColor: "#F5F7FA",
          height: "15000px",
          padding: "80px 50px 80px 115px",
        }}
      >
        <div className="text2">
          <h1>Paytm Payment Instruments</h1>
        </div>
        <div className="mt-5" style={{ backgroundColor: "#ffff" }}>
          <div className="row mt-5">
            <div className="col mt-5 p-5">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img height="77px" src={Images.wallet} alt="walletimage" />
                <h5 className="p-4">Paytm Wallet</h5>
              </div>
              <div className="body-text3 m-3">
                <h1 style={{ display: "flex", alignItems: "center" }}>
                  The Fastest Way to Pay In-store & Online.
                </h1>
                <div className="body-text2">
                  Recharge & pay bills, book flights & movie tickets, open a
                  savings account, invest in stocks & mutual funds, and do a lot
                  more.
                </div>
                <div>
                  <Button
                    style={{
                      backgroundColor: styles.black,
                      hover: styles.white,
                      borderRadius: "50px",
                      height: "44px",
                      display: "flex",
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
            </div>
            <div className="col mt-5">
              <img width="528px" src={bodyimage2} />
            </div>
          </div>
        </div>

        {/* ---- */}
        <div className="mt-5" style={{ backgroundColor: "#ffff" }}>
          <div className="row mt-5">
            <div className="col mt-5 p-5">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img height="77px" src={Images.upi} alt="upiimage" />
                <h5 className="p-3">UPI Money Transfer</h5>
              </div>
              <div className="mt-3">
                <h1>Pay anyone directly from your bank account.</h1>
                <div className="body-text2">
                  Pay anyone, everywhere. Make contactless & secure payments
                  in-stores or online using Paytm Wallet or Directly from your
                  Bank Account. Plus, send & receive money from anyone.
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
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
            </div>
            <div className="col mt-5">
              <img width="528px" src={Images.upiTransaction} />
            </div>
          </div>
        </div>

        {/* --- */}
        <div className="row creditcard">
          <div
            className="ps-5"
            style={{
              marginTop: "50px",
              height: "600px",
              width: "550px",
              backgroundColor: "#ffff",
            }}
            // onClick={(window.location.href = url.hdfcCreditCard)}
          >
            <img
              style={{
                width: "auto",
                height: "77px",
                display: "flex",
              }}
              src={Images.paytmHdfc}
              alt="Hdfc Credit card"
            />
            <div style={{ display: "flex", alignContent: "center" }}>
              <h1 className="mt-4">Unlimited Cashback Every Time</h1>
            </div>
            <div>
              <h5>
                Paytm HDFC Bank Select Credit Card. A card with assured Cashback
                and incredible offers.
              </h5>
            </div>
            <div>
              <span>
                *Paytm Payments Bank does not provide any loan or credit card on
                the Paytm App.
              </span>{" "}
              <a
                style={{
                  textDecoration: "none",
                  color: "#00baf2",
                  cursor: "pointer",
                }}
                href={url.loanCreditCard}
              >
                Know More
              </a>
            </div>
            <div>
              <img style={{ height: "295px" }} src={Images.crediCard1} />
            </div>
          </div>
          <div
            className="ps-5"
            style={{
              marginTop: "50px",
              height: "600px",
              width: "550px",
              backgroundColor: "#ffff",
            }}
          >
            <img
              style={{
                display: "flex",
                width: "auto",
                height: "20px",
                marginTop: "50px",
              }}
              src={Images.paytmSbi}
              alt="Sbi Credi card"
            />
            <div style={{ display: "flex", alignContent: "center" }}>
              <h1 className="mt-4">India’s Most Sincere Credit Card</h1>
            </div>
            <div>
              <h5>
                Paytm SBI Card SELECT - With Intelligent Features & Great
                Rewards that Never Expire
              </h5>
            </div>
            <div>
              <span>
                *Paytm Payments Bank does not provide any loan or credit card on
                the Paytm App.
              </span>{" "}
              <a
                style={{
                  textDecoration: "none",
                  color: "#00baf2",
                  cursor: "pointer",
                }}
                href={url.loanCreditCard}
              >
                Know More
              </a>
            </div>
            <div>
              <img style={{ height: "295px" }} src={Images.crediCard2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
