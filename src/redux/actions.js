import {
  CREATE_QUIZ,
  PLAY_QUIZ,
  CHANGE_AMOUNT,
  CHANGE_SCORE,
  DELETE_QUIZ,
  SET_NICKNAME,
  CHANGE_ID,
SET_NAME,
SET_SURNAME,
CREATE_USER_ID
} from "./actionsTypes";

export const handleCreateQuizChange = (payload) => ({
  type: CREATE_QUIZ,
  payload,
});
export const handleQuizIdChange = (payload) => ({
  type: CHANGE_ID,
  payload,
});

export const handlePlayQuizChange = (payload) => ({
  type: PLAY_QUIZ,
  payload,
});

export const handleDeleteQuizChange = (payload) => ({
  type: DELETE_QUIZ,
  payload,
});
export const handleSetName = (payload) => ({
  type: SET_NAME,
  payload,
});
export const handleSetSurname= (payload) => ({
  type: SET_SURNAME,
  payload,
});

export const handleAmountChange = (payload) => ({
  type: CHANGE_AMOUNT,
  payload,
});

export const handleScoreChange = (payload) => ({
  type: CHANGE_SCORE,
  payload,
});

export const handleInsertText = (payload) => ({
  type: SET_NICKNAME,
  payload,
});

export const handleCreateUser = (payload) => ({
  type: CREATE_USER_ID,
  payload,
});

// export const handleInsertAnswer = (payload) => ({
//   type: INSERT_ANSWER,
//   payload,
// });
