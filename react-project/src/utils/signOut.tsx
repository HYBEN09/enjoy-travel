/* eslint-disable react-hooks/rules-of-hooks */
import { signOut } from '@firebase/auth';
import { Auth } from '@firebase/auth';

export const handleSignOut = async (auth: Auth): Promise<void> => {
  await signOut(auth);
  alert('로그아웃이 되었습니다.');
};
