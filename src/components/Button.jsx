import React from 'react'
import { Form, Button } from 'antd';
const FormItem = Form.Item;

const RegisterButton = ({type, name, handleClick, registerUser}) => {
  return(
    <FormItem>
      <Button type={type} onClick={() => handleClick(registerUser)}>{name}</Button>
    </FormItem>
  )
}

export default RegisterButton;