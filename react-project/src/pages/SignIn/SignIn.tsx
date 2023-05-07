import { auth } from '@/firebase/auth';
import { useState, useRef } from 'react';
import Button from '@/components/Button/Button';
import { MdArrowForwardIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from '@firebase/auth';

import {
  CheckStyle,
  IconWrapper,
  NotShowingPW,
  ShowingPW,
  SignInContainer,
  SignInFooter,
  SignInWrapper,
  SocialLogin,
  StyledLink,
  WarningStyle,
} from './SignInStyled';
import { GoogleButton } from '@/components/Button/SocialLoginButton/GoogleButton';
import { FaceBookButton } from '@/components/Button/SocialLoginButton/FaceBookButton';
import { GithubButton } from '@/components/Button/SocialLoginButton/GithubButton';

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

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValidEmail && isValidPW) {
      console.log(formData);
    } else {
      alert('⚠️ 아이디 혹은 비밀번호가 올바르지 않습니다. 다시 작성하세요.');
    }

    try {
      const curUserInfo = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log(curUserInfo);
      alert('로그인 되었습니다.');
      navigate('/');
    } catch (err) {
      console.log(err.code);
      alert('⚠️ 해당 계정이 없거나 잘못되었습니다. 다시 시도해주세요.');
      /*
      입력한 아이디가 없을 경우 : auth/user-not-found.
      비밀번호가 잘못된 경우 : auth/wrong-password.
      */
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
          <GoogleButton />
          <FaceBookButton />
          <GithubButton />
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

export default SignInForm;
