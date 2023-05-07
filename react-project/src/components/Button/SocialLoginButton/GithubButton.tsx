import { useNavigate } from 'react-router-dom';
import githubLogo from '/public/assets/githubLogo.svg';
import { getAuth, signInWithPopup, GithubAuthProvider } from '@firebase/auth';

export default function GithubButton() {
  const navigate = useNavigate();

  const handleGithubSignIn = async () => {
    const provider = new GithubAuthProvider();
    const auth = getAuth();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      navigate('/');
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleGithubSignIn}>
      <img src={githubLogo} alt="깃허브" />
    </button>
  );
}
