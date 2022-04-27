import './App.css';
import Result from './pages/Result';
import Question from './pages/Question';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/question' element = {<Question />} />
        <Route path='/result' element = {<Result />} />
      </Routes>
    </>
  );
}
// import { Form } from 'react-bootstrap';

export default App;
 