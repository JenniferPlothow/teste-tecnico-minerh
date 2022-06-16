import logo from './logo.svg';
import './style.css';
import ApexChartBar from "./ApexChartBar";
import ApexChartScatter from "./ApexChartScatter";

function App() {
  return (
    <div className="App">
      <div className='main'>
      <h1>Desempenho de People Analytics</h1>
      <h2>melhoria de qualidade após metodologia aplicada em empresas</h2>
      <ApexChartBar />
      <ApexChartScatter />
    </div>
    </div>
  );
}

export default App;
