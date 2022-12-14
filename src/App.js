import'./App.css';
import Home from './components/Home';
import TodoList from'./TodoList';
import {  BrowserRouter,  Routes,  Route,  Link} from"react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <div 
      className="App">
          <div className='Navigate'>
           <BrowserRouter>
            <Link to="/">Home</Link>{' '}
            <Link to="/about">About</Link>{' '}
            <Link to="/contact">Contact</Link>{' '}
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
          </BrowserRouter>
        </div>  
        </div>  
        );
    }


    export default App;
