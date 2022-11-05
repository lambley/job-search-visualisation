import ExampleSankey from './components/ExampleSankey';

function App() {
  return (
    <div className="App">
      <h1 className="text-center">
        <img src="logo192.png" alt="" style={{ height: '1em' }} /> Job
        Application Data
      </h1>
      <div
        style={{
          width: '800px',
          marginTop: '32px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <ExampleSankey />
      </div>
    </div>
  );
}

export default App;
