import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const ChoosePlayQuiz = () => {
  const { response, error, loading } = useAxios({ url: "/quizzes" }, "get");
  const history = useHistory();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something Went Wrong!
      </Typography>
    );
  }


    return (
    <Box mt={30}>
    <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score
    </Typography>
    </Box>
    );
  
  
};

export default ChoosePlayQuiz;
