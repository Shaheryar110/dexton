import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import homeImg from "../assets/image/home.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function HomePage() {
  const style = {
    bg: {
      backgroundImage: `url(${homeImg.src})`,
      backgroundSize: "cover",
      width: "100%",
      height: "120vh",
      position: "relative",
      zIndex: "-1",
    },
    welcome: {
      textAlign: "center",
      paddingTop: "15rem",
      fontWeight: 800,
      color: "#38600D",
    },
    text: {
      position: "absolute",
      bottom: 130,
      left: "30%",
      fontWeight: 800,
      color: "#38600D",
    },
    text1: {
      position: "absolute",
      bottom: 10,
      left: "27%",
      fontWeight: 800,
      zIndex: 99,
    },
  };
  return (
    <>
      <Link
        href="/callenge-question"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Box sx={style.bg}>
          <Typography variant="h1" sx={style.welcome}>
            WELCOME TO
          </Typography>
          <Typography variant="h1" sx={style.text}>
            CALLENGE TEST
          </Typography>
          <Button
            sx={{
              backgroundColor: "#453011",
              fontSize: "1.5rem",
              color: "white",
              paddingY: "1rem",
              paddingX: "1rem",
              borderRadius: "10px",
              boxShadow: "7px 6px 13px -4px rgba(0,0,0,0.75)",
              bottom: 30,
              position: "absolute",
              left: "45%",
            }}
          >
            LETS GET STARTED
          </Button>
        </Box>
      </Link>
    </>
  );
}

export default HomePage;
