import {
  CHANGE_AMOUNT,
  CHANGE_SCORE,
  SET_NICKNAME,
  CHANGE_ID,
  CREATE_USER_ID,
  SET_NAME,
  SET_SURNAME,
} from "./actionsTypes";

const initialState = {
  user_id: 0,
  user_name: "",
  user_surname: "",
  nickname: "",
  quiz_id: 0,
  question_answers_no: 0,
  amount_of_question: 50,
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_ID:
      return {
        ...state,
        user_id: action.payload
      };
    case SET_NAME:
      return{
        ...state,
      user_name: action.payload
      }
      case SET_SURNAME:
      return{
        ...state,
      user_surname: action.payload
      }
    case SET_NICKNAME:
      return {
        ...state,
        nickname: action.payload,
      };
    case CHANGE_ID:
      return {
        ...state,
        quiz_id: action.payload,
      };
    // case DELETE_QUIZ:  //CHANGE_TYPE
    //   return {
    //     ...state,
    //     question_text: action.payload,
    //   };
    case CHANGE_AMOUNT:
      return {
        ...state,
        amount_of_question: action.payload,
      };
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
