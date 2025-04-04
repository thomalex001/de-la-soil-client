'use client'

import React from 'react';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styled, { css } from 'styled-components';
import Theme from './Theme';

import {
  TextField,
  Button,
  Container,
  Box,
  IconButton
} from '@mui/material';

import { API } from '../lib/api';
import { AUTH } from '../lib/auth';

const Register = () => {
  const router = useRouter();
  const [formFields, setFormFields] = useState({
    email: '',
    username: '',
    password: '',
    passwordConfirmation: ''
  });
  const [file, setFile] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) =>
    setFormFields({ ...formFields, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const imageData = new FormData();
    imageData.append('file', file);
    imageData.append(
      'upload_preset',
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );
    try {
      const cloudinaryResponse = await API.POST(
        API.ENDPOINTS.cloudinary,
        imageData
      );

      const apiReqBody = {
        ...formFields,
        cloudinaryImageId: cloudinaryResponse.data.public_id
      };

      await API.POST(API.ENDPOINTS.register, apiReqBody);

      const loginData = await API.POST(API.ENDPOINTS.login, {
        email: formFields.email,
        password: formFields.password
      });

      AUTH.setToken(loginData.data.token);

      API.POST(API.ENDPOINTS.createUserCart, {}, API.getHeaders())
        .then(({ data }) => {
          localStorage.setItem('cartId', data.id);
          router.push('/home');
        })
        .catch(({ message, response }) => {
          console.error(message, response);
        });
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  return (
    <>
    <Theme>
      <div className='home-container'>
        <RegisterContainer>
          <Container
            maxWidth='lg'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <h1>Register a new account</h1>
            <form onSubmit={handleCreateUser}>
              <div>
                <TextField
                  fullWidth
                  size='small'
                  name='username'
                  id='username'
                  type='text'
                  label='Username'
                  required={true}
                  value={formFields.username}
                  onChange={handleChange}
                  error={error}
                  sx={{ mb: 2 }}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  size='small'
                  name='email'
                  id='email'
                  type='email'
                  label='Email'
                  required={true}
                  value={formFields.email}
                  onChange={handleChange}
                  error={error}
                  sx={{ mb: 2 }}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  size='small'
                  name='password'
                  id='password'
                  type='password'
                  label='Password'
                  required={true}
                  value={formFields.password}
                  onChange={handleChange}
                  error={error}
                  sx={{ mb: 2 }}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  size='small'
                  name='passwordConfirmation'
                  id='passwordConfirmation'
                  type='password'
                  label='Password Confirmation'
                  required={true}
                  value={formFields.passwordConfirmation}
                  onChange={handleChange}
                  error={error}
                  sx={{ mb: 2 }}
                />
              </div>
              <div>
                <Button
                  style={{ backgroundColor: '#597877' }}
                  variant='contained'
                  component='label'>
                  Upload Picture
                  <input
                    name='profile-picture'
                    id='profile-picture'
                    hidden
                    accept='image/*'
                    multiple
                    type='file'
                    onChange={handleFileChange}
                  />
                </Button>
                <IconButton
                  color='primary'
                  aria-label='upload picture'
                  component='label'
                  disabled>
                  <input
                    hidden
                    accept='image/*'
                    type='file'
                  />
                  {!file ? (
                    <Avatar />
                  ) : (
                    <CheckCircleIcon
                      fontSize='large'
                      sx={{ color: '#597877' }}
                    />
                  )}
                </IconButton>
              </div>
              <Button
                style={{ backgroundColor: '#597877' }}
                fullWidth
                sx={{ mt: 2 }}
                variant='contained'
                type='submit'>
                Create Account
              </Button>
            </form>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
              <p style={{ margin: 0, paddingRight: '5px' }}>
                Already have an account?
              </p>
              <Link
                style={{ color: 'primary' }}
                href='/login'
                className='links'>
                Sign-in
              </Link>
            </Box>
          </Container>
        </RegisterContainer>
      </div>
      </Theme>
    </>
  );
};

export default Register;

export const RegisterContainer = styled.div<{ $login?: boolean }>`
  padding: ${(props) => (props.$login? '2em 0' : '2em 0')};

  width: 100vw;
  background-color: ${(props) => props.theme.colors.verylightgreen};
  display: flex;
  flex-direction: column;
  align-items: center;
`;












// const ImgButton = styled.button<{ $hasImage: boolean }>`
//   ${({ $hasImage }) => $hasImage && css`
//     display: none;
//   `}
// `;

{
  /* <YearsOld $isHidden={isAgeOverflowing}>years old</YearsOld> */
}
