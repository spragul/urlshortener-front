import React from 'react'
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"

import { Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Signup } from './pages/signup';
import { Firstpage } from './pages/emtypage';
import { Forgot } from './pages/forgotpass';
import { Reset } from './pages/resetpassword';
import { UrlShortener } from './url/urlDashboard';
import { TableList } from './url/urlList';
import EmailVerify from './pages/verifyemail';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Firstpage/>
      </Route>
      <Route exact path='/login'>
        <Login/>
      </Route>
      <Route path='/signup'>
        <Signup/>
      </Route>
      <Route path='/:id/verify/:token/'>
        <EmailVerify/>
      </Route>
      <Route path='/forgotpassword'>
        <Forgot/>
      </Route>
      <Route path='/resetpassword'>
        <Reset/>
      </Route>
      <Route path='/url/short'>
        <UrlShortener/>
      </Route>
      <Route path='/url/list'>
        <TableList/>
      </Route>
    </div>
  );
}

export default App;
