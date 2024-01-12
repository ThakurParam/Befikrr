import { Box, Container } from "@mui/material";
import React from "react";
import OutboxOutlinedIcon from "@mui/icons-material/OutboxOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export const Signup = () => {
  return (
    <>
      <Box>
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
        <Container maxWidth="xs" sx={{ padding: "5px" }}>
          <p
            style={{
              textAlign: "center",
              fontSize: "35px",
              fontFamily: "monospace",
              fontWeight: "bolder",
              marginTop: "15px",
            }}
          >
            Sign Up
          </p>
          <Box>
            <Box sx={{ textAlign: "center", mt: 5 }}>
              <p style={{ opacity: 0.6 }}>
                Fill your credentials to explore us .....
              </p>
            </Box>
            {/* <form action="process_form.php" method="post"> */}
            <Box sx={{ mt: 2 }}>
              <label style={{ fontSize: "12px", fontWeight: 600 }} for="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                style={{
                  width: "100%",
                  height: "28px",
                  border: "none",
                  // outline: "none",
                  borderRadius: "5px",
                  marginTop: "7px",
                  opacity: 0.6,
                  marginTop: "8px",
                }}
                required
              />
            </Box>
            <Box sx={{ mt: 1 }}>
              <label style={{ fontSize: "12px", fontWeight: 600 }} for="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                style={{
                  width: "100%",
                  height: "28px",
                  border: "none",
                  // outline: "none",
                  borderRadius: "5px",
                  marginTop: "7px",
                  opacity: 0.6,
                  marginTop: "10px",
                }}
                required
              />{" "}
            </Box>
            <Box sx={{ mt: 1 }}>
              <label
                style={{ fontSize: "12px", fontWeight: 600 }}
                for="password"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                style={{
                  width: "100%",
                  height: "28px",
                  border: "none",
                  // outline: "none",
                  borderRadius: "5px",
                  marginTop: "7px",
                  opacity: 0.6,
                  marginTop: "10px",
                }}
                required
              />
            </Box>
            <Box sx={{ mt: 1 }}>
              <label style={{ fontSize: "12px", fontWeight: 600 }}>
                Gender:
              </label>
              <label for="male" style={{ marginLeft: "10px" }}>
                Male
              </label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                style={{ marginLeft: "10px" }}
              />
              <label for="female" style={{ marginLeft: "10px" }}>
                Female
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                style={{ marginLeft: "10px", marginTop: "5px" }}
              />
            </Box>
            {/* <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              value="yes"
            /> */}
            {/* <label for="subscribe">Subscribe to newsletter</label> */}
            <br></br>
            <Box sx={{ mt: 1 }}>
              <label
                style={{ fontSize: "12px", fontWeight: 600 }}
                for="message"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
                style={{
                  width: "100%",
                  height: "50px",
                  border: "none",
                  // outline: "none",
                  borderRadius: "5px",
                  marginTop: "7px",
                  opacity: 0.6,
                  marginTop: "10px",
                }}
                required
              ></textarea>
            </Box>{" "}
            {/* </form> */}
          </Box>
          <Box sx={{ mt: 3 }}>
            <button
              style={{
                padding: "5px",
                fontSize: "15px",
                fontWeight: 500,
                paddingLeft: "15px",
                paddingRight: "15px",
                backgroundColor: "blue",
                border: "none",
                color: "white",
                borderRadius: "8px",
                marginLeft: "20px",
              }}
            >
              Submit
              <ArrowForwardIcon sx={{ ml: 1 }} />
            </button>
            <button
              style={{
                padding: "5px",
                fontSize: "15px",
                fontWeight: 500,
                paddingLeft: "15px",
                paddingRight: "15px",
                backgroundColor: "green",
                border: "none",
                color: "white",
                borderRadius: "8px",
                marginLeft: "20px",
              }}
            >
              Save Draft
              <OutboxOutlinedIcon sx={{ ml: 1 }} />
            </button>
          </Box>
        </Container>
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
