import './App.css';
import { Container } from '@material-ui/core';
import SimpleBottonNavigation from './components/MainNav';
import Header from './components/header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
        <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
        </Switch>
        </Container>
      </div>
      <SimpleBottonNavigation />
    </BrowserRouter>
  );
}

export default App;
