import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Article from './containers/Article';
import About from './containers/About';
import NotFound from './containers/NotFound';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
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
    </>
  );
}

export default App;
