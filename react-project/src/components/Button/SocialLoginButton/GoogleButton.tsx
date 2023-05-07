import { auth } from '@/firebase/auth';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '/public/assets/GoogleLogo.svg';
import { GoogleAuthProvider, signInWithRedirect } from '@firebase/auth';

export function GoogleButton() {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    navigate('/');
  };

  return (
    <button onClick={handleGoogleSignIn}>
      <img src={GoogleLogo} alt="구글" />
    </button>
  );
}
