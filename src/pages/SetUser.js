import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import InsertTextComp from "../components/InsertTextComp";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const SetUser = () => {
//   const [response, setResponse] = useState(null);
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(true);
  // const {
  //   user_name,
  //   user_surname,
  //   user_id,
  // } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const user = { "name": user_name,  "surname": user_surname};
  //   const headers = { "X-Access-Token": "1c91088390288297fbfac94a2bb1dab27b37555731af66037b54f736cef94908" };
    
  //   const response = axios.post("https://pure-caverns-82881.herokuapp.com/api/v54/users", user, { headers })
  //   .then(response => user_id.setState({ user_id: response.data.id }));
  //   const setData = () => {
  //     if (response !== null) {
  //         setData(response);
  //     }}

  // }, [response]);

  // if (loading) {
  //   return (
  //     <Box mt={20}>
  //       <CircularProgress />
  //     </Box>
  //   );
  // }

  // if (error) {
  //   return (
  //     <Typography variant="h6" mt={20} color="red">
  //       Something Went Wrong! Couldn't load quiz user auth.
  //     </Typography>
  //   );
  // }


  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/config");
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" mt={20} color='#0096c7'>
        Insert name:
      </Typography>
      <InsertTextComp />
      <Typography variant="h6" mt={20} color='#0096c7'>
        Insert surname:
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

export default SetUser;
