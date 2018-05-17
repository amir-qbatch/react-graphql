import React from 'react';
import { Form, Input, Icon } from 'antd';
const FormItem = Form.Item;

const Field = ({handleChange, type, name}) => {
  return (
    <FormItem>
      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={(e) => handleChange(name, e)} type={type} placeholder={name} />
    </FormItem>
  )
}

export default Field;