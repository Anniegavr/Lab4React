import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { handle, handleInsertText } from "../redux/actions";

const InsertTextComp = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(handleInsertText(e.target.value));
  };

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField
          onChange={handleChange}
          variant="outlined"
          label="Insert Text"
          type="text"
        />
      </FormControl>
    </Box>
  );
};

export default InsertTextComp;