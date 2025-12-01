import './App.css'
import Home from './pages/Home/Home'; 
import About from './pages/About/About';
import Tours from './pages/Tours/TourList';
function App() {
  

  return (
    <>
      <div className="section">
        <div className="container">
            <Home></Home>
        </div>
            
      </div>
        <div className="container">
            <About></About>
            <Tours></Tours>
        </div>
      
      
    </>
  )
}

export default App
