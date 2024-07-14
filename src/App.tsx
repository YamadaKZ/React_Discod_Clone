import "./App.scss"
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./utils/ErrorFallBack";

const App = () => {

  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if(loginUser) {
        dispatch(login({
          uid:loginUser.uid,
          photo: loginUser.photoURL,
          email: loginUser.email,
          displayName: loginUser.displayName
        })
      )
      } else {
        dispatch(logout());
      }
    })
  },[dispatch]);



  return (
    <div className="App">
      {user ? (
        <>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Sidebar />
        </ErrorBoundary>
          <Chat/>
        </>
      ) : (
        <>
        <Login />
        </>
      )}

    </div>
  );
}

export default App
