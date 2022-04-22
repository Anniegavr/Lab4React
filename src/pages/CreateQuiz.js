// import { Button, CircularProgress, Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import { decode } from "html-entities";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useHistory } from "react-router";
// import useAxios from "../hooks/useAxios";
// import { handleScoreChange } from "../redux/actions";

// const getRandomInt = (max) => {
//   return Math.floor(Math.random() * Math.floor(max));
// };

// const Questions = () => {
//   const {
//     quiz_id,
//     amount_of_question,
//     score,
//   } = useSelector((state) => state);
//   const history = useHistory();
//   const dispatch = useDispatch();

//   let apiUrl = `/us`;
//   console.log("url: ", apiUrl);
//   // if (question_category) {
//   //   apiUrl = apiUrl.concat(`&category=${question_category}`);
//   // }
//   // if (question_difficulty) {
//   //   apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
//   // }
//   // if (question_type) {
//   //   apiUrl = apiUrl.concat(`&type=${question_type}`);
//   // }

//   const { response, loading } = useAxios({ url: apiUrl });
//   const [question_id, setQuestionIndex] = useState(0);
//   const [options, setOptions] = useState([]);
//   const [correctAns, loading] = useAxios({url: apiUrl.concat(`/submit`)});
  
  

//   console.log("response we: ", response)

//   useEffect(() => {

//     if (response?.questions.length) {
//       const question = response.questions[question_id];
//       let answers = [...question.answers]; //incorrect_
//       answers.splice(
//         getRandomInt(question.answers.length), //incorrect_
//         0,
//         question.answers
//       );
//       setOptions(answers);
//     }
//   }, [response, question_id]);

//   if (loading) {
//     return (
//       <Box mt={20}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   const handleClickAnswer = (e) => {
//     const question = response.questions[question_id];
    
//     if (e.target.textContent === correctAns.correct_answer) {
//       dispatch(handleScoreChange(score + 1));
//     }

//     if (question_id + 1 < response.questions.length) {
//       setQuestionIndex(question_id + 1);
//     } else {
//       history.push("/settings");
//     }
//   };

//   return (
//     <Box>
//       <Typography variant="h4">Questions {question_id + 1}</Typography>
//       <Typography mt={5}>
//         {decode(response.questions[question_id].question)}
//       </Typography>
//       for (i=0;)
//       {options.map((data, id) => (
//         <Box mt={2} key={id}>
//           <Button onClick={handleClickAnswer} variant="contained">
//             {decode(data)}
//           </Button>
//         </Box>
//       ))}
//       <Box mt={5}>
//         Score: {score} / {response.questions.length}
//       </Box>
//     </Box>
//   );
// };

// export default Questions;
