import React from 'react'
import { Button } from 'react-bootstrap'

const SubmitButton = ({title}) => {
  return (
    <Button type="submit">{title}</Button>
  )
}

export default SubmitButton