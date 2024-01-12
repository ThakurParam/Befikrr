import { Box, Container } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OutboxOutlinedIcon from "@mui/icons-material/OutboxOutlined";

export const Login = () => {
  return (
    <>
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
        <p style={{ fontFamily: "cursive" }}>
          <span style={{ fontFamily: "cursive", fontSize: "22px" }}>B</span>
          efikrr{" "}
          <span style={{ fontFamily: "cursive", fontSize: "22px" }}>S</span>
          aharanpur
        </p>
      </Box>
      <p
        style={{
          textAlign: "center",
          fontSize: "35px",
          fontFamily: "monospace",
          fontWeight: "bolder",
          marginTop: "15px",
        }}
      >
        Log In
      </p>
      <p
        style={{
          textAlign: "center",
          opacity: 0.6,
          fontSize: "12px",
          marginTop: "30px",
        }}
      >
        Please fill your Credentials here to Log In......
      </p>
      <Box sx={{}}>
        <Container maxWidth="xs" sx={{ p: 2 }}>
          <Box
            sx={{
              // bgcolor: "wheat",
              p: 2,
            }}
          >
            <label
              for="Email or Phone Number"
              style={{ fontSize: "12px", fontWeight: 600 }}
            >
              Email or Phone Number :
            </label>
            <input
              style={{
                width: "100%",
                height: "28px",
                border: "none",
                outline: "none",
                borderRadius: "5px",
                marginTop: "7px",
                opacity: 0.6,
              }}
              type="Email,Phone NUmber"
              placeholder="Place your Phone number or Email here...."
            ></input>
            <Box sx={{ mt: 3 }}>
              <label
                for="Password:"
                style={{ fontSize: "12px", fontWeight: 600 }}
              >
                Password :
              </label>
              <input
                style={{
                  width: "100%",
                  height: "28px",
                  border: "none",
                  outline: "none",
                  borderRadius: "5px",
                  marginTop: "10px",
                  opacity: 0.6,
                }}
                type="password"
                id="password"
                name="password"
                placeholder="Place your Password here...."
                required
              ></input>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <button
              style={{
                padding: "5px",
                fontSize: "15px",
                fontWeight: 500,
                paddingLeft: "15px",
                paddingRight: "15px",
                backgroundColor: "#7E3ED9",
                border: "none",
                color: "white",
                borderRadius: "8px",
              }}
            >
              Let's go..
              <ArrowForwardIcon sx={{ ml: 1 }} />
            </button>
          </Box>
        </Container>
      </Box>

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
    </>
  );
};
