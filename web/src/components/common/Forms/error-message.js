/** jsx @jsx */
import React from 'react'
import {ErrorMessage} from 'formik'
import {Box} from 'theme-ui'
/**
 * FormikErrorMessage Component
 */

const FormErrorMessage = ({name}) => {
  return (
    <ErrorMessage name={name}>
      {(errMessage) => {
        return <Box sx={{color: 'red'}}>{errMessage}</Box>
      }}
    </ErrorMessage>
  )
}

export default FormErrorMessage
