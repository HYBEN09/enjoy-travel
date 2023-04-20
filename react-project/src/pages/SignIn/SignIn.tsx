/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import Button from '@/components/Button/Button';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { MdArrowForwardIos } from 'react-icons/md';
import GoogleLogo from '/public/GoogleLogo.svg';
import FaceBookLogo from '/public/FaceBookLogo.svg';
import AppleLogo from '/public/AppleLogo.svg';

type SignInFormProps = {
  onSubmit: (formData: SignInFormData) => void;
};

type SignInFormData = {
  email: string;
  password: string;
};

const SignInForm = ({ onSubmit }: SignInFormProps) => {
  const [formData, setFormData] = useState<SignInFormData>({
    email: '',
    password: '',
  });

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <SignInWrapper>
      <SignInContainer onSubmit={handleSubmit}>
        <h2>Log In</h2>

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
      </SignInContainer>
      <SignInFooter>
        <span>Or Log In With</span>
        <SocialLogin>
          <img src={GoogleLogo} alt="구글" />
          <img src={FaceBookLogo} alt="페이스북" />
          <img src={AppleLogo} alt="애플" />
        </SocialLogin>
        <span>
          Newble?{' '}
          <a>
            <b>&nbsp;Create Account</b>
          </a>
        </span>
      </SignInFooter>
    </SignInWrapper>
  );
};

const SignInWrapper = styled.div`
  background: url('/public/SignInBg.png') no-repeat;
  background-size: 100% 305px;
  background-position: 0-6%;
  padding-top: 250px;

  h2 {
    display: flex;
    justify-content: center;
    padding: 25px 0;
    font-size: 30px;
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
    border: none;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    font-size: 1rem;
  }
`;

const SignInContainer = styled.form`
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

const SignInFooter = styled.div`
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
    border: 1px solid var(--gray-700);
    border-radius: 100%;
    padding: 15px;
  }
`;

export default SignInForm;
