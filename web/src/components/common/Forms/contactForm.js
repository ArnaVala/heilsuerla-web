import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {navigate} from 'gatsby'
import {Text, Label, Input, Textarea, Button, Box} from 'theme-ui'

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
    formState: {isSubmitting}
  } = useForm()

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handlePost = (formData, event) => {
    fetch(`/`, {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode({'form-name': 'contact-form', ...formData})
    })
      .then((response) => {
        setSubmitted(true)
        reset()
        console.log(response)
      })
      .catch((error) => {
        setError(
          'submit',
          'submitError',
          `Æ! Eitthvað hefur klikkað! ${error.message}`
        )
        console.log(error)
      })
    event.preventDefault()
  }

  const showThankYou = (
    <Box bg='primaryBg'>
      <Text variant='bigBody'>Takk fyrir, skilaboðin hafa verið send, ég hef samband við fyrsta tækifæri.</Text>
      <Button type='button' onClick={() => setSubmitted(false)}>Senda önnur skilaboð?</Button>
    </Box>
  )
  const showForm = (
    <form
      onSubmit={handleSubmit(handlePost)}
      name='contact-form'
      data-netlify='true'
      netlify-honeypot='got-ya'
      method='post'
    >
      <input type='hidden' name='form-name' value='contact-form' />
      <input
        type='hidden'
        name='formId'
        value='contact-form'
        ref={register()}
      />
      <Box py='16px'>
        <Label htmlFor='name'>
          Fullt nafn
        </Label>
        <Input
          type='text'
          name='name'
          id='name'
          placeholder='Hvað heitir þú?'
          ref={register({required: 'Vinsamlegast fylltu út reitinn.'})}
          disabled={isSubmitting}
        />
        {errors.name && <Text pt='8px' color='accent'>Ég þarf að vita hvað þú heitir.</Text>}
      </Box>
      <Box>
        <Label htmlFor='email'>
          Netfang
        </Label>
        <Input
          type='email'
          name='email'
          id='email'
          placeholder='Netfangið þitt hér, t.d. nafn@email.is'
          ref={register({required: 'Vinsamlegast fylltu út reitinn.'})}
          disabled={isSubmitting}
        />
        {
          errors.email && <Box>Athugaðu hvort netfang sé rétt.</Box>
        }

      </Box>
      <Box>
        <Label htmlFor='message'>
          Skilaboð
        </Label>
        <Textarea
          ref={register({required: 'Vinsamlegast fylltu út reitinn.'})}
          name='message'
          id='message'
          rows='4'
          placeholder='Skrifaðu skilaboð til mín hér.'
          disabled={isSubmitting}
        />
        {
          errors.message && <Box>Vinsamlegast skrifaðu mér skilaboð.</Box>
        }

      </Box>
      <label
        htmlFor='got-ya'
        style={{
          position: 'absolute',
          overflow: 'hidden',
          clip: 'rect(0 0 0 0)',
          height: '1px',
          width: '1px',
          margin: '-1px',
          padding: '0',
          border: '0'
        }}
      >
        Ekki fylla þetta út ef þú ert lifandi vera:
        <input tabIndex='-1' name='got-ya' ref={register()} />
      </label>

      <button type='submit' disabled={isSubmitting}>Senda skilaboð</button>
    </form>
  )
  return (
    <Box>
      <Box>
        {errors && errors.submit && showSubmitError(errors.submit.message)}
      </Box>
      <Box>{submitted ? showThankYou : showForm}</Box>
    </Box>
  )
}

export default ContactForm
