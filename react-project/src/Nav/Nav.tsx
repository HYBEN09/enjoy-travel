import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/review'}>Review</NavLink>
      <NavLink to={'/community'}>Community</NavLink>
      <NavLink to={'/news'}>News</NavLink>
      <NavLink to={'/signIn'}>SignInForm</NavLink>
      <NavLink to={'/signUp'}>SignupForm</NavLink>
    </div>
  );
}
