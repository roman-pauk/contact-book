import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from './Button/Button'

import { RdTextField } from '../Dumb/FormFields/FormFields'
import { required, emailValidation } from '../Dumb/FormFields/validations'

function ContactForm({handleSubmit, onFormSubmit, pristine, btnText }) {
    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <Field
                name="first_name"
                label="First name"
                component={RdTextField}
                validate={required}
            /> 
            <Field
                name="last_name"
                label="Last name"
                component={RdTextField}
                validate={required}
            /> 
            <Field
                name="phone"
                label="Phone number"
                type="tel"
                component={RdTextField}
                validate={required}
            />
            <Field
                name="email"
                label="Email address"
                type="email"
                component={RdTextField}
                validate={[required, emailValidation]}
            />
            <Field
                name="birth_date"
                label="Date of birth"
                type="date"
                component={RdTextField}
                validate={required}
            />
            <div
                style={{
                    padding: 10,
                    textAlign: "center"
                }}
            >
                <Button disabled={pristine} type="submit" variant="contained" color="primary">{ btnText || 'Save' }</Button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'contact-form'
})(ContactForm)
