import logo from './logo.svg';
import './App.css';
import {Tabs, Tab} from 'react-bootstrap'
import {Timeline} from './Timeline';
import {Breakdown} from './Breakdown'
import {Identity} from './Identity';
import {Trauma} from './Trauma';


function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="timeline" id="uncontrolled-tab-example">
        <Tab eventKey="timeline" title="Timeline">
          <h3 className="title">Finlandia And Governor's General Award History</h3>
          <Timeline></Timeline>      
        </Tab>
      <Tab eventKey="Identity" title="Identity">
        <Identity />
      </Tab>
      <Tab eventKey="Trauma" title="Trauma">
        <Trauma />
      </Tab>
    </Tabs>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
