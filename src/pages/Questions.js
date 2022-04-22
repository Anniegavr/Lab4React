import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { decode } from "html-entities";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import useAxios from "../hooks/useAxios";
import { handleScoreChange } from "../redux/actions";
import axios from "axios";

const Questions = () => {
  const {
    nickname,
    quiz_id,
    score,
    user_id
  } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();

  let apiUrl = `/quizzes/${quiz_id}`;

  const { response, loading } = useAxios({ url: apiUrl });
  const [question_id, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  // const [score, setScore] = useState();


  useEffect(() => {

    if (response?.questions.length) {
      const question = response.questions[question_id];
      setOptions(question.answers);
    }
  }, [response, question_id]);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const handleClickAnswer = (e) => {
    const question = response.questions[question_id];
    const answer = {
      "data": {
          "question_id": question_id,
          "answer": e.target.textContent,
          "user_id": user_id,
      }
  }
    const headers = { "X-Access-Token": "1c91088390288297fbfac94a2bb1dab27b37555731af66037b54f736cef94908" };
    
    // const submitAns = axios.post(apiUrl.concat(`/submit`), answer, { headers })
  //
    this.setState({ answer: response.data.id });
    console.log("text content: ",e.target.textContent)
    if (e.target.textContent === response.questions[question_id].answer) {
      dispatch(handleScoreChange(score+1));
    }

    if (question_id + 1 < response.questions.length) {
      setQuestionIndex(question_id + 1);
    } else {
      history.push("/score");
    }
  };

  return (
    <Box>
      <Typography variant="h4">Question {question_id + 1}</Typography>
      <Typography variant="h5">Player: {nickname}</Typography>
      <Typography mt={5}>
        {decode(response.questions[question_id].question)}
      </Typography>
      {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button onClick={handleClickAnswer} variant="contained">
            {decode(data)}
          </Button>
        </Box>
      ))}
      <Box mt={5}>
        Score: {score}
      </Box>
    </Box>
  );
};

export default Questions;
