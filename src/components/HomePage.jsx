import { Box, Button, Typography, Container, Grid, Slide } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import homeImg from "../assets/image/home.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";
import bg from "../assets/image/bg.jpg";
import back from "../assets/image/back.png";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Zoom from "@mui/material/Zoom";
function HomePage() {
  const style = {
    container: {
      maxWidth: { xl: "900px" },
    },
    container1: {
      maxWidth: { xl: "900px" },
      padding: "0px",
    },
    bg: {
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${bg.src})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    Box: {
      backgroundColor: "white",
      borderRadius: "1rem",
      padding: "2rem",
    },
    Box1: {
      backgroundColor: "white",
      borderRadius: "1rem",
    },
    mainHead: {
      color: "white",
      fontSize: "3rem",
      fontWeight: 900,
    },
    textBox: {
      paddingY: "2rem",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    mainSlogan: {
      color: "white",
      fontSize: "1.3rem",
      fontWeight: 600,
    },
    mainSlogan1: {
      color: "white",
      fontSize: "2rem",
      fontWeight: 600,
      marginY: "2rem",
    },
    textBoxImg: {
      paddingTop: "15rem",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    question: {
      color: "#082857",
      marginY: "1rem",
      width: "100%",
      fontWeight: 700,
    },
    answers: {
      marginY: "2rem",
    },
    buttonWithAnswer: {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
      marginY: "1rem",
      color: "#082857",
    },
    points: {
      height: "40px",
      width: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      cursor: "pointer",
      borderRadius: "50%",
      fontSize: "1.1rem",
    },
    pointsAns: {
      fontSize: "1.1rem",
      color: "#082857",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
    imgBox: {
      borderRadius: "1rem",
    },
    imgBox: {
      height: "100%",
    },
    QuestionBox: {
      width: "100%",
      display: "flex",
      flexDirection: "column",

      marginBottom: "1.5rem",
    },
    QuestionBox1: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1.5rem",
      marginY: "1.5rem",
    },
    pointBo: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
      //   justifyContent: "end",
      paddingX: "2rem",
    },
    content: {
      position: "absolute",
      zIndex: 99,
      display: "flex",
      flexDirection: "column",
      alignItems: "end",
      top: 0,
      right: 0,
      justifyContent: "space-between",
      height: "100%",
    },
    heading: {
      color: "white",
      fontWeight: 700,
      paddingRight: "3rem",
      paddingTop: "2rem",
    },
    btn: {
      backgroundColor: "#082958",
      fontWeight: 700,
      color: "white",
      marginBottom: "2rem",
      fontSize: "1rem",
      marginRight: "3rem",
      borderRadius: "50px",
      paddingY: "1rem",
      paddingX: "3rem",
      ":hover": {
        backgroundColor: "#082958",
        color: "white",
        marginBottom: "2rem",
        fontSize: "1rem",
        marginRight: "3rem",
        fontWeight: 700,
        transition: "all ease 0.5s",
      },
    },
    formContainer: {
      width: "100%",
    },
    formButton: {
      backgroundColor: "#082857",
      paddingY: "1rem",
      paddingX: "5rem",
      fontSize: "1.2rem",
      marginY: "1.5rem",
      textAlign: "center",
      color: "white",
      borderRadius: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      marginX: "15rem",
      border: "1px solid #082857",
      ":hover": {
        backgroundColor: "white",

        fontSize: "1.2rem",
        marginY: "1.5rem",
        textAlign: "center",
        color: "#082857",
        borderRadius: "50px",
        border: "1px solid #082857",
      },
    },
    selectQuestion: {
      marginY: "1rem",
      fontWeight: 600,
      paddingLeft: "2rem",
    },
  };

  const [slide, setSlide] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSlide(true);
    }, 500);
  }, []);
  return (
    <>
      <Box sx={style.bg}>
        <Typography
          variant="h6"
          sx={{ color: "grey", position: "absolute", top: 20, right: 20 }}
        >
          All the rights reserved to Dr. Shlomi Gavish DOM, AP
        </Typography>
        <Box sx={style.textBoxImg}>
          <Zoom in={slide} mountOnEnter unmountOnExit>
            <Container sx={style.container1}>
              <Grid
                container
                sx={[
                  style.Box1,
                  { boxShadow: "7px 6px 13px -4px rgba(0,0,0,0.75)" },
                ]}
              >
                <Grid item lg={12} sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={back}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      alt="oops"
                    />
                  </Box>
                  <Box sx={style.content}>
                    <Typography variant="h4" sx={style.heading}></Typography>
                    <Link
                      href="callenge-question"
                      style={{ textDecoration: "none" }}
                      onClick={() => setSlide(false)}
                    >
                      <Button variant="outlined" sx={style.btn}>
                        LETS STARTED
                        <TrendingFlatIcon
                          sx={{
                            color: "white",
                            backgroundColor: "#082958",
                            borderRadius: "50px",
                          }}
                        />
                      </Button>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Zoom>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
