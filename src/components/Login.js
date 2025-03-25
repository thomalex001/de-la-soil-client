import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../src/lib/api';
import { AUTH } from '../../src/lib/auth';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import styled from 'styled-components';
import { RegisterContainer } from './Home.tsx';
import Theme from './Theme.js';

const initialFormData = {
  email: '',
  password: ''
};

const Login = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(initialFormData);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    API.POST(API.ENDPOINTS.login, formFields)
      .then(({ data: { token, cartId } }) => {
        AUTH.setToken(token);
        console.log(cartId);
        navigate('/home');
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
          maxWidth='lg'
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
        </LoginContainer>
      </Theme>
    </>
  );
};

export default Login;

const LoginContainer = styled(RegisterContainer)`

`;
