import { Container, Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import emo from "../assets/image/emotion.jpg";
import bg from "../assets/image/bg.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MoodBadIcon from "@mui/icons-material/MoodBad";

function CallengeQuestions() {
  const style = {
    container: {
      maxWidth: { xl: "1400px" },
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
    mainHead: {
      color: "white",
      fontSize: "4rem",
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
      fontSize: "1.6rem",
      fontWeight: 600,
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
      height: "50px",
      width: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",

      borderRadius: "50%",
      fontSize: "1.2rem",
    },
    pointsAns: {
      fontSize: "1.2rem",
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
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "1.5rem",
    },
    pointBo: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
      //   justifyContent: "end",
      paddingX: "2rem",
    },
  };
  const emotion = [
    "Irritability ?",

    "Nervousness ?",

    "Mood swings ?",

    "Frequent crying ?",

    "Aggressive behavior, i.e., road rage ?",

    "Anxiety ?",

    "Fear ?",

    "Confusion ?",

    "Depression ?",

    "Suicidal thoughts ?",
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);

  const [zero, setZero] = useState(false);
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);

  const handleAnswerClick = (points) => {
    setTotalPoints(totalPoints + points);
    if (points === "0") {
      setZero(true);
      setOne(false);
      setTwo(false);
      setThree(false);
      setFour(false);
    } else if (points === "1") {
      setZero(false);
      setOne(true);
      setTwo(false);
      setThree(false);
      setFour(false);
    } else if (points === "2") {
      setZero(false);
      setOne(false);
      setTwo(true);
      setThree(false);
      setFour(false);
    } else if (points === "3") {
      setZero(false);
      setOne(false);
      setTwo(false);
      setThree(true);
      setFour(false);
    } else if (points === "4") {
      setZero(false);
      setOne(false);
      setTwo(false);
      setThree(false);
      setFour(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < emotion.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  const handlePrevQuestion = () => {
    if (currentQuestionIndex < emotion.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = emotion[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === emotion.length - 1;
  return (
    <>
      <Box sx={style.bg}>
        <Box sx={style.textBox}>
          <Typography sx={style.mainHead}>Detoxification</Typography>
          <Typography sx={style.mainSlogan}>
            Callenge Test Questionniare
          </Typography>
        </Box>
        <Container sx={style.container}>
          <Grid
            container
            sx={[
              style.Box,
              { boxShadow: "7px 6px 13px -4px rgba(0,0,0,0.75)" },
            ]}
          >
            <Grid item lg={8}>
              <Typography variant="h4" sx={style.question}>
                Point counts
              </Typography>
              <Box>
                <Box sx={style.answers}>
                  <Box sx={style.buttonWithAnswer}>
                    <Box sx={style.points} backgroundColor="#429F46">
                      0
                    </Box>
                    <Typography sx={style.pointsAns}>
                      Never or almost never have the symptom
                    </Typography>
                  </Box>
                  <Box sx={style.buttonWithAnswer}>
                    <Box sx={style.points} backgroundColor="#C0CA33">
                      1
                    </Box>
                    <Typography sx={style.pointsAns}>
                      Occasionally have it
                    </Typography>
                  </Box>
                  <Box sx={style.buttonWithAnswer}>
                    <Box sx={style.points} backgroundColor="#FDD835">
                      2
                    </Box>
                    <Typography sx={style.pointsAns}>
                      Occasionally have it, effect is severe
                    </Typography>
                  </Box>
                  <Box sx={style.buttonWithAnswer}>
                    <Box sx={style.points} backgroundColor="#FB8C00">
                      3
                    </Box>
                    <Typography sx={style.pointsAns}>
                      Frequently have it, effect is not severe
                    </Typography>
                  </Box>
                  <Box sx={style.buttonWithAnswer}>
                    <Box sx={style.points} backgroundColor="#E53733">
                      4
                    </Box>
                    <Typography sx={style.pointsAns}>
                      Frequently have it, effect is severe
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4}>
              <Box sx={{ height: "100%", width: "100%" }}>
                <MoodBadIcon sx={{ height: "100%", width: "100%" }} />
              </Box>
            </Grid>
            <Box sx={style.QuestionBox}>
              <Typography variant="h4" sx={style.question}>
                {currentQuestion}
              </Typography>
              <Box sx={style.pointBo}>
                <Box
                  onClick={() => handleAnswerClick(0)}
                  sx={style.points}
                  backgroundColor={zero ? "blue" : "#429F46"}
                >
                  0
                </Box>
                <Box
                  onClick={() => handleAnswerClick(1)}
                  sx={style.points}
                  backgroundColor={one ? "blue" : "#C0CA33"}
                >
                  1
                </Box>
                <Box
                  onClick={() => handleAnswerClick(2)}
                  sx={style.points}
                  backgroundColor={two ? "blue" : "#FDD835"}
                >
                  2
                </Box>
                <Box
                  onClick={() => handleAnswerClick(3)}
                  sx={style.points}
                  backgroundColor={three ? "blue" : "#FB8C00"}
                >
                  3
                </Box>
                <Box
                  onClick={() => handleAnswerClick(4)}
                  sx={style.points}
                  backgroundColor={four ? "blue" : "#E53733"}
                >
                  4
                </Box>
              </Box>
            </Box>
            <Box sx={style.QuestionBox}>
              <Typography
                sx={[
                  style.pointsAns,
                  {
                    backgroundColor: "#082A58",
                    color: "white",
                    paddingY: "0.7rem",
                    paddingX: "1rem",
                    borderRadius: "10px",
                    boxShadow: "7px 6px 13px -4px rgba(0,0,0,0.75)",
                  },
                ]}
                onClick={handlePrevQuestion}
              >
                <ArrowRightAltIcon
                  style={{
                    transform: "rotate(180deg)",
                    fontSize: "2rem",
                  }}
                />
                PREVIOUS QUESTION
              </Typography>
              <Typography
                sx={[
                  style.pointsAns,
                  {
                    backgroundColor: "#082A58",
                    color: "white",
                    paddingY: "0.7rem",
                    paddingX: "1rem",
                    borderRadius: "10px",
                    boxShadow: "7px 6px 13px -4px rgba(0,0,0,0.75)",
                  },
                ]}
                onClick={handleNextQuestion}
              >
                NEXT QUESTION
                <ArrowRightAltIcon
                  style={{
                    fontSize: "2rem",
                  }}
                />
              </Typography>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default CallengeQuestions;
