import React from "react";
import paytmicon from "../Assets/paytmicon.avif";
import bodyimage from "../Assets/bodyimage.avif";
import bodyimage2 from "../Assets/bodyimage2.webp";
import bodyimage3 from "../Assets/bodyimage3.webp";
import bodyimage4 from "../Assets/bodyimage4.webp";
import bodyimage5 from "../Assets/bodyimage5.webp";
import bodyimage6 from "../Assets/bodyimage6.webp";
import bodyimage7 from "../Assets/bodyimage7.avif";
import bodyimage8 from "../Assets/bodyimage8.webp";
import Button from "react-bootstrap/Button";
import { themeColor, styles, url, Images } from "../utilis/constant";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
          height: "2100px",
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
      <div>
        <div>
          <div className="text2 ps-5">
            <h1>Financial Services by Paytm</h1>
          </div>
          <div className="mt-5" style={{ backgroundColor: "#ffff" }}>
            <div className="row">
              <div className="col p-5">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    width="212px"
                    src={Images.paytmPaymentBank}
                    alt="PaytmPaymentbank"
                  />
                </div>
                <div className="body-text3 m-3">
                  <h1 style={{ display: "flex", alignItems: "center" }}>
                    India's most sincere bank.
                  </h1>
                  <div className="body-text2">
                    Paytm Payments Bank offers secure, transparent and risk-free
                    banking at your fingertips. With instant account opening,
                    virtual debit card and zero balance requirements, experience
                    the future of banking today.
                  </div>
                  <div>
                    <Button
                      style={{
                        backgroundColor: themeColor.secondary,
                        hover: styles.white,
                        borderRadius: "50px",
                        height: "44px",
                        display: "flex",
                      }}
                      onClick={() => window.open(url.paytmBank)}
                    >
                      <h5>Learn More {">"}</h5>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col mt-5">
                <img width="452px" src={bodyimage3} alt="Paytm Bank " />
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-5"
          style={{
            backgroundImage: `url(${Images.grayPink})`,
            height: "500px",
            backgroundSize: "100%",
          }}
        >
          <div className="row">
            <div className="col mt-5 ps-5">
              <img width="452px" src={bodyimage4} alt="Paytm Money " />
            </div>
            <div className="col p-5">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  height="54px"
                  width="auto"
                  src={Images.paytmMoney}
                  alt="PaytmPaymentbank"
                />
              </div>
              <div className="body-text3 m-3">
                <h1 style={{ display: "flex", alignItems: "center" }}>
                  Build Long-term Wealth & Achieve your Goals.
                </h1>
                <div className="body-text2">
                  Investing on Paytm Money is transparent, low-cost and
                  commission-free. Buy stocks & mutual funds that can help you
                  create wealth & realise your dreams.
                </div>
                <div>
                  <Button
                    style={{
                      backgroundColor: themeColor.secondary,
                      hover: styles.white,
                      borderRadius: "50px",
                      height: "44px",
                      display: "flex",
                    }}
                    onClick={() => window.open(url.paytmMoney)}
                  >
                    <h5>Learn More {">"}</h5>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: "500px", backgroundColor: "#0000" }}>
          <div>
            <div className="mt-5" style={{ backgroundColor: "#ffff" }}>
              <div className="row">
                <div className="col p-5">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      width="212px"
                      src={Images.paytmInsurance}
                      alt="PaytmPaymentbank"
                    />
                  </div>
                  <div className="body-text3 m-3">
                    <h1 style={{ display: "flex", alignItems: "center" }}>
                      Insurance made easy.
                    </h1>
                    <div className="body-text2">
                      Buying insurance does not have to be tedious,
                      time-consuming & confusing. Paytm Insurance removes the
                      worry of getting insured by making it simple, convenient &
                      easy-to-understand.
                    </div>
                    <div>
                      <Button
                        style={{
                          backgroundColor: themeColor.secondary,
                          hover: styles.white,
                          borderRadius: "50px",
                          height: "44px",
                          display: "flex",
                        }}
                        onClick={() => window.open(url.paytmInsurance)}
                      >
                        <h5>Learn More {">"}</h5>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col mt-5">
                  <img width="452px" src={bodyimage5} alt="Paytm Bank " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-5"
          style={{
            backgroundColor: "#F5F7FA",
            height: "600px",
          }}
        >
          <div className="row">
            <div className="col mt-5">
              <img width="452px" src={bodyimage6} alt="Paytm Bank " />
            </div>
            <div className="col p-5">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  width="212px"
                  src={Images.PersonalLoan}
                  alt="Paytm Personal Loan"
                />
              </div>
              <div className="body-text3 m-3">
                <h1 style={{ display: "flex", alignItems: "center" }}>
                  Get a Personal Loan in 2 Minutes..
                </h1>
                <div className="body-text2">
                  Paytm offers India's quickest multi-purpose, hassle-free loan.
                  It is 100% digital, transparent and paperless.
                </div>
                <div>
                  <Button
                    style={{
                      backgroundColor: themeColor.secondary,
                      hover: styles.white,
                      borderRadius: "50px",
                      height: "44px",
                      display: "flex",
                    }}
                    onClick={() => window.open(url.paytmPersonalLoan)}
                  >
                    <h5>Learn More {">"}</h5>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-5"
          style={{
            backgroundColor: "#ffff",
            height: "1400px",
            padding: "80px 50px 80px 115px",
          }}
        >
          <div className="text2">
            <h1>Business Services by Paytm</h1>
          </div>
          <div className="mt-5" style={{ backgroundColor: "#F5F7FA" }}>
            <div className="row mt-5">
              <div className="col mt-5 p-5">
                <div className="body-text3 m-3">
                  <h1 style={{ display: "flex", alignItems: "center" }}>
                    Accept payments online with ease
                  </h1>
                  <div className="body-text2">
                    Grow your business with the payment gateway that powers
                    India’s largest brands and even the Paytm App
                  </div>
                  <div>
                    <Button
                      style={{
                        backgroundColor: themeColor.secondary,
                        hover: styles.white,
                        borderRadius: "50px",
                        height: "44px",
                        display: "flex",
                      }}
                      onClick={() => window.open(url.paymentGateway)}
                    >
                      <h5>Learn More {">"}</h5>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col mt-5">
                <img width="528px" src={bodyimage7} />
              </div>
            </div>
          </div>

          <div className="mt-5" style={{ backgroundColor: "#F5F7FA" }}>
            <div className="row mt-5">
              <div className="col mt-5 p-5">
                <div className="mt-3">
                  <h1>In-shop payments powered by Paytm.</h1>
                  <div className="body-text2">
                    Millions of small & big businesses use Paytm to accept
                    payments anywhere any time with a wide range of solutions
                    for all kind of merchants
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Button
                      style={{
                        backgroundColor: themeColor.secondary,
                        hover: styles.white,
                        borderRadius: "50px",
                        height: "44px",
                        display: "flex",
                      }}
                      onClick={() => window.open(url.merchant)}
                    >
                      <h5>Learn More {">"}</h5>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col mt-5">
                <img width="528px" src={bodyimage8} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-5"
          style={{
            backgroundColor: "#ffff",
            height: "700px",
            padding: "80px 50px 80px 115px",
          }}
        >
          <div className="text2">
            <h1>Business Tools to help your business grow</h1>
          </div>
          <div className="row mt-5">
            <div
              className="col"
              style={{
                display: "flex",
                msFlexDirection: "row",
                width: "6px",
                height: "6px",
              }}
            >
              <div
                className=""
                style={{
                  width: "21.5%",
                  marginRight: "70px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  style={{
                    overflowClipmargin: "content-box",
                    overflow: "clip",
                  }}
                  src={Images.dashBoard}
                />
                <div className="mt-4">
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "500px",
                      lineHeight: "30px",
                    }}
                  >
                    POS Billing Software
                  </div>
                </div>
                <div className="mt-4">
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "500px",
                      lineHeight: "30px",
                    }}
                  >
                    Say Hello to Smart Retail Business Management
                  </div>
                </div>
                <div className="mt-3">
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                      cursor: "pointer",
                    }}
                    href={url.billing}
                  >
                    <span>Learn More</span>
                  </a>
                </div>
              </div>

              <div
                className=""
                style={{
                  width: "21.5%",
                  marginRight: "70px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  style={{
                    overflowClipmargin: "content-box",
                    overflow: "clip",
                  }}
                  src={Images.PytmBussiness}
                />
                <div className="mt-4">
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "500px",
                      lineHeight: "30px",
                    }}
                  >
                    Paytm for Business App
                  </div>
                </div>
                <div className="mt-4">
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "500px",
                      lineHeight: "30px",
                    }}
                  >
                    Everything you need to manage your business on your phone
                  </div>
                </div>
                <div className="mt-3">
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                      cursor: "pointer",
                    }}
                    href={url.BussinessApp}
                  >
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
              <div
                className=""
                style={{
                  width: "21.5%",
                  marginRight: "70px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  style={{
                    overflowClipmargin: "content-box",
                    overflow: "clip",
                  }}
                  src={Images.paytmUpi}
                />

                <div className="mt-4">
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "500px",
                      lineHeight: "30px",
                    }}
                  >
                    Advertise on Paytm
                  </div>
                </div>
                <div className="mt-4">
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "500px",
                      lineHeight: "30px",
                    }}
                  >
                    Grow your business by advertising on India’s largest mobile
                    business
                  </div>
                </div>
                <div className="mt-3">
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                      cursor: "pointer",
                    }}
                    href={url.paytmAds}
                  >
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
              <div
                className=""
                style={{
                  width: "21.5%",
                  marginRight: "70px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  style={{
                    overflowClipmargin: "content-box",
                    overflow: "clip",
                  }}
                  src={Images.Transaction}
                />
                <div className="mt-4">
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "500px",
                      lineHeight: "30px",
                    }}
                  >
                    Business Khata
                  </div>
                </div>
                <div className="mt-4">
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "500px",
                      lineHeight: "30px",
                    }}
                  >
                    Managing Khata made easy
                  </div>
                </div>
                <div className="mt-3">
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                      cursor: "pointer",
                    }}
                    href={url.Bussiness}
                  >
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#ffff",
            height: "350px",
            padding: "80px 50px 80px 115px",
          }}
        >
          {/* <div> */}
          <div
            className="row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              style={{
                width: "200px",
                marginRight: "40px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                style={{
                  overflowClipmargin: "content-box",
                  overflow: "clip",
                }}
                src={Images.paytmMoney2}
              />
              <div className="mt-4">
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "500px",
                    lineHeight: "30px",
                  }}
                >
                  Get started on wealth creation journey with Zero brokerage fee
                  & no hidden charges.
                </div>
              </div>

              <div className="mt-3">
                <a
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    cursor: "pointer",
                    color: themeColor.primary,
                  }}
                  href={url.stock}
                >
                  <span>Learn More</span>
                </a>
              </div>
            </div>

            <div
              className="mt-3"
              style={{
                padding: "5px 8px",
                height: "230px",
                width: "150px",
                background: "#00baf2",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <img
                style={{ width: "135px", height: "150px" }}
                src={Images.Stock}
              />
              <div className="text-white mt-3">Invest in Stocks</div>
            </div>
            <div
              className="mt-3"
              style={{
                padding: "5px 8px",
                height: "230px",
                width: "150px",
                background: "#00baf2",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <img
                style={{ width: "135px", height: "150px" }}
                src={Images.Ipo}
              />
              <div className="text-white mt-3">Apply for IPO</div>
            </div>
            <div
              className="mt-3"
              style={{
                padding: "5px 8px",
                height: "230px",
                width: "150px",
                background: "#00baf2",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <img
                style={{ width: "135px", height: "150px" }}
                src={Images.ETF}
              />
              <div className="text-white mt-3">Invest in ETF's</div>
            </div>
            <div
              className="mt-3"
              style={{
                padding: "5px 8px",
                height: "230px",
                width: "150px",
                background: "#00baf2",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <img
                style={{ width: "135px", height: "150px" }}
                src={Images.Gold}
              />
              <div className="text-white mt-3">Buy Gold</div>
            </div>
            <div
              className="mt-3"
              style={{
                padding: "5px 8px",
                height: "230px",
                width: "150px",
                background: "#00baf2",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <img
                style={{ width: "135px", height: "150px" }}
                src={Images.MutualFund}
              />
              <div className="text-white mt-3">Invest in Mutual Fund</div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#ffff",
            height: "400px",
            padding: "80px 50px 80px 115px",
          }}
        >
          {/* <div> */}
          <div
            className="row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              style={{
                width: "200px",
                marginRight: "40px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                style={{
                  overflowClipmargin: "content-box",
                  overflow: "clip",
                }}
                src={Images.PaytmTravel2}
              />
              <div className="mt-4">
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "500px",
                    lineHeight: "30px",
                  }}
                >
                  Best travel solutions with quick ticket bookings, great offers
                  and easy refunds
                </div>
              </div>

              <div className="mt-3">
                <a
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    cursor: "pointer",
                    color: themeColor.primary,
                  }}
                  href={url.Flight}
                >
                  <span>Learn More</span>
                </a>
              </div>
            </div>

            <div
              className="mt-3"
              style={{
                padding: "5px 8px",
                height: "230px",
                width: "150px",
                background: "#00baf2",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <img
                style={{ width: "72px", height: "72px" }}
                src={Images.Flight}
              />
              <div className="text-white mt-3">
                Flat 14% Cashback With Code WELCOMEFLIGHT
              </div>
            </div>
            <div
              className="mt-3"
              style={{
                padding: "5px 8px",
                height: "230px",
                width: "150px",
                background: "#00baf2",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <img
                style={{ width: "72px", height: "72px" }}
                src={Images.Refund}
              />
              <div className="text-white mt-3">
                100% Refund With Paytm's Cancellation Protect
              </div>
            </div>
            <div
              className="mt-3"
              style={{
                padding: "5px 8px",
                height: "230px",
                width: "150px",
                background: "#00baf2",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <img style={{ width: "72px", height: "72px" }} src={Images.Bus} />
              <div className="text-white mt-3">
                Flat 10% Cashback With Code HAPPYBUS
              </div>
            </div>
            <div
              className="mt-3"
              style={{
                padding: "5px 8px",
                height: "230px",
                width: "150px",
                background: "#00baf2",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <img
                style={{ width: "72px", height: "72px" }}
                src={Images.sanitized}
              />
              <div className="text-white mt-3">
                Sanitised Bus Options With TravelSafe+
              </div>
            </div>
            <div
              className="mt-3"
              style={{
                padding: "5px 8px",
                height: "230px",
                width: "150px",
                background: "#00baf2",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <img
                style={{ width: "72px", height: "72px" }}
                src={Images.Train}
              />
              <div className="text-white mt-3">
                Hassle Free Train Ticket Bookings
              </div>
            </div>
            <div
              className="mt-3"
              style={{
                padding: "5px 8px",
                height: "230px",
                width: "150px",
                background: "#00baf2",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <img
                style={{ width: "72px", height: "72px" }}
                src={Images.PnrStatus}
              />
              <div className="text-white mt-3">
                PNR Status Check In Few Simple Clicks
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
