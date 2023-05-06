import { auth } from '@/firebase/auth';
import { provider } from '@/firebase/app';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from '@firebase/auth';
import FaceBookLogo from '/public/assets/FaceBookLogo.svg';

export function FaceBookButton() {
  const navigate = useNavigate();

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('페이스북 로그인', result.user);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button onClick={handleFacebookSignIn}>
      <img src={FaceBookLogo} alt="페이스북" />
    </button>
  );
}
