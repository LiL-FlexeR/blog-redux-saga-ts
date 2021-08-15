import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../../redux/actions";
import { IForm } from "../../../types/forms";

const Form: React.FC<IForm> = ({ title, fields, button }) => {
  const store = useSelector((store) => store);

  const dispatch = useDispatch();

  const logData = {
    email: "123@123.com",
    password: "123123",
  };

  return (
    <Grid
      container
      justifyContent='space-between'
      direction='column'
      className='sign-up-form'
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {fields.map(({ fieldId, name, placeholder }) => (
          <TextField key={fieldId} name={name} placeholder={placeholder} />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(AuthActions.signInAction(logData))}>
          {button}
        </Button>
      </DialogActions>
    </Grid>
  );
};

export default Form;
