import ExampleSankey from '../components/ExampleSankey';

const Diagram = () => {
  return (
    <div>
      <div className="text-center">
        <h1>Sankey Diagram</h1>
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
        <ExampleSankey />
      </div>
    </div>
  );
};

export default Diagram;
