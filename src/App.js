import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './containers/Home';
import Article from './containers/Article';
import About from './containers/About';
import NotFound from './containers/NotFound';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/blog" />
          </Route>
          <Route path="/blog" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog/:article">
            <Article />
          </Route>
          <Route path="/not-found">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
