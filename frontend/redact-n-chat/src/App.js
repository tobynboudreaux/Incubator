import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import {Router} from "react-router";
import { LoginPage } from './views/LoginPage';
import { NavBar } from './components/NavBar';
import { RegisterPage } from './views/RegisterPage';
import { SwipePage } from './views/SwipePage';
import { SettingsPage } from './views/SettingsPage';
import { ChatPage } from './views/ChatPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* login page */}
          <Route exact path="/" component={LoginPage} />
          {/* register page */}
          <Route path="/register" component={RegisterPage} />
          {/* matching page */}
          <Route path="/swipe" component={SwipePage} />
          {/* user settings page */}
          <Route path="/settings" component={SettingsPage} />
           {/* messages page */}
          <Route path="/chat" component={ChatPage} />
        </Switch>

        {/* Bottom Nav Bar */}
        <NavBar />
      </BrowserRouter>

      
    </>
  );
}

export default App;
