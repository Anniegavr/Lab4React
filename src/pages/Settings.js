import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import SelectField from "../components/SelectField";
import InsertTextComp from "../components/InsertTextComp";
import useAxios from "../hooks/useAxios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { handleQuizIdChange } from "../redux/actions";


const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/quizzes" });
  const history = useHistory();
  console.log(response?.map(data => {console.log(data); return {"id":data.id, "name":data.title}}));
  const {
    user_name,
    user_surname,
    user_id,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    
    if(response != null){
      console.log("quiz id response: ",response[0].id)
      dispatch(handleQuizIdChange(response[0].id)) 
    }
  },[response]
  )

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
        Something Went Wrong! Couldn't load quiz configurations.
      </Typography>
    );
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/questions");
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h2" fontWeight="bold" color='#0096c7'>
        Welcome to quiz guru!
        {user_id},
        {user_name},
        {user_surname}

      </Typography>
      <SelectField res={response} options={response?.map(data => {console.log(data); return {"id":data.id, "name":data.title}})} label="Options" />
      <Typography variant="h6" mt={20} color='#0096c7'>
        Set a nickname:
      </Typography>
      
      <InsertTextComp />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Next
        </Button>
      </Box>
    </form>
  );
};

export default Settings;
