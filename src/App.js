import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import CreateQuiz from "./pages/CreateQuiz";
import FinalScreen from "./pages/FinalScreen";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ChoosePlayQuiz from "./pages/ChoosePlayQuiz";
import SetUser from "./pages/SetUser";

function App() {
  return (
    <Router>
      <Container  maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Switch>
            <Route path="/" exact>
              <Typography variant="h2" fontWeight="bold" color='#0096c7'>
                Create Or Play Quizzes
              </Typography>
              <SetUser />
            </Route>
            <Route path="/questions">
              <Questions />
            </Route>
            <Route path="/newquiz">
              <CreateQuiz />
            </Route>
            <Route path="/chooseplay">
              <ChoosePlayQuiz />
            </Route>
            <Route path="/score">
              <FinalScreen />
            </Route>
            <Route path="/config">
              <Settings />
            </Route>
          </Switch>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
