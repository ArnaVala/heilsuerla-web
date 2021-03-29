import React from 'react'
import {Formik, Field, Form} from 'formik'
import {navigate} from 'gatsby'
import validationSchema from './validationSchema'
import {encode} from '../../../utils/index'

const ContactForm = () => {
  const handleSubmit = (values, {setSubmitting}) => {
    fetch('/?no-cache=1', {
      //eslint-disable-line
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode({
        'form-name': 'Contact Form Erla',
        ...values
      })
    })
      .then(() => {
        navigate('/success').then(() => {
          setSubmitting(false)
        })
      })
      .catch((error) => {
        console.log(error)
        alert('Error: Please Try Again!') //eslint-disable-line
        setSubmitting(false)
      })
  }

  return (
    <Formik
      initialValues={{name: '', email: '', message: ''}}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({errors, touched, isSubmitting}) => (
        <Form
          name='Contact'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
        >
          <div>
            <label htmlFor='name' >
              Name
            </label>

            <Field
              type='text'
              id='name'
              name='name'
              aria-label='Name'
            />

            {touched.name && errors.name && <p>{errors.name}</p>}
          </div>

          <div>
            <label htmlFor='email'>
              Email
            </label>

            <Field
              type='email'
              id='email'
              name='email'
              aria-label='Email'
            />

            {touched.email && errors.email && <p>{errors.email}</p>}
          </div>

          <div>
            <label htmlFor='message'>
              Message
            </label>

            <Field
              component='textarea'
              rows='6'
              id='message'
              name='message'
              aria-label='Message'
            />

            {touched.message && errors.message && <p>{errors.message}</p>}
          </div>

          <div>
            <button
              aria-label='Clear'
              type='reset'
            >
              Clear
            </button>

            <button
              aria-label='Send Message'
              type='submit'
              value='Send Message'
              disabled={isSubmitting}

            >
              Send Message
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
