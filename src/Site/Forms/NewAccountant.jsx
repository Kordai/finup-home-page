import React from 'react';
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Grid,
  TextField,
} from "@mui/material";

const myHelper = {
  email: {
    required: "Укажите Email",
    pattern: "Не корректный Email"
  },
  text: {
    required: "Заполните поле"
  }
};

const NewAccountant = ({ handleCloseFormNewAccountant, newAccountantRequest }) => {

  const { control, handleSubmit } = useForm({
    reValidateMode: "onBlur"
  })  
  
  const handleOnSubmit = (evt) => {
    newAccountantRequest(evt)
    console.log(evt);    
    //updateAuthUserRequest(updateUserData)
  };


  return (
    <div className="App" style={{marginTop: 5}}>
      <Box component="form" onSubmit={handleSubmit(handleOnSubmit)}>
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <Controller
              control={control}
              name="firstName"              
              rules={{
                required: true
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type="text"
                  fullWidth
                  size='small'
                  label="Имя"
                  error={error !== undefined}
                  helperText={error ? myHelper.text[error.type] : ""}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              control={control}
              name="lastName"              
              rules={{
                required: true
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type="text"
                  size='small'
                  fullWidth
                  label="Фамилия"
                  error={error !== undefined}
                  helperText={error ? myHelper.text[error.type] : ""}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              control={control}
              name="city"              
              rules={{
                required: true
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type="text"
                  size='small'
                  fullWidth
                  label="Город"
                  error={error !== undefined}
                  helperText={error ? myHelper.text[error.type] : ""}
                />
              )}
            />
          </Grid>

          {/* <Grid item xs={12}>
            <Controller
              control={control}
              name="address"
              defaultValue={authUser.address}
              rules={{
                required: true
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type="text"
                  size='small'
                  fullWidth
                  label="Адрес"
                  error={error !== undefined}
                  helperText={error ? myHelper.text[error.type] : ""}
                />
              )}
            />
          </Grid>  */}

          <Grid item xs={12}>
            <Controller
              control={control}
              name="email"              
              rules={{
                required: true,
                pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type="email"
                  size='small'
                  fullWidth
                  label="Email"
                  error={error !== undefined}
                  helperText={error ? myHelper.text[error.type] : ""}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              control={control}
              name="phone"              
              rules={{
                required: true
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type="text"
                  size='small'
                  fullWidth
                  label="Телефон"
                  error={error !== undefined}
                  helperText={error ? myHelper.text[error.type] : ""}
                />
              )}
            />
          </Grid>

          {/* <Grid item xs={12}>
            <Controller
              control={control}
              name="iin"
              defaultValue={authUser.iin}
              rules={{
                required: true
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type="text"
                  fullWidth
                  label="ИИН"
                  error={error !== undefined}
                  helperText={error ? myHelper.text[error.type] : ""}
                />
              )}
            />
          </Grid> */}       

          <Grid item xs={6}>
            <Button type="submit" color='secondary' variant="outlined">Отправить</Button>
          </Grid>
          <Grid item xs={6} >
            <Button onClick={handleCloseFormNewAccountant} color='secondary' type="button" variant="outlined">Отмена</Button> 
          </Grid>

        </Grid>
      </Box>      
    </div>
  );
}

export default NewAccountant