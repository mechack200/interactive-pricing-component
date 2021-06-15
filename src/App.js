import logo from './logo.svg';
import './App.css';
import { Header } from './Components/header/Header.component';
import { CurveSvg } from './Components/curve-svg-compnent/curve.svg.component';

function App() {
  return (
    <div className="App">
      {/* <CurveSvg/> */}
       <Header/>
    </div>
  );
}

export default App;
