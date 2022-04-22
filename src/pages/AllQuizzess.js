// import { Button, CircularProgress, Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import { useHistory } from "react-router-dom";
// import SelectField from "../components/SelectField";
// import TextFieldComp from "../components/NumTextFieldComp";
// import useAxios from "../hooks/useAxios";

// const AllQuizzess = () => {
//   const { response, error, loading } = useAxios({ url: "/allquizzes" });
//   const history = useHistory();

//   if (loading) {
//     return (
//       <Box mt={20}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Typography variant="h6" mt={20} color="red">
//         Some Went Wrong!
//       </Typography>
//     );
//   }


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     history.push("/allquizzes");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <SelectField options={response.difficultyOptions} label="Title" />
//       <SelectField options={difficultyOptions} label="Number of Questions" />
//       <TextFieldComp />
//       <Box mt={3} width="100%">
//         <Button fullWidth variant="contained" type="submit">
//           Get Started
//         </Button>
//       </Box>
//     </form>
//   );
// };
// export default AllQuizzess;