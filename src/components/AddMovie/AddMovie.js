import React from 'react';
import { connect } from 'react-redux';
import { FIRST_BUTTON_TITLE, SECOND_BUTTON_TITLE } from './consts';
import { applyMovieToAdd } from "../../store/actions";
import styles from './AddMovie.module.scss';
import { TextField, Button, withStyles } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { Formik, Form, useField } from 'formik';
import * as yup from 'yup';

const StyledTextField = withStyles(theme => ({
  root: {
    width: "100%",
    "& .MuiInputBase-root": {
      color: "white"
    }
  }
}))(TextField)

const StyledDatePicker = withStyles(theme => ({
  root: {
    width: "100%",
    "& .MuiInputBase-root": {
      color: "white"
    },
    "& .MuiFormLabel-root": {
      color: "grey",
      fontWeight: 600
    }
  }
}))(KeyboardDatePicker)

const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <StyledTextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
      variant="filled"/>
  )
}

const validationSchema = yup.object({
  title: yup.string().required(),
  poster_path: yup.string().required(),
  overview: yup.string().required(),
  runtime: yup.string().required(),
  genres: yup.string().required(),
  release_date: yup.date().required()
})

const AddMovie = ({ applyMovieToAdd, sort, filter }) => {
    return (
      <Formik
        initialValues={{
          title: '',
          poster_path: '',
          overview: '',
          runtime: '',
          genres: '',
          release_date: new Date()
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          const updatedMovieToAdd = {
            ...data,
            runtime: Number(data.runtime),
            genres: typeof data.genres === 'string' ? data.genres.split(",") : data.genres,
          }
          applyMovieToAdd(updatedMovieToAdd, sort, filter)
          setSubmitting(false);
        }}>
        {({ values, errors, isSubmitting, setFieldValue }) => (
          <Form>
            <MyTextField
              placeholder="Title"
              name="title"
              type="input"
            />
            <MyTextField
              placeholder="Poster path"
              name="poster_path"
              type="input"
            />
            <MyTextField
              placeholder="Overview"
              name="overview"
              type="input"
            />
            <MyTextField
              placeholder="Runtime"
              name="runtime"
              type="input"
            />
            <MyTextField
              placeholder="Genres"
              name="genres"
              type="input"
            />
            <div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <StyledDatePicker
                  inputVariant="filled"
                  label="Release date"
                  name="release_date"
                  format="dd/MM/yyyy"
                  value={values.release_date}
                  onChange={value => {
                    setFieldValue("release_date", value);
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className={styles.addMovieFooter}>
              <Button disabled={isSubmitting} type="reset"
                      disableElevation>{FIRST_BUTTON_TITLE}</Button>
              <Button disabled={isSubmitting} type="submit" color="secondary"
                      disableElevation>{SECOND_BUTTON_TITLE}</Button>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
;

const mapStateToProps = (state) => {

  return {
    movieToAdd: state.movieToAdd,
    sort: state.sort,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  applyMovieToAdd
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
