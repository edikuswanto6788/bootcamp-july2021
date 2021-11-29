
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import UserRoute from './components/UserRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { setUser } from './redux/action';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser))

      } else {
        dispatch(setUser(null))
      }
    })
  })
   
  return (
    <BrowserRouter>  
      <div className="App">
        <Header />
      <Switch>    
          <UserRoute exact path="/" component={Home}></UserRoute>
          <Route  path="/login" component={Login}></Route>
          <Route  path="/register" component={Register}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
