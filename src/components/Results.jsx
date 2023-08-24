import React, { useEffect, useState } from "react";
import { Container, Box, Grid, Typography, Slide, Button } from "@mui/material";
import bg from "../assets/image/bg.jpg";
import EjectIcon from "@mui/icons-material/Eject";
function Results({ total = "0, 0, 0, 0, 0, 0, 0, 0, 0" }) {
  const [slide, setSlide] = useState(true);

  const subTotal = typeof total === "string" ? total.split(",") : [];
  const totalScore =
    typeof total === "string"
      ? total.split(",").map((data) => Number(data))
      : [];
  console.log(totalScore, "totalScore");
  const categoriges = [
    {
      cat: "Emotions",
      points: `${subTotal[1]}`,
      percent: (`${subTotal[1]}` / 40) * 100,
    },
    {
      cat: "Skin",
      points: `${subTotal[2]}`,
      percent: (`${subTotal[2]}` / 36) * 100,
    },
    {
      cat: "Ear, Nose and Throat",
      points: `${subTotal[3]}`,
      percent: (`${subTotal[3]}` / 36) * 100,
    },
    {
      cat: "Mind and Brain",
      points: `${subTotal[4]}`,
      percent: (`${subTotal[4]}` / 40) * 100,
    },
    {
      cat: "Digestive System",
      points: `${subTotal[5]}`,
      percent: (`${subTotal[5]}` / 36) * 100,
    },
    {
      cat: "Kidney",
      points: `${subTotal[6]}`,
      percent: (`${subTotal[6]}` / 20) * 100,
    },
    {
      cat: "Joints and Muscles",
      points: `${subTotal[7]}`,
      percent: (`${subTotal[7]}` / 20) * 100,
    },
    {
      cat: " Metabolism",
      points: `${subTotal[8]}`,
      percent: (`${subTotal[8]}` / 24) * 100,
    },
  ];
  const [sum, setSum] = useState(0);
  const calculateSum = () => {
    const arraySum = totalScore.reduce((acc, num) => acc + num, 0);
    setSum(arraySum);
  };
  const percentageTotal = (sum / 252) * 100;
  useEffect(() => {
    calculateSum();
    console.log(sum);
  }, [totalScore]);
  return (
    <Box sx={style.bg}>
      <Box sx={style.textBoxImg}>
        <Container sx={style.container}>
          <Typography sx={[style.mainHead, { textAlign: "center" }]}>
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
              {categoriges?.map((item, index) => (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "Center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div key={index} style={{ width: "100%", marginY: "1rem" }}>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {item.cat}
                      </Typography>

                      <Typography variant="h5">{item.points}</Typography>
                    </div>
                    <Box
                      sx={{
                        width: `${item.percent}%`,

                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Typography variant="h6">{item.percent}%</Typography>
                      <div
                        style={{
                          height: "30px",
                          width: "100%",
                          border: "2px solid black",
                          background:
                            "linear-gradient(to right, red, yellow, green)",
                        }}
                      ></div>
                    </Box>
                  </Box>
                  <hr style={{ width: "100%" }} />
                </>
              ))}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "Center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "Center",

                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800, marginTop: "1rem" }}
                  >
                    GRAND TOTAL :
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, marginTop: "1rem" }}
                  >
                    {sum}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: `${percentageTotal}%`,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContnent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Typography varian="h6">{percentageTotal}%</Typography>
                  <div
                    style={{
                      height: "50px",
                      width: "100%",
                      border: "2px solid black",
                      background:
                        "linear-gradient(to right, red, yellow, green)",
                    }}
                  ></div>
                </Box>
              </Box>

              <Typography
                variant="h4"
                sx={{ fontWeight: 800, textAlign: "center", color: "#072857" }}
              >
                TOXICITY :
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  marginTop: "0.5rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingX: "0.2rem",
                }}
              >
                <Typography variant="h6">0</Typography>
                <Typography variant="h6">252</Typography>
              </Box>
              <Box sx={{ width: "100%", marginTop: "0.3rem" }}>
                <div
                  style={{
                    height: "50px",
                    width: "100%",
                    border: "2px solid black",
                    background: "linear-gradient(to right, red, yellow, green)",
                  }}
                ></div>{" "}
              </Box>
              <Box
                sx={{
                  position: "relative",
                  width: "97%",
                  marginTop: "2.5rem",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: `${percentageTotal || 0}%`,
                  }}
                >
                  <EjectIcon />
                  {percentageTotal || 0}%
                </Box>
              </Box>
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
    height: "100%",
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
