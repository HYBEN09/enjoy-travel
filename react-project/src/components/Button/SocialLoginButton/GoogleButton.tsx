import { auth } from '@/firebase/auth';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '/public/assets/GoogleLogo.svg';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';

export function GoogleButton() {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('구글 로그인', result.user);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button onClick={handleGoogleSignIn}>
      <img src={GoogleLogo} alt="구글" />
    </button>
  );
}
