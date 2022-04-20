import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home'
import {Characters} from './pages/Characters'
import {Locations} from './pages/Locations'
import {Episodes} from './pages/Episodes'
import {ReadSelected} from './pages/ReadSelected'
import {UpdateSelected} from './pages/UpdateSelected'

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
          <Route path="/character/:selected_id" element={<UpdateSelected/>}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
