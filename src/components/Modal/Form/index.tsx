import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@material-ui/core";
import React from "react";
import { IForm } from "../../../types/forms";

const Form: React.FC<IForm> = ({ title, fields, button }) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      direction="column"
      className="sign-up-form"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {fields.map(({ fieldId, name, placeholder }) => (
          <TextField key={fieldId} name={name} placeholder={placeholder} />
        ))}
      </DialogContent>
      <DialogActions>
        <Button>{button}</Button>
      </DialogActions>
    </Grid>
  );
};

export default Form;
