import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Moviefix from './pages/Moviefix';
import './scss/style.scss';
import MovieDetails from './components/pagecomponents/MovieDetails';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Moviefix/>}/>
      <Route path='/movie-details/:id' element={<MovieDetails/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;



