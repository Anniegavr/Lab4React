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

  let apiUrl = `/quizzes/${quiz_id}/`;

  const { response, loading } = useAxios({ url: apiUrl });
  const [question_index, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  // const [score, setScore] = useState();


  useEffect(() => {

    if (response?.questions.length) {
      const question = response.questions[question_index];
      setOptions(question.answers);
    }
  }, [response, question_index]);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const handleClickAnswer = (e) => {
    const question = response.questions[question_index];
    const res = axios.post("https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/"+quiz_id+"/submit",  
    {
      "data": {
        "question_id": response.questions[question_index].id,
        "answer": e.target.textContent,
        "user_id": user_id
    }
    }, 
    { headers: { 
        "X-Access-Token": "f98295ea42621f86f4606a5f09ab23083b28a3308fd26da5cef273543a1073d4"},
    }).then((res) => { 
      if (res.data.correct == true){
        dispatch(handleScoreChange(score+1));
      }
    
    })

    if (question_index + 1 < response.questions.length) {
      setQuestionIndex(question_index + 1);
    } else {
      history.push("/score");
    }
  };

  return (
    <Box>
      <Typography variant="h4">Question {question_index + 1}</Typography>
      <Typography variant="h5">Player: {nickname}</Typography>
      <Typography mt={5}>
        {decode(response.questions[question_index].question)}
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
