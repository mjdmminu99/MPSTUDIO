import firebase from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
const auth = getAuth();

export const signup = async ({ firstName, lastName, email, password }) => {
  const resp = await createUserWithEmailAndPassword(auth, email, password);
  console.debug(resp);
  const user = auth.currentUser;
  await user.updateProfile({ displayName: `${firstName} ${lastName}` });
  return user;
};

export const logout = () => {
  return signOut(auth);
};

export const login = async ({ email, password }) => {
  const resp = await signInWithEmailAndPassword(auth, email, password);
  return resp.user;
};
