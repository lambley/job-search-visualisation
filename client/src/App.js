import ExampleSankey from './components/ExampleSankey';

function App() {
  return (
    <div className="App">
      <h1 className="text-center">
        <img src="logo192.png" alt="" style={{ height: '1em' }} /> Job Search
        Visualisation
      </h1>

      <div className="text-center">
        <p>
          Example Sankey Diagram created with{' '}
          <a href="https://sankeymatic.com/build/">Sankeymatic</a>
        </p>
        <p>
          My job search started on <strong>21st August 2022</strong> and is
          still ongoing!
        </p>
      </div>

      <div className="center-diagram">
        <ExampleSankey width={600} height={600} />
      </div>
    </div>
  );
}

export default App;
