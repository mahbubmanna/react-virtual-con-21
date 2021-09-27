import './App.css';
import Header from './component/Header/Header';
import Conference from './component/Conference/Conference';

function App() {
  return (
    <div className="App">
      <div className="content-container">
        <Header></Header>
        <Conference></Conference>
      </div>
    </div>
  );
}

export default App;
