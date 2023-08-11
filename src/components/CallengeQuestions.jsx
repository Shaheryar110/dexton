import { Container, Box, Grid, Typography, Slide, Button } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
import TextField from "@mui/material/TextField";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import emotionImg from ".././assets/image/asdas.png";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import BannerImg from "./Common/BannerImg";
import skin from "../assets/image/skin.jpg";
import earNose from "../assets/image/earNose.jpg";
import brain from "../assets/image/Brain.jpg";
import digest from "../assets/image/digest.jpg";
import kidney from "../assets/image/kidney.jpg";
import joint from "../assets/image/joint.jpg";
import meta from "../assets/image/meta.jpg";

function CallengeQuestions() {
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
  const emotion = [
    {
      category: "EMOTIONS",
      image: emotionImg,
    },
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
    {
      category: "skin",
      image: skin,
    },
    { question: "Increased sweating, ear wax, oily skin ", image: Irritablity },
    { question: "Skin rashes ?", image: Nervousness },
    { question: "Brown spots on hands and face ?", image: Moodswings },
    { question: "Boils ?", image: frequentcrying },
    { question: "Skin tags (small hanging warts) ?", image: Aggressive },
    { question: "Acne ?", image: Anxiety },
    { question: "Eczema ?", image: fear },
    { question: "Fever Blisters ?", image: confusion },
    { question: "Warts ?", image: Depression },
    { category: "Ear, Nose and Throat ", image: earNose },
    { question: "Increase salivation ?", image: Aggressive },
    { question: "Mouth Ulcers ?", image: Anxiety },
    { question: "Common cold ?", image: fear },
    { question: "Sinusitis ?", image: confusion },
    { question: "Sore throats ?", image: Depression },
    { question: "Ear Infections ?", image: Depression },
    { question: "Hay Fever ?", image: Depression },
    { question: "Loss of smell ?", image: Depression },
    { question: "Cough ?", image: Depression },
    { category: "Mind and Brain ", image: brain },
    { question: "Hyperactivity ?", image: Depression },
    {
      question: "Stammering when speaking or problem finding words ?",
      image: Depression,
    },
    { question: "Difficulty in concentration ?", image: Depression },
    { question: "Difficulty in making decisions ?", image: Depression },
    { question: "Headache ?", image: Depression },
    { question: "Poor memory ?", image: Depression },
    { question: "Poor coordination ?", image: Depression },
    { question: "Compulsive behavior ?", image: Depression },
    { question: "Sleep disturbance ?", image: Depression },
    { question: "Memory loss ?", image: Depression },
    { category: "Digestive System", image: digest },
    { question: "Loose stools ?", image: Depression },
    { question: "Diarrhea ?", image: Depression },
    { question: "Heartburn ?", image: Depression },
    { question: "Constipation ?", image: Depression },
    { question: "Bloating ?", image: Depression },
    { question: "Abdominal pain ?", image: Depression },
    { question: "Intolerance to certain foods ?", image: Depression },
    { question: "Nausea or vomiting ?", image: Depression },
    { question: "Severe diarrhea with blood or mucous ?", image: Depression },
    { category: "Kidney", image: kidney },
    {
      question: "Increase in urination frequency and amount ?",
      image: Depression,
    },
    {
      question: "Needing to get uo in the night to pass urine ?",
      image: Depression,
    },
    { question: "Urinary tract infections and cystitis ?", image: Depression },
    { question: "Kidney stones ?", image: Depression },
    { question: "Blood in urine ?", image: Depression },
    { category: "Joints and Muscles ", image: joint },
    { question: "Fleeting muscle aches or joints aches ?", image: Depression },
    {
      question:
        "Tendinitis (e.g., tennis elbow, golfer's elbow, achilles tendinitis) ?",
      image: Depression,
    },
    { question: "Gout ?", image: Depression },
    { question: "Arthritis ?", image: Depression },
    { question: "Fibromyalgia ?", image: Depression },
    { category: "Metabolism", image: meta },
    { question: "Feeling of coldness ?", image: Depression },
    { question: "Hypoglycemia ?", image: Depression },
    { question: "Craving certain foods ?", image: Depression },
    { question: "Water retention ?", image: Depression },
    { question: "Obesity ?", image: Depression },
    { question: "Cellulite ?", image: Depression },
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);

  const [activeButton, setActiveButton] = useState(null);

  const handleAnswerClick = (points) => {
    setTotalPoints(totalPoints + points);
    setActiveButton(points);
  };
  const [total, setTotal] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < emotion.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    setTotal(total + activeButton);
  };
  const handlePrevQuestion = () => {
    if (currentQuestionIndex < emotion.length + 1) {
      if (currentQuestionIndex - 1 >= 0)
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = emotion[currentQuestionIndex]?.question;
  const currentImage = emotion[currentQuestionIndex]?.image;

  const [slide, setSlide] = useState(true);
  useEffect(() => {
    setSlide(false);
    setTimeout(() => {
      setSlide(true);
    }, 500);
    if (emotion[currentQuestionIndex]?.category) {
      setPageLoad(false);
    } else {
      setPageLoad(true);
    }
    console.log("total", total);
  }, [currentQuestionIndex]);

  const [form, setForm] = useState(false);
  const handleFormSubmit = () => {
    setForm(true);
  };
  const [pageLoad, setPageLoad] = useState(false);
  const stateChaneg = () => {
    setPageLoad(true);
    handleNextQuestion();
  };
  return (
    <>
      {!form && (
        <Box sx={style.bg}>
          <Box sx={style.textBoxImg}>
            <Container sx={style.container}>
              <Slide direction="left" in={slide} mountOnEnter unmountOnExit>
                <Grid
                  container
                  sx={[
                    style.Box,
                    { boxShadow: "7px 6px 13px -4px rgba(0,0,0,0.75)" },
                  ]}
                >
                  <Grid item lg={12} sx={{ position: "relative" }}>
                    <Grid container columnSpacing={3} rowSpacing={3}>
                      <Grid item lg={6}>
                        <Box sx={style.formContainer}>
                          <TextField
                            label="First Name"
                            variant="outlined"
                            sx={{ width: "100%", marginY: "1rem" }}
                          />

                          <TextField
                            label="Email"
                            variant="outlined"
                            sx={{ width: "100%", marginY: "1rem" }}
                          />
                          <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                            sx={{ width: "100%", marginY: "1rem" }}
                          >
                            <DatePicker
                              label="Controlled picker"
                              sx={{ width: "100%" }}
                            />
                          </LocalizationProvider>
                        </Box>
                      </Grid>
                      <Grid item lg={6}>
                        <Box sx={style.formContainer}>
                          <TextField
                            label="Last Name"
                            variant="outlined"
                            sx={{ width: "100%", marginY: "1rem" }}
                          />
                          <TextField
                            label="Phone"
                            variant="outlined"
                            sx={{ width: "100%", marginY: "1rem" }}
                          />
                          <TextField
                            label="DOB"
                            variant="outlined"
                            sx={{ width: "100%" }}
                          />
                        </Box>
                      </Grid>
                      <Button sx={style.formButton} onClick={handleFormSubmit}>
                        SUBMIT
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Slide>
            </Container>
          </Box>
        </Box>
      )}

      {pageLoad ? (
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
                <Grid item lg={7}>
                  <Typography variant="h6" sx={style.question}>
                    QUESTION : {currentQuestionIndex}
                  </Typography>
                  <Typography variant="h5" sx={style.question}>
                    {currentQuestion}
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
                <Grid item lg={5}>
                  <Box
                    sx={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                    }}
                  >
                    <Image
                      sx={{ height: "100%", width: "100%" }}
                      src={currentImage}
                      alt="oops"
                    />
                  </Box>
                </Grid>
                <Box sx={style.QuestionBox}>
                  <Typography variant="h6" sx={style.selectQuestion}>
                    Please select one of the following{" "}
                  </Typography>
                  <Box sx={style.pointBo}>
                    <Box
                      onClick={() => handleAnswerClick(0)}
                      sx={[
                        style.points,
                        {
                          backgroundColor:
                            activeButton === 0 ? "#27772A" : "#429F46",
                          border:
                            activeButton === 0 ? "2px solid black" : "none",
                        },
                      ]}
                    >
                      0
                    </Box>
                    <Box
                      onClick={() => handleAnswerClick(1)}
                      sx={[
                        style.points,
                        {
                          backgroundColor:
                            activeButton === 1 ? "#969E1F" : "#C0CA33",
                          border:
                            activeButton === 1 ? "2px solid black" : "none",
                        },
                      ]}
                    >
                      1
                    </Box>
                    <Box
                      onClick={() => handleAnswerClick(2)}
                      sx={[
                        style.points,
                        {
                          backgroundColor:
                            activeButton === 2 ? "#D5AE00" : "#FDD835",
                          border:
                            activeButton === 2 ? "2px solid black" : "none",
                        },
                      ]}
                    >
                      2
                    </Box>
                    <Box
                      onClick={() => handleAnswerClick(3)}
                      sx={[
                        style.points,
                        {
                          backgroundColor:
                            activeButton === 3 ? "#C76F00" : "#FB8C00",
                          border:
                            activeButton === 3 ? "2px solid black" : "none",
                        },
                      ]}
                    >
                      3
                    </Box>
                    <Box
                      onClick={() => handleAnswerClick(4)}
                      sx={[
                        style.points,
                        {
                          backgroundColor:
                            activeButton === 4 ? "#B71916" : "#E53733",
                          border:
                            activeButton === 4 ? "2px solid black" : "none",
                        },
                      ]}
                    >
                      4
                    </Box>
                  </Box>
                </Box>
                <Box sx={style.QuestionBox1}>
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
      ) : (
        <BannerImg
          img={emotion[currentQuestionIndex].image}
          category={emotion[currentQuestionIndex].category}
          func={stateChaneg}
          slide={slide}
        />
      )}
    </>
  );
}

export default CallengeQuestions;
