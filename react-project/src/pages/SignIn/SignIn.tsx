/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import Button from '@/components/Button/Button';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { MdArrowForwardIos } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';
import GoogleLogo from '/public/GoogleLogo.svg';
import FaceBookLogo from '/public/FaceBookLogo.svg';
import AppleLogo from '/public/AppleLogo.svg';
import { Link } from 'react-router-dom';

type SignInFormProps = {
  onSubmit: (formData: SignInFormData) => void;
};

type SignInFormData = {
  email: string;
  password: string;
};

const SignInForm = (/*{ onSubmit }: SignInFormProps*/) => {
  const [formData, setFormData] = useState<SignInFormData>({
    email: '',
    password: '',
  });

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPW, setIsValidPW] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValidEmail && isValidPW) {
      console.log(formData);
    } else {
      alert('⚠️ 아이디 혹은 비밀번호가 올바르지 않습니다. 다시 작성하세요.');
    }
    //onSubmit(formData);
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
    <SignInWrapper>
      <SignInContainer onSubmit={handleSubmit}>
        <h2>Log In</h2>

        <label htmlFor="email">
          Email
          {isValidEmail ? <CheckStyle /> : <WarningStyle />}
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
          placeholder="비밀번호를 입력하세요."
          value={formData.password}
          onChange={handleChangePW}
          ref={passwordRef}
          required
        />
        <a>Need Help?</a>
        <Button>
          로그인
          <IconWrapper>
            <MdArrowForwardIos />
          </IconWrapper>
        </Button>
      </SignInContainer>
      <SignInFooter>
        <span>Or Log In With</span>
        <SocialLogin>
          <a>
            <img src={GoogleLogo} alt="구글" />
          </a>
          <a>
            <img src={FaceBookLogo} alt="페이스북" />
          </a>
          <a>
            <img src={AppleLogo} alt="애플" />
          </a>
        </SocialLogin>
        <span>
          Newble?&nbsp;
          <StyledLink to="/signup">
            <b>Create Account</b>
          </StyledLink>
        </span>
      </SignInFooter>
    </SignInWrapper>
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

const ShowingPW = styled(AiOutlineEye)`
  position: absolute;
  right: 4%;
  top: 232%;
  font-size: 1.125rem;
  transform: translateY(-50%);
  color: var(--gray-700);
`;

const NotShowingPW = styled(AiFillEyeInvisible)`
  position: absolute;
  right: 4%;
  top: 232%;
  font-size: 1.125rem;
  transform: translateY(-50%);
  color: var(--gray-700);
`;

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

const SignInContainer = styled.form`
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--purple-600);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-bottom: 20px;
  background: var(--white);
  padding: 0 30px;

  a {
    font-size: 11px;
    display: flex;
    justify-content: flex-end;
    margin-top: -10px;
    margin-right: 8px;
    margin-bottom: 10px;
  }
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

export default SignInForm;
