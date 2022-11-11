import ExampleSankey from './components/ExampleSankey';
import NavMain from './components/NavMain';

function App() {
  return (
    <div className="App">
      <NavMain />

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
        <ExampleSankey width={1000} height={1000} />
      </div>
    </div>
  );
}

export default App;
