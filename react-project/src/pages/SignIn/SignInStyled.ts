import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillCheckCircle } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';
import { AiOutlineEye } from 'react-icons/ai';

export const CheckStyle = styled(AiFillCheckCircle)`
  position: absolute;
  right: 5%;
  top: 232%;
  transform: translateY(-50%);
  color: green;
`;

export const WarningStyle = styled(RiErrorWarningLine)`
  position: absolute;
  right: 5%;
  top: 232%;
  transform: translateY(-50%);
  color: red;
`;

export const ShowingPW = styled(AiOutlineEye)`
  position: absolute;
  right: 4%;
  top: 232%;
  font-size: 1.125rem;
  transform: translateY(-50%);
  color: var(--gray-700);
`;

export const NotShowingPW = styled(AiFillEyeInvisible)`
  position: absolute;
  right: 4%;
  top: 232%;
  font-size: 1.125rem;
  transform: translateY(-50%);
  color: var(--gray-700);
`;

export const SignInWrapper = styled.div`
  background: url(${process.env.PUBLIC_URL}/assets/SignInBg.png) no-repeat;
  background-size: 100% 305px;
  background-position: 0-6%;
  padding-top: 250px;
  margin-bottom: 2rem;

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

export const SignInContainer = styled.form`
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

export const IconWrapper = styled.span`
  vertical-align: middle;
  padding-left: 10px;
  font-size: 14px;
`;

export const SignInFooter = styled.div`
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

export const StyledLink = styled(Link)`
  color: var(—accent) !important;
  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;

export const SocialLogin = styled.div`
  display: flex;
  justify-content: space-evenly;

  img {
    height: 50px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    border-radius: 100%;
    padding: 15px;
  }
`;
