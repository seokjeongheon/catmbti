import './App.css';
import home from './pages/home'
import result from './pages/result'
import question from './pages/Question'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/question' element={<Question/>} />
        <Route path='/result' element={<Result/>} />
      </Routes>
    </div>
  );
}

export default App;
