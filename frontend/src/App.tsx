import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import { signIn, signOut } from './reducks/users/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserIcon, getUserId, getUserName } from './reducks/users/selectors';

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  const uid = getUserId(selector);
  const username = getUserName(selector);
  const icon = getUserIcon(selector);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(signIn(user))
    } else {
      dispatch(signOut())
    }
  }, [isAuthenticated, user, dispatch])

  return (
    <div className="App">
      {isAuthenticated ? 
        <Button onClick={() => {
          logout({ returnTo: window.location.origin });
        }}>
          logout
        </Button>
      :
        <Button 
          onClick={() => loginWithRedirect()}
        >
          login
        </Button>
      }
      <br/>
      id: {uid} <br/>
      name: {username}<br/>
      <img src={icon} alt="" />
      
    </div>
  );
}

export default App;
