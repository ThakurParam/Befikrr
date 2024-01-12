import { Box, Container, Grid } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#391718", color: "white", pb: 3 }}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={3}>
              <p style={{ fontFamily: "cursive" }}>
                <span style={{ fontFamily: "cursive", fontSize: "22px" }}>
                  B
                </span>
                efikrr{" "}
                <span style={{ fontFamily: "cursive", fontSize: "22px" }}>
                  S
                </span>
                aharanpur
              </p> 
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <p>Resources</p>
              <p style={{ opacity: "0.6" }}>Blogs</p>
              <p style={{ opacity: "0.6" }}>Support</p>
              <p style={{ opacity: "0.6" }}>Help Center</p>
              <p style={{ opacity: "0.6" }}>Jobs</p>
              <p style={{ opacity: "0.6" }}>Pricing</p>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <p>Others</p>
              <p style={{ opacity: "0.6" }}>Customers</p>
              <p style={{ opacity: "0.6" }}>Careers</p>
              <p style={{ opacity: "0.6" }}>Jobs</p>
              <p style={{ opacity: "0.6" }}>Contact</p>
              <p style={{ opacity: "0.6" }}>Products</p>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <p>Get Email Notifications </p>

              <p style={{ opacity: "0.6" }}>
                Generate outside the box thinking with possibility to target the
                low
              </p>
              <input
                style={{
                  height: "12%",
                  backgroundColor: "",
                  border: "none",
                  outline: "none",
                }}
                type="Email"
                placeholder="Place your email here..."
              ></input>
              <button style={{ height: "14%" }}>Submit</button>
            </Grid>
          </Grid>
          <Box sx={{ borderBottom: "2px solid white" }}>
            <p
              style={{
                opacity: "0.4",
              }}
            >
              Befikrr Saharanpur provides resources for anyone looking for a
              career in the construction and built environment sector. We
              showcase the many rewarding opportunities available and help
              people from all backgrounds to enter an exciting and growing
              industry which has a huge impact on the India’s housing, industry
              and infrastructure. The Go Construct website is self funded and
              operated by the Construction Industry Training Board - CITB, Sand
              Martin House, Bittern Way, Peterborough, PE2 8TY, registered as a
              charity in England and Wales (Reg No 264289) and in Scotland (Reg
              No SC044875)
            </p>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <p style={{ wordSpacing: "3px", opacity: "0.6" }}>
              2023 © <span>Befikrr Saharanpur</span>. All rights reserved.{" "}
              <span>Terms of Use</span>, Privacy Policy and DPA.
            </p>
          </Box>
        </Container>
      </Box>
    </>
  );
};
