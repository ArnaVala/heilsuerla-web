import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {Text, Flex, Label, Input, Link, Textarea, Button, Box} from 'theme-ui'

const ServiceForm = () => {
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
      body: encode({'form-name': 'heilsuvidtal-fyrirspurn',
        ...formData})
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
      })
    event.preventDefault()
  }

  const showThankYou = (
    <Flex bg='primary' sx={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', minHeight: '360px'}}>
      <Text color='primaryBg' variant='heading'>Takk fyrir að hafa samband!</Text>
      <Text variant='bigBody' pb='16px' color='primaryBg' sx={{letterSpacing: '0.03em', fontWeight: '300', textAlign: 'center', maxWidth: '360px'}}>Skilaboðin hafa verið send, ég hef samband við fyrsta tækifæri.</Text>
      <Link pt='16px' variant='textLink' role='button' onClick={() => setSubmitted(false)}>Senda önnur skilaboð?</Link>
    </Flex>
  )

  const showForm = (
    <form
      onSubmit={handleSubmit(handlePost)}
      name='heilsuvidtal-fyrirspurn'
      data-netlify='true'
      netlify-honeypot='got-ya'
      method='post'
    >
      <input type='hidden' name='form-name' value='heilsuvidtal-fyrirspurn'
      />
      <input
        type='hidden'
        name='formId'
        value='heilsuvidtal-fyrirspurn'
        ref={register()}
      />
      <Box pb='32px'>
        <Label htmlFor='name'>
          Fullt nafn
        </Label>
        <Input
          type='text'
          aria-invalid={errors.name ? 'true' : 'false'}
          name='name'
          id='name'
          placeholder='Fullt nafn'
          ref={register({
            required: {
              value: true,
              message: 'Fylltu inn reitinn.'
            },
            minLength: {
              value: 3,
              message: 'Vinsamlegast fylltu út fullt nafn.'
            }

          })}
          disabled={isSubmitting}
        />
        {errors.name && <Text role='alert' sx={{position: 'absolute', fontSize: '14px'}} pt='4px' color='accent'>{errors.name.message}</Text>}
      </Box>
      <Box pb='32px'>
        <Label htmlFor='title'>
          Vinnustaður / Hópur
        </Label>
        <Input
          type='text'
          aria-invalid={errors.title ? 'true' : 'false'}
          name='title'
          id='title'
          placeholder='Vinnustaður eða hópur'
          ref={register({
            required: {
              value: true,
              message: 'Fylltu inn reitinn.'
            },
            minLength: {
              value: 3,
              message: 'Vinsamlegast fylltu út reitinn.'
            }

          })}
          disabled={isSubmitting}
        />
        {errors.title && <Text role='alert' sx={{position: 'absolute', fontSize: '14px'}} pt='4px' color='accent'>{errors.title.message}</Text>}
      </Box>
      <Box pb='32px'>
        <Label htmlFor='email'>
          Netfang
        </Label>
        <Input
          type='email'
          name='email'
          id='email'
          aria-label='Netfang'
          aria-invalid={errors.email ? 'true' : 'false'}
          placeholder='Netfangið t.d. email@email.is'
          ref={register({
            required: {
              value: true,
              message: 'Fylltu inn reitinn.'
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Athugaðu að netfang sé rétt'
            }
          })}
          disabled={isSubmitting}
        />
        {
          errors.email && <Text role='alert' sx={{position: 'absolute', fontSize: '14px'}} pt='4px' color='accent'>{errors.email.message}</Text>
        }
      </Box>
      <Box pb='32px'>
        <Label sx={{width: '100%'}} htmlFor='tel'>Símanúmer
        </Label>
        <Input
          aria-label='Símanúmer valkvætt'
          type='tel'
          name='tel'
          id='tel'
          placeholder='Símanúmer er valkvætt'
          ref={register({
            pattern: {
              value: /^[0-9\b]+$/,
              message: 'Bara númer hér takk'
            },
            minLength: {
              value: 7,
              message: 'Vinsamlegast fylltu út gilt símanúmer.'
            }
          }
          )}
          disabled={isSubmitting}
        />
        {
          errors.tel && (
            <Text role='alert' sx={{position: 'absolute', fontSize: '14px'}} pt='4px' color='accent'>
              {errors.tel.message}
            </Text>
          )
        }

      </Box>

      <Box pb='32px'>
        <Label htmlFor='message'>
          Skilaboð
        </Label>
        <Textarea
          name='message'
          id='message'
          rows='4'
          placeholder='Skrifaðu skilaboð til mín hér.'
          disabled={isSubmitting}
          ref={register({
            required: 'Fylltu inn reitinn.',
            minLength: {
              value: 1,
              message: 'Vinsamlegast fylltu inn skilaboð.'
            }

          })}
        />
        {
          errors.message && (
            <Text role='alert' sx={{position: 'absolute', fontSize: '14px'}} pt='4px' color='accent'>
              {errors.message.message}
            </Text>
          )
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

      <Button variant='primary' type='submit' mt='16px' disabled={isSubmitting}>Senda fyrirspurn</Button>
    </form>
  )
  return (
    <Box>
      {submitted ? showThankYou : showForm
      }
    </Box>
  )
}

export default ServiceForm
