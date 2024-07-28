import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import signupImage from '../../assets/images/blogimages/imagelogin.jpg'; // replace with your image path
import Header from '../../Header';

const Container = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSide = styled.div`
  flex: 1;
  background: url(${signupImage}) no-repeat center center/cover;

  @media (max-width: 768px) {
    display: none; /* Hide the image on small screens */
  }
`;

const FormSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }

  @media (max-width: 478px) {
    padding: 1vw;
  }
`;

const Form = styled.form`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 400px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const ErrorMessage = styled.p`
  color: #dc3545;
  font-size: 14px;
  margin-top: 5px;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`;

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: false, email: false, password: false });

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    let hasError = false;
    let newErrors = { username: false, email: false, password: false };

    if (!username) {
      newErrors.username = true;
      hasError = true;
    }

    if (!email) {
      newErrors.email = true;
      hasError = true;
    }

    if (!password || password.length < 8) {
      newErrors.password = true;
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      console.log('Signing up with:', { username, email, password });
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <ImageSide />
        <FormSide>
          <Form onSubmit={handleSignup}>
            <Title>Sign Up</Title>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              ref={usernameRef}
              autoComplete="username"
            />
            <ErrorMessage visible={errors.username}>* Username is required</ErrorMessage>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <ErrorMessage visible={errors.email}>* Email is required</ErrorMessage>
            <Input
              type="password"
              placeholder="Password (at least 8 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <ErrorMessage visible={errors.password}>* Password must be at least 8 characters</ErrorMessage>
            <Button type="submit">Sign Up</Button>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Form>
        </FormSide>
      </Container>
    </>
  );
};

export default Signup;
