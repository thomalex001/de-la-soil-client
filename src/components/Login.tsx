'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { API } from '../lib/api';
import { AUTH } from '../lib/auth';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import styled from 'styled-components';
import { RegisterContainer } from './Register';
import Theme from './Theme.js';
import Link from 'next/link';


const initialFormData = {
  email: '',
  password: ''
};

const Login = () => {
  const router = useRouter();
  const [formFields, setFormFields] = useState(initialFormData);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    API.POST(API.ENDPOINTS.login, formFields)
      .then(({ data: { token, cartId } }) => {
        AUTH.setToken(token);
        console.log(cartId);
        router.push('/home');
      })
      .catch(({ response }) => {
        console.error(response);
        setError(true);
      });
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <Theme>
        <LoginContainer
          $login
          className='register-container'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 500
          }}>
          <h1>Log in to your account</h1>
          <Box
            component='form'
            onSubmit={handleSubmit}>
            <Box>
              <TextField
                size='small'
                required={true}
                value={formFields.email}
                error={error}
                onChange={handleChange}
                type='email'
                label='Email'
                id='email'
                name='email'
                placeholder='Email'
                sx={{ mb: 2 }}
              />
            </Box>
            <Box>
              <TextField
                size='small'
                label='Password'
                type='password'
                required={true}
                value={formFields.password}
                error={error}
                onChange={handleChange}
                id='password'
                name='password'
                placeholder='Password'
              />
            </Box>
            <Button
              style={{ backgroundColor: '#597877' }}
              fullWidth
              sx={{ mt: 2 }}
              variant='contained'
              // color="success"
              type='submit'>
              Login
            </Button>
          </Box>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
              <p style={{ margin: 0, paddingRight: '5px' }}>
                Don't have an account?
              </p>
              <Link
                style={{ color: 'primary' }}
                href='/'
                className='links'>
                Register
              </Link>
            </Box>
        </LoginContainer>

      </Theme>
    </>
  );
};

export default Login;

const LoginContainer = styled(RegisterContainer)`

`;
