import React, { useState } from "react";
import { Container, Box, Grid, Typography, Slide, Button } from "@mui/material";
import bg from "../assets/image/bg.jpg";
import { Bar } from "react-chartjs-2";
function Results({ total }) {
  const [slide, setSlide] = useState(true);
  const categoriges = [
    "Emotions",
    "Skin",
    "Ear, Nose and Throat",
    "Mind and Brain",
    "Digestive System",
    "Kidney",
    "Joints and Muscles",
    " Metabolism",
  ];
  const subTotal = total?.split(",");
  const totalScore = total.split(",").map((data) => data);
  return (
    <Box sx={style.bg}>
      <Box sx={style.textBoxImg}>
        <Container sx={style.container}>
          <Typography
            sx={[style.mainHead, { textAlign: "center", marginBottom: 3 }]}
          >
            Result
          </Typography>

          <Slide direction="left" in={slide} mountOnEnter unmountOnExit>
            <Grid
              container
              sx={[
                style.Box,
                { boxShadow: "7px 6px 13px -4px rgba(0,0,0,0.75)" },
              ]}
            >
              {categoriges.map((item, index) => (
                <div>
                  {`${subTotal[index + 1]}  ${item}`} <br />
                </div>
              ))}
            </Grid>
          </Slide>
        </Container>
      </Box>
    </Box>
  );
}

export default Results;
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
    backgroundColor: "white",
    fontWeight: 700,
    color: "#082958",
    marginBottom: "2rem",
    fontSize: "1rem",
    marginRight: "3rem",
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
