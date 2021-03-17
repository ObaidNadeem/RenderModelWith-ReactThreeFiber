import logo from './logo.svg';
import './App.css';
import { Home } from './container/Home/Home'
import { Navbar } from './component/nav/Navbar';
import { Landing } from './component/Landing/Landing';

function App() {
  return (
    <div>
        {/* <Navbar /> */}
        <Landing />
    </div>
  );
}

export default App;
