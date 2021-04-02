import logo from './logo.svg';
import './App.css';
import {Tabs, Tab} from 'react-bootstrap'
import {Timeline} from './Timeline';
import {Breakdown} from './Breakdown'
import {Identity} from './Identity';


function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="timeline" title="Timeline">
          <h3 className="title">Finlandia And Governor's General Award History</h3>
          <Timeline></Timeline>      
        </Tab>
      <Tab eventKey="charts" title="Charts">
        <Breakdown></Breakdown>
      </Tab>
      <Tab eventKey="Identity" title="Identity">
        <Identity />
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
