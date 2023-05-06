/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import { auth } from '@/firebase/auth';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button/Button';
import { MdArrowForwardIos } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';
import githubLogo from '/public/assets/githubLogo.svg';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { GoogleButton } from '@/components/Button/GoogleButton';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { FaceBookButton } from '@/components/Button/FaceBookButton';

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
          <button>
            <img src={githubLogo} alt="애플" />
          </button>
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

const CheckStyle = styled(AiFillCheckCircle)`
  position: absolute;
  right: 5%;
  top: 232%;
  transform: translateY(-50%);
  color: green;
`;

const WarningStyle = styled(RiErrorWarningLine)`
  position: absolute;
  right: 5%;
  top: 232%;
  transform: translateY(-50%);
  color: red;
`;

const CheckStyle2 = styled(AiFillCheckCircle)`
  position: absolute;
  right: 5%;
  top: 232%;
  transform: translateY(-50%);
  color: green;
`;

const WarningStyle2 = styled(RiErrorWarningLine)`
  position: absolute;
  right: 5%;
  top: 232%;
  transform: translateY(-50%);
  color: red;
`;

const ShowingPW = styled(AiOutlineEye)`
  position: absolute;
  right: 4%;
  top: 232%;
  transform: translateY(-50%);
  font-size: 1.125rem;
  color: var(--gray-700);
`;

const NotShowingPW = styled(AiFillEyeInvisible)`
  position: absolute;
  right: 4%;
  top: 232%;
  transform: translateY(-50%);
  font-size: 1.125rem;
  color: var(--gray-700);
`;

const SignupWrapper = styled.div`
  background: url('/public/assets/SignUpBg.png') no-repeat;
  background-size: 100% 270px;
  padding-top: 250px;
  position: relative;

  h2 {
    display: flex;
    justify-content: center;
    padding: 30px 0;
  }

  label {
    position: relative;
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
  input::placeholder {
    color: var(--gray-600);
    font-size: 0.7rem;
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
    padding: 30px 0;
    font-weight: 600;
  }
`;

const StyledLink = styled(Link)`
  color: var(--accent);
  &:focus,
  &:hover {
    text-decoration: underline;
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
