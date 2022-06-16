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
      <img className='logo' src="https://media-exp1.licdn.com/dms/image/C4E0BAQGEXhuTfDc0eg/company-logo_200_200/0/1647548368009?e=1663200000&v=beta&t=i5VO4_z3bHitb0VxbjBq_8Imqo4pd92rfzyADkS1Iqg" alt="Logo empresa MINEHR"></img>
      <ApexChartBar />
      <ApexChartScatter />
      <div class="load">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
   
  );
}

export default App;
