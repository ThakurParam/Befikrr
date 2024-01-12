import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { SwiperWelcome } from "../Modules/SwiperWelcome";
import { Footer } from "../Assets/Footer";
import shri from "../Images/shri.png";

export const Welcome = () => {
  const handleAlert = () => {
    alert("Please Log In to Continue!");
  };
  return (
    <>
      <Box
      // sx={{ textAlign: "center" }}
      >
        <Box
          sx={{
            bgcolor: "#391718",
            //  textAlign: "end",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          <div style={{ wordSpacing: "6px" }}>
            <p style={{ fontFamily: "cursive" }}>
              <span style={{ fontFamily: "cursive", fontSize: "22px" }}>B</span>
              efikrr{" "}
              <span style={{ fontFamily: "cursive", fontSize: "22px" }}>S</span>
              aharanpur
            </p>
          </div>
          <div>
            <button
              style={{
                textAlign: "end",
                marginRight: "20px",
                padding: "5px",
                // backgroundColor: "#4992BF",

                border: "none",
                borderRadius: "5px",
                fontSize: "15px",
                background: "none",
                color: "white",
              }}
            >
              Log In
            </button>
            <button
              style={{
                fontSize: "15px",
                padding: "5px",
                borderRadius: "5px",
                border: "none",
                outline: "none",
                background: "none",
                color: "white",
              }}
            >
              Sign Up
            </button>
          </div>
        </Box>
        <Box sx={{ color: "black" }}>
          <Container
            maxWidth="xl"
            sx={{ justifyContent: "space-around", pb: 3, pt: 5 }}
          >
            <Grid container spacing={2} sx={{ justifyContent: "space-evenly" }}>
              <Grid item xs={12} md={6} lg={6}>
                <h1
                  style={{
                    fontSize: "70px",
                    fontWeight: 700,
                    letterSpacing: "5px",
                    fontFamily: "serif",
                    // fontStyle: "italic",
                    // marginLeft: "-70px",
                  }}
                  data-aos="flip-left"
                >
                  W
                  <span
                    style={{
                      fontSize: "50px",
                      fontWeight: 700,
                      letterSpacing: "5px",
                      fontFamily: "cursive",
                      fontStyle: "italic",
                      textShadow: "8px 5px 7px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    elcome
                  </span>
                </h1>
                <p
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    textAlign: "center",
                    textShadow: "8px 5px 7px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  to
                </p>
                <h1
                  style={{
                    fontSize: "35px",
                    wordSpacing: "10px",
                    fontFamily: "cursive",
                    textAlign: "end",
                    marginTop: "30px",
                    textShadow: "8px 5px 7px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <span style={{ fontSize: "55px", fontFamily: "serif" }}>
                    S
                  </span>
                  hri{" "}
                  <span style={{ fontSize: "55PX", fontFamily: "serif" }}>
                    C
                  </span>
                  onstructions
                </h1>
                {/* <SwiperWelcome /> */}
              </Grid>
              <Grid item xs={12} md={5} lg={3}>
                <img
                  src={shri}
                  alt="shrii"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    backgroundColor: "black",

                    animation: "rotateXY 10s linear infinite",
                  }}
                  className="rotateshri"
                ></img>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <p
          style={{
            marginTop: "25px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "5px",
            opacity: "0.6",
          }}
        >
          Click to Continue
        </p>
        <Box sx={{ textAlign: "center", bgcolor: "#CDC678", p: 1 }}>
          <button
            style={{
              padding: "7px",
              fontSize: "20px",
              fontWeight: 600,
              borderRadius: "5px",
              color: "",
              // border: "none",
              fontFamily: "cursive",
              background: "none",
              backgroundColor: "#CDC678",
            }}
            onClick={handleAlert}
          >
            Explore More ...
          </button>
        </Box>
        <Container maxWidth="md" sx={{ mt: 10 }}>
          <SwiperWelcome />
        </Container>
        <p
          style={{
            textAlign: "center",
            fontSize: 70,
            fontWeight: 700,
            textShadow: "8px 5px 7px rgba(0, 0, 0, 0.5)",
          }}
        >
          We Build your Dreams....
        </p>
        <Box
          sx={{
            bgcolor: "#391718",
            p: 2,
            textAlign: "center",
            color: "white",
            mt: 20,
          }}
        >
          <Container maxWidth="lg">
            <p style={{ wordSpacing: "3px", opacity: "0.6", fontSize: "10px" }}>
              2023 © <span>Befikrr Saharanpur</span>. All rights reserved.{" "}
              <span>Terms of Use</span>, Privacy Policy and DPA.
            </p>
          </Container>
        </Box>
      </Box>
    </>
  );
};
