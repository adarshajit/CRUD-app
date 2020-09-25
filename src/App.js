import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ExcerciseList from './components/ExcerciseList';
import EditExcercise from './components/EditExcercise';
import CreateExcercise from './components/CreateExcercise';
import CreateUser from './components/CreateUser';
import Header from './components/HeaderComponent';

function App() {
  return (
    <Router>
      <Header />
      <br/>
      <Route path="/" exact component={ExcerciseList} />
      <Route path="/edit/:id" exact component={EditExcercise} />
      <Route path="/create" exact component={CreateExcercise} />
      <Route path="/user" exact component={CreateUser} />
    </Router>
  );
}

export default App;
