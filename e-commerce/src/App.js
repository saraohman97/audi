import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={ <HomeView /> } />
      </Routes>
    </div>
  );
}

export default App;