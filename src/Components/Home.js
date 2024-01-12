import { Box, Container, Grid } from "@mui/material";
import React from "react";
import site from "../Images/Site.avif";
import { Footer } from "../Assets/Footer";

export const Home = () => {
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <p style={{ fontSize: "25px", fontWeight: 600 }}>
            Time to get technical! We’re taking a closer look at everything you
            need to know about being on a construction site, including health
            and safety concerns and some of the workers you might find on a job.{" "}
          </p>
          <Grid container spacing={2} sx={{ pt: 2 }}>
            <Grid item xs={12} md={6} lg={6}>
              <p
                style={{
                  marginTop: "0px",
                  fontSize: "50px",
                  fontWeight: "700",
                  fontFamily: "serif",
                }}
              >
                What is a Construction Site ?
              </p>
              <Box sx={{ width: "80%" }}>
                <p style={{ fontWeight: "600", marginTop: "50px" }}>
                  A construction site is an area or piece of land where
                  construction work is taking place.
                </p>
                <p style={{ fontWeight: "600", marginTop: "30px" }}>
                  Sometimes construction sites are referred to as ‘building
                  sites’. This usually implies that buildings or houses are
                  being constructed, whereas ‘construction site’ covers a wider
                  scope of work. This could refer to anything from a house
                  extension to a landscaping project, road or bridge
                  construction or a huge engineering project, such as the
                  Crossrail development or the creation of a new power station.
                </p>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={5}
              sx={{ overflow: "hidden", borderRadius: "20px" }}
              data-aos="flip-up"
            >
              <img src={site} className="imagesite"></img>
            </Grid>
          </Grid>
          <p style={{ fontWeight: "600" }}>
            Land is generally classed as a ‘construction site’ when it’s handed
            over to contractors to begin work. Across a construction site,
            multiple activities often take place at different times, under the
            same plan.
          </p>
        </Container>
        <Box
          sx={{
            mt: 10,
            height: "20px",
            bgcolor: "#391718",
            transformOrigin: "left",
            transform: "skewY(1deg)",
          }}
        ></Box>
        <Box
          sx={{
            mt: 1,
            height: "20px",
            bgcolor: "#b0291c",
            transformOrigin: "left",
            transform: "skewX(5deg)",
          }}
        ></Box>
        <Box sx={{ bgcolor: "#2f3535" }}></Box>
        <Container maxWidth="xl">
          <h1>Health and safety concerns onsite </h1>
          <p>
            Construction industry sites are potentially dangerous environments.
            To minimise risks, it’s important to be aware of health and safety
            issues and put measures in place to reduce their impact.{" "}
          </p>
          <p>
            Some of the main health and safety concerns on a construction site
            include:
          </p>
          <h2>Movement of machinery and materials </h2>
          <p>
            Construction sites are busy places, where heavy machinery is often
            used to move materials or lift loads. Traffic plans and barriers
            separating plant operations from other important works are key to
            site safety.{" "}
          </p>
          <h2>Trip hazards </h2>
          <p>
            Uneven ground can present the risk of trips, slips and falls during
            construction works. Materials left lying around can create a
            dangerous obstacle course, so equipment should be monitored and safe
            zones cordoned off to minimise hazards.{" "}
          </p>
          <h2>Harmful materials and substances</h2>
          <p>
            Asbestos and lead paint can be harmful to construction workers, as
            can chemicals, paints and the fumes created by these. Asbestos needs
            to be removed and disposed of in a safe way. Appropriate PPE should
            be worn to prevent dust and toxic substances from affecting skin,
            eyes and airways.
          </p>
          <h2>Working at height </h2>
          <p>
            Working at height is often part and parcel of building construction.
            Falling tools and debris can also increase risks. All staff on site
            should be provided with training to prevent accidents, and
            scaffolding and towers need to be made secure.{" "}
          </p>
          <h2>Manual handling and physical strain </h2>
          <p>
            Training on lifting and moving heavy items, with or without
            mechanical lifting tools, will help to minimise accidents that arise
            from poor manual handling. To reduce physical strain resulting from
            the use of vibrating power tools and groundworking equipment, safety
            equipment should be worn, tools routinely maintained, and regular
            breaks taken.{" "}
          </p>
          <h2>Noise</h2>
          <p>
            Repetitive sounds from machinery and tools can affect hearing and
            may prevent workers from communicating efficiently, resulting in
            accidents. Ear protection and adequate training can help to reduce
            strain and injury.{" "}
          </p>
          <h2>Electricity </h2>
          <p>
            Using power tools and being in close proximity to overhead cables
            and power lines puts construction workers at risk of electrocution.
            All work around power lines should be thoroughly risk assessed, and
            only qualified electricians should carry out electrical work.{" "}
          </p>
          <h2>Risk of collapse </h2>
          <p>
            Any incomplete construction work presents risks of collapse. Good
            preparation and precautionary measures can help to prevent injuries.
            Demolitions should only be undertaken by trained operatives.{" "}
          </p>
          <Grid containerspacing={2}>
            <Grid item xs={12} md={6} lg={5}>
              {/* <img src={}></img> */}
            </Grid>
            <Grid item xs={12} md={6} lg={6}></Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
