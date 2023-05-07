import { auth } from '@/firebase/auth';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button/Button';
import { MdArrowForwardIos } from 'react-icons/md';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { createUserWithEmailAndPassword } from '@firebase/auth';

import {
  CheckStyle,
  CheckStyle2,
  IconWrapper,
  NotShowingPW,
  ShowingPW,
  SignUpContainer,
  SignUpFooter,
  SignupWrapper,
  SocialLogin,
  StyledLink,
  WarningStyle,
  WarningStyle2,
} from './SignUpStyled';
import { GoogleButton } from '@/components/Button/SocialLoginButton/GoogleButton';
import { FaceBookButton } from '@/components/Button/SocialLoginButton/FaceBookButton';
import { GithubButton } from '@/components/Button/SocialLoginButton/GithubButton';

type SignupFormData = {
  username: string;
  email: string;
  password: string;
};

const SignupForm = () => {
  useDocumentTitle('회원가입');

  const [formData, setFormData] = useState<SignupFormData>({
    username: '',
    email: '',
    password: '',
  });

  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPW, setIsValidPW] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValidName && isValidEmail && isValidPW) {
      console.log(formData);
    } else {
      alert('⚠️ 회원가입 양식이 올바르지 않습니다. 다시 작성하세요.');
    }

    try {
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log(createdUser);
      alert('회원가입이 완료되었습니다.');
      navigate('/signin');
    } catch (err) {
      console.log(err.code);
    }
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(value);

    if (value.length >= 2 && value.length <= 5) {
      setIsValidName(true);
    } else {
      setIsValidName(false);
    }
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(value);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValidEmail(emailPattern.test(value) && value.endsWith('.com'));
  };

  const handleChangePW = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(value);

    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
    setIsValidPW(passwordPattern.test(value));
  };

  const handleShowPW = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SignupWrapper>
      <SignUpContainer onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <label htmlFor="username">
          Username
          {isValidName ? <CheckStyle /> : <WarningStyle />}
        </label>

        <input
          type="text"
          name="username"
          id="username"
          placeholder="2글자 이상  ~  5글자 이하로 작성하세요."
          value={formData.username}
          onChange={handleChangeName}
          ref={usernameRef}
          required
        />

        <label htmlFor="email">
          Email
          {isValidEmail ? <CheckStyle2 /> : <WarningStyle2 />}
        </label>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="이메일을 입력하세요. ( ex : travel@naver.com )"
          value={formData.email}
          onChange={handleChangeEmail}
          ref={emailRef}
          required
        />

        <label htmlFor="password">
          Password
          <button type="button" onClick={handleShowPW}>
            {showPassword ? <ShowingPW /> : <NotShowingPW />}
          </button>
        </label>

        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          id="password"
          placeholder="영어+숫자 8자리이상 입력하세요."
          value={formData.password}
          onChange={handleChangePW}
          ref={passwordRef}
          required
        />
        <Button>
          회원가입
          <IconWrapper>
            <MdArrowForwardIos />
          </IconWrapper>
        </Button>
      </SignUpContainer>
      <SignUpFooter>
        <span>Or Sign Up With</span>
        <SocialLogin>
          <GoogleButton />
          <FaceBookButton />
          <GithubButton />
        </SocialLogin>
        <span>
          Have an account?&nbsp;
          <StyledLink to="/signin">
            <b>Log in</b>
          </StyledLink>
        </span>
      </SignUpFooter>
    </SignupWrapper>
  );
};

export default SignupForm;
