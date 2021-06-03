import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Grid,
  Button,
  MenuItem,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import './App.css'

const QuoteForm = (props) => {
  const { setQuotes } = props;
  const [formInfo, setFormInfo] = useState({
    departDate: new Date(),
    returnDate: new Date(),
  });

  const handleDepartDate = (date) => {
    setFormInfo(prevState => ({
      ...prevState,
      departDate: date
    }));
  };

  const handleReturnDate = (date) => {
    setFormInfo(prevState => ({
      ...prevState,
      returnDate: date
    }))
  };

  const axios = require('axios');

  const onSubmit = vals => {
    let id = Math.floor(Math.random() * 100);

    const newQuote = {
      id,
      from_city: vals['From'],
      to_city: vals['To'],
      depart_date: vals['Depart Date'],
      return_date: vals['Return Date'],
      people: vals['People'], // max 5 person
      transportation: vals['Transportation'],
      name: vals['Name'],
      email: vals['Email'],
      price: '3000', // hardcoded price
      trip_status: 'pending',
      trip_message: vals['Message'],
      begin_date: new Date()
    }

    setQuotes(prevState => ({
      ...prevState,
      [id]: newQuote
    }));

    axios.post(`http://localhost:3000/api/quotes`, newQuote);
  };

  const validate = vals => {
    const errors = {};
    const keys = ['From', 'To', 'Depart Date', 'Return Date', 'People', 'Transportation', 'Name', 'Email'];

    for (const key of keys) {
      if (!vals[key]) {
        errors[key] = 'Required';
      }
    };

    // depart date has to be before return date
    if (vals['Depart Date'] >= vals['Return Date']) {
      console.log(vals['Depart Date'], vals['Return Date']);
      errors['Depart Date'] = 'Wrong Date';
      errors['Return Date'] = 'Wrong Date';
    };

    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, submitting }) => (
        <form className="quoteForm" onSubmit={handleSubmit} noValidate>
          <Paper style={{padding: 16}}>
          <Typography
          >
            Quick Quote
          </Typography>
            <Grid container alignItems="flex-start" spacing={2}>
              <Grid item xs={6}>
                <Field
                  className="field"
                  required
                  name="From"
                  component={TextField}
                  type="text"
                  label="From"
                />
              </Grid>

              <Grid item xs={6}>
                <Field
                  className="field"
                  required
                  name="To"
                  component={TextField}
                  type="text"
                  label='To'
                />
              </Grid>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item xs={6}>
                <Field
                  name="Depart Date"
                  render={props => {
                    props.input.onChange(formInfo.departDate);
                    return <KeyboardDatePicker
                      className="field"
                      // disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      label="Depart Date"
                      value={formInfo.departDate}
                      onChange={handleDepartDate}
                    />
                  }}
                >
                </Field>
              </Grid>

              <Grid item xs={6}>
                <Field
                  name="Return Date"
                  render={props => {
                    props.input.onChange(formInfo.returnDate);
                    return <KeyboardDatePicker
                      className="field"
                      // disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      label="Return Date"
                      value={formInfo.returnDate}
                      onChange={handleReturnDate}
                    />
                  }}
                >
                </Field>
              </Grid>
              </MuiPickersUtilsProvider>

              <Grid item xs={6}>
                <Field
                  className="field"
                  name="People"
                  component={Select}
                  label="People"
                  render={props => {
                    props.input.onChange(formInfo.people)
                  }}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                </Field>
              </Grid>

              <Grid item xs={6}>
                <Field
                  className="field"
                  name="Transportation"
                  component={Select}
                  label="Transportation"
                  render={props => {
                    props.input.onChange(formInfo.transportation)
                  }}
                >
                  <MenuItem value="rental car">Rental Car</MenuItem>
                  <MenuItem value="cruise ship">Cruise Ship</MenuItem>
                  <MenuItem value="tour bus">Tour Bus</MenuItem>
                  <MenuItem value="airplane">Airplane</MenuItem>
                </Field>
              </Grid>

              <Grid item xs={6}>
                <Field
                  className="field"
                  name="Name"
                  component={TextField}
                  label="Name"
                >
                </Field>
              </Grid>

              <Grid item xs={6}>
                <Field
                  className="field"
                  name="Email"
                  component={TextField}
                  label="Email"
                >
                </Field>
              </Grid>

              <Grid item xs={6}>
                <Field
                  className="field"
                  name="Message"
                  component={TextField}
                  label="Message"
                >
                </Field>
              </Grid>

              <Grid item xs={6}>
                <Button
                  className="field"
                  variant='contained'
                  color='primary'
                  type='submit'
                  disabled={submitting}
                >
                  Create a quote
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </form>
      )}
    >
    </Form>
  )
}

export default QuoteForm;