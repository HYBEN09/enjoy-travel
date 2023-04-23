/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import Button from '@/components/Button/Button';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { MdArrowForwardIos } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import GoogleLogo from '/public/GoogleLogo.svg';
import FaceBookLogo from '/public/FaceBookLogo.svg';
import AppleLogo from '/public/AppleLogo.svg';

type SignupFormProps = {
  onSubmit: (formData: SignupFormData) => void;
};

type SignupFormData = {
  username: string;
  email: string;
  password: string;
};

const SignupForm = (/*{ onSubmit }: SignupFormProps*/) => {
  const [formData, setFormData] = useState<SignupFormData>({
    username: '',
    email: '',
    password: '',
  });

  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //onSubmit(formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const checkStyle = styled.div`
    position: absolute;
    right: 0;
    top: 0;
  `;

  return (
    <SignupWrapper>
      <SignUpContainer onSubmit={handleSubmit}>
        <h2>SignUp</h2>

        <label htmlFor="username">Username</label>
        <AiFillCheckCircle />
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
          ref={usernameRef}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          ref={emailRef}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          ref={passwordRef}
        />
        <Button>
          PROCEED
          <IconWrapper>
            <MdArrowForwardIos />
          </IconWrapper>
        </Button>
      </SignUpContainer>
      <SignUpFooter>
        <span>Or Sign Up With</span>
        <SocialLogin>
          <a href="#">
            <img src={GoogleLogo} alt="구글" />
          </a>
          <a href="#">
            <img src={FaceBookLogo} alt="페이스북" />
          </a>
          <a href="#">
            <img src={AppleLogo} alt="애플" />
          </a>
        </SocialLogin>
        <span>
          Have an account?{' '}
          <a>
            <b>&nbsp;Log in</b>
          </a>
        </span>
      </SignUpFooter>
    </SignupWrapper>
  );
};

const SignupWrapper = styled.div`
  background: url('/public/SignUpBg.png') no-repeat;
  background-size: 100% 270px;
  padding-top: 250px;

  h2 {
    display: flex;
    justify-content: center;
    padding: 30px 0;
  }

  label {
    margin-bottom: 7px;
    font-size: 15px;
  }

  input {
    padding: 10px;
    padding-left: 25px;
    margin-bottom: 20px;
    border-radius: 100px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    font-size: 1rem;
  }
`;

const SignUpContainer = styled.form`
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--purple-600);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-bottom: 20px;
  background: var(--white);
  padding: 0 30px;
`;

const IconWrapper = styled.span`
  vertical-align: middle;
  padding-left: 10px;
  font-size: 14px;
`;

const SignUpFooter = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 10px;
    display: flex;
    justify-content: center;
    padding: 25px 0;
  }
`;

const SocialLogin = styled.div`
  display: flex;
  justify-content: space-evenly;

  img {
    height: 50px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    border-radius: 100%;
    padding: 15px;
  }
`;

export default SignupForm;
