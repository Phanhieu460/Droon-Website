import React from 'react'
import { Button, Form, Input } from 'antd'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { openNotification } from '../../util/notifications'
import Cookies from 'js-cookie'

export interface ICreateAccount {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<ICreateAccount>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate()
  const redirectLogin = () => {
    navigate('/login')
  }
  function handleOnChange(e: any) {
    const { value, name } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault()
    setLoading(true)
    if (formData.password !== formData.confirmPassword) {
      openNotification(
        {
          message: 'Passwords do not match',
          description: ' Your password is not correct, please enter again!'
        },
        'error'
      )
      setLoading(false)
      return
    }
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/register`, formData)
      if (data) {
        Cookies.set('authToken', data.token)
        Cookies.set('refreshToken', data.refreshToken)
        navigate('/')
        openNotification(
          {
            message: 'register',
            description: ''
          },
          'success'
        )
      }
    } catch (error: any) {
      openNotification(
        {
          message: error.message,
          description: ''
        },
        'error'
      )
    }
    setLoading(false)
  }
  return (
    <Form onFinish={handleSubmit} className="main">
      <h1>Create Account</h1>
      <p>Please Register using account detail bellow.</p>
      <Form.Item
        className="main_input"
        label=""
        name="firstName"
        rules={[{ required: true, message: 'Please input your First Name!', whitespace: true }]}
      >
        <Input placeholder="First Name" name="firstName" onChange={handleOnChange} />
      </Form.Item>
      <Form.Item
        className="main_input"
        label=""
        name="lastName"
        rules={[{ required: true, message: 'Please input your Last Name!', whitespace: true }]}
      >
        <Input placeholder="Last Name" name="lastName" onChange={handleOnChange} />
      </Form.Item>
      <Form.Item
        className="main_input"
        name="email"
        label=""
        rules={[
          { required: true, message: 'Please input your Email!' },
          { type: 'email', message: 'The input is not a valid email!' }
        ]}
      >
        <Input placeholder="Email" name="email" onChange={handleOnChange} />
      </Form.Item>
      <Form.Item
        className="main_input"
        label=""
        name="password"
        rules={[{ required: true, message: 'Please input your Password!', whitespace: true }]}
      >
        <Input.Password placeholder="Password" name="password" onChange={handleOnChange} />
      </Form.Item>
      <Form.Item
        className="main_input"
        label=""
        name="confirmPassword"
        rules={[{ required: true, message: 'Please input your Confirm Password!', whitespace: true }]}
      >
        <Input.Password placeholder="Confirm Password" name="confirmPassword" onChange={handleOnChange} />
      </Form.Item>
      <Form.Item>
        <Button className="main_button" type="primary" disabled={isLoading} htmlType="submit">
          Create
        </Button>
      </Form.Item>
      <div className="main_redirect">
        Already have an account?
        <a className="main_a" onClick={redirectLogin}>
          Log in Now
        </a>
      </div>
      <a className="main_a" onClick={redirectLogin}></a>
    </Form>
  )
}

export default Register
