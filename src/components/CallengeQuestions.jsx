import { Container, Box, Grid, Typography, Slide, Button } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Patua_One } from "next/font/google";

const patua = Patua_One({
  subsets: ["latin"],
  weight: ["400"],
});

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
import skin from "../assets/image/skin.png";
import skin1 from "../assets/image/skin1.jpg";
import skin2 from "../assets/image/skin2.png";
import skin3 from "../assets/image/skin3.jpg";
import skin4 from "../assets/image/skin4.png";
import skin5 from "../assets/image/skin5.jpg";
import skin6 from "../assets/image/skin6.png";
import skin7 from "../assets/image/skin7.png";
import skin8 from "../assets/image/skin8.png";
import skin9 from "../assets/image/skin9.png";
import earNose from "../assets/image/ear.png";
import ear1 from "../assets/image/ear1.png";
import ear2 from "../assets/image/ear2.png";
import ear3 from "../assets/image/ear3.png";
import ear4 from "../assets/image/ear4.jpg";
import ear5 from "../assets/image/ear5.png";
import ear6 from "../assets/image/ear6.png";
import ear7 from "../assets/image/ear7.png";
import ear8 from "../assets/image/ear8.jpg";
import ear9 from "../assets/image/ear9.png";

import brain from "../assets/image/brain.png";
import brain1 from "../assets/image/brain1.png";
import brain2 from "../assets/image/brain2.png";
import brain3 from "../assets/image/brain3.jpg";
import brain4 from "../assets/image/brain4.png";
import brain5 from "../assets/image/brain5.png";
import brain6 from "../assets/image/brain6.jpg";
import brain7 from "../assets/image/brain7.png";
import brain8 from "../assets/image/brain8.png";
import brain9 from "../assets/image/brain9.jpg";
import brain10 from "../assets/image/brain10.jpg";

import digest from "../assets/image/digestive.png";
import digestive1 from "../assets/image/digestive1.png";
import digestive2 from "../assets/image/digestive2.png";
import digestive3 from "../assets/image/digestive3.jpg";
import digestive4 from "../assets/image/digestive4.png";
import digestive5 from "../assets/image/digestive5.jpg";
import digestive6 from "../assets/image/digestive6.jpg";
import digestive7 from "../assets/image/digestive7.png";
import digestive8 from "../assets/image/digestive8s.png";
import digestive9 from "../assets/image/digestive9.png";
import kidney from "../assets/image/kidney.png";
import kidne1 from "../assets/image/Kidney1.png";
import kidne2 from "../assets/image/kidney2.png";
import kidne3 from "../assets/image/kidney3.png";
import kidne4 from "../assets/image/kidney4.png";
import kidne5 from "../assets/image/kidney5.png";
import joint from "../assets/image/joints.png";

import meta from "../assets/image/metacat.png";
import meta1 from "../assets/image/metabol1.png";
import meta2 from "../assets/image/metabol2.png";
import meta3 from "../assets/image/metabol3.png";
import meta4 from "../assets/image/metabol4.png";
import meta5 from "../assets/image/metabol5.png";
import meta6 from "../assets/image/meta6.png";

import joint1 from "../assets/image/meta0.png";
import joint2 from "../assets/image/joint2.png";
import joint3 from "../assets/image/joint3.png";
import joint4 from "../assets/image/joint4.png";
import joint5 from "../assets/image/joint5.png";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CallengeQuestions() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [Validemail, setValidEmail] = useState(false);
  const [phone, setPhone] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [selectedValue, setSelectedValue] = useState("US");
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
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
      paddingTop: "5rem",
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
      category: "EMOTION TEST",
      image: emotionImg,
      categoryName: "Emotion",
    },
    { question: "Irritability ?", image: Irritablity, questionNumber: 1 },
    { question: "Nervousness ?", image: Nervousness, questionNumber: 2 },
    { question: "Mood swings ?", image: Moodswings, questionNumber: 3 },
    { question: "Frequent crying ?", image: frequentcrying, questionNumber: 4 },
    {
      question: "Aggressive behavior, i.e., road rage ?",
      image: Aggressive,
      questionNumber: 5,
    },
    { question: "Anxiety ?", image: Anxiety, questionNumber: 6 },
    { question: "Fear ?", image: fear, questionNumber: 7 },
    { question: "Confusion ?", image: confusion, questionNumber: 8 },
    { question: "Depression ?", image: Depression, questionNumber: 9 },
    { question: "Suicidal thoughts ?", image: Sucidial, questionNumber: 10 },
    {
      category: " ",
      image: skin,
      categoryName: "Skin",
    },
    {
      question: "Increased sweating, ear wax, oily skin ",
      image: skin1,
      questionNumber: 1,
    },
    { question: "Skin rashes ?", image: skin2, questionNumber: 2 },
    {
      question: "Brown spots on hands and face ?",
      image: skin3,
      questionNumber: 3,
    },
    { question: "Boils ?", image: skin4, questionNumber: 4 },
    {
      question: "Skin tags (small hanging warts) ?",
      image: skin5,
      questionNumber: 5,
    },
    { question: "Acne ?", image: skin6, questionNumber: 6 },
    { question: "Eczema ?", image: skin7, questionNumber: 7 },
    { question: "Fever Blisters ?", image: skin8, questionNumber: 8 },
    { question: "Warts ?", image: skin9, questionNumber: 9 },

    { category: " ", image: earNose, categoryName: "Ear,Nose" },

    { question: "Increase salivation ?", image: ear1, questionNumber: 1 },
    { question: "Mouth Ulcers ?", image: ear2, questionNumber: 2 },
    { question: "Common cold ?", image: ear3, questionNumber: 3 },
    { question: "Sinusitis ?", image: ear4, questionNumber: 4 },
    { question: "Sore throats ?", image: ear5, questionNumber: 5 },
    { question: "Ear Infections ?", image: ear6, questionNumber: 6 },
    { question: "Hay Fever ?", image: ear7, questionNumber: 7 },
    { question: "Loss of smell ?", image: ear8, questionNumber: 8 },
    { question: "Cough ?", image: ear9, questionNumber: 9 },
    { category: " ", image: brain, categoryName: "Brain" },
    { question: "Hyperactivity ?", image: brain1, questionNumber: 1 },
    {
      question: "Stammering when speaking or problem finding words ?",
      image: brain2,
      questionNumber: 2,
    },
    {
      question: "Difficulty in concentration ?",
      image: brain3,
      questionNumber: 3,
    },
    {
      question: "Difficulty in making decisions ?",
      image: brain4,
      questionNumber: 4,
    },
    { question: "Headache ?", image: brain5, questionNumber: 5 },
    { question: "Poor memory ?", image: brain6, questionNumber: 6 },
    { question: "Poor coordination ?", image: brain7, questionNumber: 7 },
    { question: "Compulsive behavior ?", image: brain8, questionNumber: 8 },
    { question: "Sleep disturbance ?", image: brain9, questionNumber: 9 },
    { question: "Memory loss ?", image: brain10, questionNumber: 10 },

    { category: "  ", image: digest, categoryName: "Digestive" },

    { question: "Loose stools ?", image: digestive1, questionNumber: 1 },
    { question: "Diarrhea ?", image: digestive2, questionNumber: 2 },
    { question: "Heartburn ?", image: digestive3, questionNumber: 3 },
    { question: "Constipation ?", image: digestive4, questionNumber: 4 },
    { question: "Bloating ?", image: digestive5, questionNumber: 5 },
    { question: "Abdominal pain ?", image: digestive6, questionNumber: 6 },
    {
      question: "Intolerance to certain foods ?",
      image: digestive7,
      questionNumber: 7,
    },
    { question: "Nausea or vomiting ?", image: digestive8, questionNumber: 8 },
    {
      question: "Severe diarrhea with blood or mucous ?",
      image: digestive9,
      questionNumber: 9,
    },
    { category: " ", image: kidney, categoryName: "Kideny Dieseas" },
    {
      question: "Increase in urination frequency and amount ?",
      image: kidne1,
      questionNumber: 1,
    },
    {
      question: "Needing to get uo in the night to pass urine ?",
      image: kidne2,
      questionNumber: 2,
    },
    {
      question: "Urinary tract infections and cystitis ?",
      image: kidne3,
      questionNumber: 3,
    },
    { question: "Kidney stones ?", image: kidne4, questionNumber: 4 },
    { question: "Blood in urine ?", image: kidne5, questionNumber: 5 },
    { category: " ", image: joint, categoryName: "Joint" },
    {
      question: "Fleeting muscle aches or joints aches ?",
      image: joint1,
      questionNumber: 1,
    },
    {
      question:
        "Tendinitis (e.g., tennis elbow, golfer's elbow, achilles tendinitis) ?",
      image: joint2,
      questionNumber: 2,
    },
    { question: "Gout ?", image: joint3, questionNumber: 3 },
    { question: "Arthritis ?", image: joint4, questionNumber: 4 },
    { question: "Fibromyalgia ?", image: joint5, questionNumber: 5 },
    { category: " ", image: meta, categoryName: "Meta" },
    { question: "Feeling of coldness ?", image: meta1, questionNumber: 1 },
    { question: "Hypoglycemia ?", image: meta2, questionNumber: 2 },
    {
      question: "Craving certain foods ?",
      image: meta3,
      questionNumber: 3,
    },
    { question: "Water retention ?", image: meta4, questionNumber: 4 },
    { question: "Obesity ?", image: meta5, questionNumber: 5 },
    { question: "Cellulite ?", image: meta6, questionNumber: 6 },
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [subTotal, setSubTotal] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const [subtotalIndex, setSubTotalIndex] = useState(0);
  const handleAnswerClick = (points) => {
    setActiveButton(Number(points));
  };
  const [total, setTotal] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < emotion.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    if (emotion[currentQuestionIndex]?.categoryName) {
      setSubTotalIndex((pre) => pre + 1);
    } else {
      let temp = subTotal;
      temp[subtotalIndex] =
        Number(temp[subtotalIndex] || 0) + Number(activeButton || 0);
      setSubTotal(temp);
    }
    setTotal(total + Number(activeButton));
  };
  const handlePrevQuestion = () => {
    if (currentQuestionIndex < emotion.length + 1) {
      if (currentQuestionIndex - 1 >= 0)
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = emotion[currentQuestionIndex]?.question;
  const currentImage = emotion[currentQuestionIndex]?.image;
  const questionNumber = emotion[currentQuestionIndex]?.questionNumber;
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

    setActiveButton(null);
  }, [currentQuestionIndex]);

  const [form, setForm] = useState(false);
  const formSubmit = () => {
    if (firstName && lastName && email && phone) {
      handleFormSubmit();
    } else {
      toast.error("Invalid or Empty Feilds");
    }
  };
  const handleFormSubmit = () => {
    setSlide(false);
    setTimeout(() => {
      setForm(true);
      setSlide(true);
    }, 500);
  };
  const [pageLoad, setPageLoad] = useState(false);
  const stateChaneg = () => {
    setPageLoad(true);
    handleNextQuestion();
  };
  const handleClick = () => {
    handleNextQuestion();
    router.push(`/result/${subTotal || [0, 0, 0, 0, 0, 0, 0, 0, 0]}`);
  };
  useEffect(() => {
    console.log(subTotal);
  }, [subTotal]);
  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };
  const emailNameHandler = (e) => {
    const email = e.target.value;
    setEmail(email);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setValidEmail(emailRegex.test(email));
  };
  const phoneNameHandler = (e) => {
    setPhone(e.target.value);
  };
  const heightNameHandler = (e) => {
    setHeight(e.target.value);
  };
  const weightNameHandler = (e) => {
    setWeight(e.target.value);
  };

  return (
    <>
      {!form && (
        <Box sx={style.bg}>
          <Box sx={style.textBoxImg}>
            <Container sx={style.container}>
              <Typography
                sx={[style.mainHead, { textAlign: "center", marginBottom: 3 }]}
              >
                Personal Information
              </Typography>

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
                            value={firstName}
                            onChange={firstNameHandler}
                          />

                          <TextField
                            label="Email"
                            variant="outlined"
                            sx={{ width: "100%", marginY: "1rem" }}
                            value={email}
                            onChange={emailNameHandler}
                          />
                          <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                            sx={{ width: "100%", marginY: "1rem" }}
                            required
                          >
                            <DatePicker
                              label="Test Date"
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
                            value={lastName}
                            onChange={lastNameHandler}
                          />
                          <TextField
                            label="Phone"
                            variant="outlined"
                            sx={{ width: "100%", marginY: "1rem" }}
                            value={phone}
                            onChange={phoneNameHandler}
                          />
                          <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                            sx={{ width: "100%", marginY: "1rem" }}
                          >
                            <DatePicker
                              label="Date Of Birth"
                              sx={{ width: "100%" }}
                            />
                          </LocalizationProvider>
                        </Box>
                      </Grid>
                      <Grid item lg={6}>
                        <FormControl component="fieldset">
                          <RadioGroup
                            aria-label="radio-group"
                            name="radio-group"
                            value={selectedValue}
                            onChange={handleRadioChange}
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                            }}
                          >
                            <FormControlLabel
                              value="US"
                              control={<Radio />}
                              label="U.S.(Imperial)"
                            />
                            <FormControlLabel
                              value="Metric"
                              control={<Radio />}
                              label="Metric"
                            />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                      <Grid item lg={6}></Grid>
                      {selectedValue == "US" && (
                        <Grid item lg={6}>
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              flexDirection: "row",
                              gap: "1rem",
                            }}
                          >
                            <TextField
                              label="Feet"
                              variant="outlined"
                              sx={{ width: "100%", marginY: "1rem" }}
                              value={height}
                              onChange={heightNameHandler}
                            />

                            <TextField
                              label="Inches"
                              variant="outlined"
                              sx={{ width: "100%", marginY: "1rem" }}
                              value={weight}
                              onChange={weightNameHandler}
                            />
                          </Box>
                          <TextField
                            label="Pounds"
                            variant="outlined"
                            sx={{ width: "100%", marginY: "1rem" }}
                            value={height}
                            onChange={heightNameHandler}
                          />
                        </Grid>
                      )}

                      {selectedValue == "Metric" && (
                        <Grid item lg={6}>
                          <TextField
                            label="Enter Height Between 15 to 100"
                            variant="outlined"
                            sx={{ width: "100%", marginY: "1rem" }}
                            value={height}
                            onChange={heightNameHandler}
                          />

                          <TextField
                            label="Enter Weight in US LBS"
                            variant="outlined"
                            sx={{ width: "100%", marginY: "1rem" }}
                            value={weight}
                            onChange={weightNameHandler}
                          />
                        </Grid>
                      )}
                      {/* <Grid item lg={6}>
                        <TextField
                          label="Enter Height Between 15 to 100"
                          variant="outlined"
                          sx={{ width: "100%", marginY: "1rem" }}
                          value={height}
                          onChange={heightNameHandler}
                        />
                      </Grid>
                      <Grid item lg={6}>
                        <TextField
                          label="Enter Weight in US LBS"
                          variant="outlined"
                          sx={{ width: "100%", marginY: "1rem" }}
                          value={weight}
                          onChange={weightNameHandler}
                        />
                      </Grid> */}
                      <Button sx={style.formButton} onClick={formSubmit}>
                        SUBMIT
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Slide>
              <ToastContainer />
            </Container>
          </Box>
        </Box>
      )}

      {pageLoad ? (
        <Box sx={style.bg}>
          <Box sx={style.textBox}>
            <Typography sx={style.mainHead} className={patua.className}>
              Detox{" "}
            </Typography>
            <Typography sx={style.mainSlogan} className={patua.className}>
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
                    QUESTION : {questionNumber}
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
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{ height: "70%", width: "70%" }}
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
                  {currentQuestionIndex + 1 < emotion.length ? (
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
                  ) : (
                    // <Link href="result" style={{ textDecoration: "none" }}>
                    <>
                      <Typography
                        onClick={handleClick}
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
                      >
                        Result
                        <ArrowRightAltIcon
                          style={{
                            fontSize: "2rem",
                          }}
                        />
                      </Typography>
                    </>
                    // </Link>
                  )}
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
