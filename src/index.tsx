import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Profile, SignIn } from './components'; 
//'src\components\SignUp\SignUp.tsx'
import reportWebVitals from './reportWebVitals';
import './styles.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Router>
      <Switch>

        <Route exact path='/'>
        <Home title={'By:Sami Sabeeh'}/>
        </Route>

        <Route exact path='/profile'>
        <Profile></Profile>
        </Route>

        <Route exact path='/signin'>
        <SignIn></SignIn>
        </Route>

      </Switch>
    </Router>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
