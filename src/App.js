
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import VotingList from './pages/voting';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/voting" component={VotingList} exact/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
