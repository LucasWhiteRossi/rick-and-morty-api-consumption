import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home'
import {Characters} from './pages/Characters'
import {Locations} from './pages/Locations'
import {Episodes} from './pages/Episodes'
import {ReadSelected} from './pages/ReadSelected'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/read-selected" element={<ReadSelected/>}/>
          <Route path="/locations" element={<Locations/>}/>
          <Route path="/episodes" element={<Episodes/>}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
