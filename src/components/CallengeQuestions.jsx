import { Container, Box, Grid, Typography, Slide } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import emo from "../assets/image/emotion.jpg";
import bg from "../assets/image/bg.jpg";
import Aggressive from "../assets/image/Aggressive.png";
import Anxiety from "../assets/image/Anxiety.png";
import confusion from "../assets/image/confusion.png";
import Depression from "../assets/image/Depression.png";
import fear from "../assets/image/fear.png";
import frequentcrying from "../assets/image/frequentcrying.png";
import Irritablity from "../assets/image/Irritablity.png";
import Moodswings from "../assets/image/Moodswings.png";
import Nervousness from "../assets/image/Nervousness.png";
import Sucidial from "../assets/image/Sucidial.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MoodBadIcon from "@mui/icons-material/MoodBad";

function CallengeQuestions() {
  const style = {
    container: {
      maxWidth: { xl: "1000px" },
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
      cursor: "pointer",
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
    { question: "Irritability ?", image: Irritablity },
    { question: "Nervousness ?", image: Nervousness },
    { question: "Mood swings ?", image: Moodswings },
    { question: "Frequent crying ?", image: frequentcrying },
    { question: "Aggressive behavior, i.e., road rage ?", image: Aggressive },
    { question: "Anxiety ?", image: Anxiety },
    { question: "Fear ?", image: fear },
    { question: "Confusion ?", image: confusion },
    { question: "Depression ?", image: Depression },
    { question: "Suicidal thoughts ?", image: Sucidial },
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);

  const [activeButton, setActiveButton] = useState(null);

  const handleAnswerClick = (points) => {
    setTotalPoints(totalPoints + points);
    setActiveButton(points);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < emotion.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  const handlePrevQuestion = () => {
    if (currentQuestionIndex < emotion.length + 1) {
      if (currentQuestionIndex - 1 >= 0)
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = emotion[currentQuestionIndex].question;
  const currentImage = emotion[currentQuestionIndex].image;
  const isLastQuestion = currentQuestionIndex === emotion.length - 1;
  const [slide, setSlide] = useState(true);
  useEffect(() => {
    setSlide(false);
    setTimeout(() => {
      setSlide(true);
    }, 500);
  }, [currentQuestionIndex]);
  return (
    <>
      <Box sx={style.bg}>
        <Box sx={style.textBox}>
          <Typography sx={style.mainHead}>Emotional </Typography>
          <Typography sx={style.mainSlogan}>
            Callenge Test Questionniare
          </Typography>
        </Box>
        <Container sx={style.container}>
          <Slide direction="left" in={slide} mountOnEnter unmountOnExit>
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
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    sx={{ height: "100%", width: "100%" }}
                    src={currentImage}
                  />
                </Box>
              </Grid>
              <Box sx={style.QuestionBox}>
                <Typography variant="h4" sx={style.question}>
                  {currentQuestion}
                </Typography>
                <Box sx={style.pointBo}>
                  <Box
                    onClick={() => handleAnswerClick(0)}
                    sx={[
                      style.points,
                      {
                        backgroundColor:
                          activeButton === 0 ? "#27772A" : "#429F46",
                      },
                    ]}
                  >
                    0
                  </Box>
                  <Box
                    onClick={() => handleAnswerClick(1)}
                    sx={style.points}
                    backgroundColor={activeButton === 1 ? "#969E1F" : "#C0CA33"}
                  >
                    1
                  </Box>
                  <Box
                    onClick={() => handleAnswerClick(2)}
                    sx={style.points}
                    backgroundColor={activeButton === 2 ? "#D5AE00" : "#FDD835"}
                  >
                    2
                  </Box>
                  <Box
                    onClick={() => handleAnswerClick(3)}
                    sx={style.points}
                    backgroundColor={activeButton === 3 ? "#C76F00" : "#FB8C00"}
                  >
                    3
                  </Box>
                  <Box
                    onClick={() => handleAnswerClick(4)}
                    sx={style.points}
                    backgroundColor={activeButton === 4 ? "#B71916" : "#E53733"}
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
          </Slide>
        </Container>
      </Box>
    </>
  );
}

export default CallengeQuestions;
