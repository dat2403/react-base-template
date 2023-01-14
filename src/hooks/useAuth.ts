import {useAppDispatch, useAppSelector} from "../redux/store";
import {_signIn, _signOut, AuthState} from "../redux/slices/authSlice";


export default function useAuth() {
  const dispatch = useAppDispatch()
  const authState = useAppSelector(state => state.authentication)

  return {
    signIn(auth: AuthState) {
      dispatch(_signIn(auth))
    },
    signOut() {
      dispatch(_signOut())
    },
    ...authState
  }
}
