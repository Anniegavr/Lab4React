import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleCreateQuizChange,
  handlePlayQuizChange,
  handleQuizIdChange,
  handleDeleteQuizChange,
} from "../redux/actions";

const SelectField = (props) => {
  const { label, options, res } = props;
  const dispatch = useDispatch();
  // const [value, setValue] = useState();

  const handleChange = (e) => {
    res.map(quiz => {
      if (quiz.title == e.target.value){
        dispatch(handleQuizIdChange(quiz.id));
      }
    })
    
    // setValue(e.target.value);

    

  };

  return (
    <Box mt={3} width="100%" >
      <FormControl size="small" fullWidth>
        {/* <InputLabel>{label}</InputLabel> */}
        <select  onChange={handleChange}> 
        
          {options.map(({ id, name }) => (
            <option key={id}>{name}</option>
            // <MenuItem value={id} key={id}>
              // {name}
            // </MenuItem>
          ))}
        </select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
